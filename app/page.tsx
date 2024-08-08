"use client";

import Countdown from "@/components/countdown";
import { useTimer } from "react-timer-hook";
import getAllDates, { getCurrectSchoolYear } from "@/utils/official";
import ProgressBar from "@/components/progress_bar";
import { useEffect, useState } from "react";

import "@/styles/colors.css";

export default function Home() {
  const currentSchoolYear = getCurrectSchoolYear();
  const dates = getAllDates(currentSchoolYear);

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: dates.end,
    onExpire: () => console.warn("onExpire called"),
  });

  const [finalYear, setFinalYear] = useState(false);

  const deltaDays =
    (dates.final_grades.getTime() - dates.final_grad_grades.getTime()) /
    (1000 * 60 * 60 * 24);

  useEffect(() => {
    document.title = `Pozostało ${
      finalYear ? days - deltaDays : days
    }d ${hours}h ${minutes}m ${seconds}s`;
  }, [seconds, minutes, hours, days, finalYear, deltaDays]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinalYear(event.target.checked);
  };

  let gradientType = 0;
  if (days > 100) {
    gradientType = 0;
  } else if (days > 50) {
    gradientType = 1;
  } else if (days > 20) {
    gradientType = 1;
  } else {
    gradientType = 3;
  }

  return (
    <main className={`gradient-${gradientType}`}>
      <section className="h-screen max-w-2xl flex flex-col mx-auto items-center justify-center">
        <h1 className="text-5xl font-semibold opacity-80">Ile do wakacji?</h1>

        <div className="inline-grid grid-cols-2 md:grid-cols-4 py-16 text-center gap-12 w-full">
          <div className="flex flex-col align-center">
            <div className="text-7xl font-bold">
              {finalYear ? days - deltaDays : days}
            </div>
            <div className="opacity-60">dni</div>
          </div>
          <div className="flex flex-col align-center">
            <div className="text-7xl font-bold">{hours}</div>
            <div className="opacity-60">godzin</div>
          </div>
          <div className="flex flex-col align-center">
            <div className="text-7xl font-bold">{minutes}</div>
            <div className="opacity-60">minut</div>
          </div>
          <div className="flex flex-col align-center">
            <div className="text-7xl font-bold">{seconds}</div>
            <div className="opacity-60">sekund</div>
          </div>
        </div>
        <div className="w-full px-8">
          <ProgressBar
            start={dates.start}
            end={finalYear ? dates.grad_end : dates.end}
          />
        </div>
        <div className="bottom-0 left-0 absolute m-2">
          <label>
            Rok maturalny
            <input
              type="checkbox"
              className="ml-2"
              checked={finalYear}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
      </section>
      <section className="bg-white text-black">
        <div className="flex justify-center py-4">
          <div className="px-20 py-10 text-center">
            <span className="text-2xl font-bold">
              <Countdown until={finalYear ? dates.grad_end : dates.end} /> dni
            </span>
            <br />
            do końca roku szkolnego
          </div>
          <div className="px-20 py-10 text-center">
            <span className="text-2xl font-bold">
              <Countdown
                until={finalYear ? dates.final_grad_grades : dates.final_grades}
              />{" "}
              dni
            </span>
            <br />
            do wystawienia ocen
          </div>
        </div>
      </section>
    </main>
  );
}
