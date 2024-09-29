"use client";

import Countdown from "@/components/countdown";
import { useTimer } from "react-timer-hook";
import getAllDates, { getCurrectSchoolYear } from "@/utils/official";
import ProgressBar from "@/components/progress_bar";
import { useEffect, useState } from "react";

import "@/styles/colors.css";
import { formatDate } from "@/utils/date";

export default function Home() {
  const currentSchoolYear = getCurrectSchoolYear();
  const dates = getAllDates(currentSchoolYear);

  const [finalYear, setFinalYear] = useState(false);
  const [expiryTimestamp, setExpiryTimestamp] = useState(dates.end);

  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    document.title = `Pozostało ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, [seconds, minutes, hours, days]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinalYear(event.target.checked);
    setExpiryTimestamp(finalYear ? dates.grad_end : dates.end);

    restart(expiryTimestamp);
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

  const d0 = finalYear ? dates.grad_end : dates.end;
  const d1 = finalYear ? dates.final_grad_grades : dates.final_grades;

  const hoursToEnd = Math.floor(
    (d0.getTime() - new Date().getTime()) / (1000 * 60 * 60)
  );

  return (
    <main className={`gradient-${gradientType}`}>
      <section className="h-screen max-w-2xl flex flex-col mx-auto items-center justify-center">
        <h1 className="text-5xl font-semibold opacity-80">Ile do wakacji?</h1>

        <div className="inline-grid grid-cols-2 md:grid-cols-4 py-16 text-center gap-12 w-full">
          <div className="flex flex-col align-center">
            <div className="text-7xl font-bold">{days}</div>
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
        <div className="bottom-0 left-0 absolute m-2 opacity-10 hover:opacity-100">
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
      <section className="bg-slate-50 text-slate-900">
        <div className="flex justify-center *:flex-1 py-16 max-w-4xl mx-auto">
          <div className="text-center">
            <span className="text-2xl font-bold">
              {Math.max(hoursToEnd, 0)} godzin
            </span>
            <br />
            do końca roku szkolnego
          </div>

          <div className="text-center">
            <span className="text-2xl font-bold">
              <Countdown until={finalYear ? dates.grad_end : dates.end} /> dni*
            </span>
            <br />
            do końca roku szkolnego
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">
              <Countdown
                until={finalYear ? dates.final_grad_grades : dates.final_grades}
              />{" "}
              dni*
            </span>
            <br />
            do wystawienia ocen
          </div>
        </div>
        <table className="mx-auto mb-8 w-full max-w-4xl table-fixed border-collapse border border-black *:*:*:border *:*:*:border-black text-center">
          <thead>
            <tr id="small_rotate">
              <th> </th>
              <th>Język Polski</th>
              <th>Matematyka</th>
              <th>Język Angielski</th>
              <th>Informatyka</th>
              <th>Fizyka</th>
              <th>Historia</th>
              <th>Język Niemiecki</th>
              <th>WF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">{formatDate(d1)}</td>
              <td>
                <Countdown until={d1} weekdays={[1, 2, 2, 4]} />
              </td>
              <td>
                <Countdown until={d1} weekdays={[0, 1, 1, 3, 3]} />
              </td>
              <td>
                <Countdown until={d1} weekdays={[0, 2, 2]} />
              </td>
              <td>
                <Countdown until={d1} weekdays={[3, 3, 4]} />
              </td>
              <td>
                <Countdown until={d1} weekdays={[1, 3]} />
              </td>
              <td>
                <Countdown until={d1} weekdays={[2, 4]} />
              </td>
              <td>
                <Countdown until={d1} weekdays={[0, 0]} />
              </td>
              <td>
                <Countdown until={d1} weekdays={[2, 2]} />
              </td>
            </tr>
            <tr>
              <td className="font-bold">{formatDate(d0)}</td>
              <td>
                <Countdown until={d0} weekdays={[1, 2, 2, 4]} />
              </td>
              <td>
                <Countdown until={d0} weekdays={[0, 1, 1, 3, 3]} />
              </td>
              <td>
                <Countdown until={d0} weekdays={[0, 2, 2]} />
              </td>
              <td>
                <Countdown until={d0} weekdays={[3, 3, 4]} />
              </td>
              <td>
                <Countdown until={d0} weekdays={[1, 3]} />
              </td>
              <td>
                <Countdown until={d0} weekdays={[2, 4]} />
              </td>
              <td>
                <Countdown until={d0} weekdays={[0, 0]} />
              </td>
              <td>
                <Countdown until={d0} weekdays={[2, 2]} />
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mx-auto max-w-4xl w-full mb-8">
          * wyłączając dni wolne od zajęć.
        </p>
        <hr />
      </section>
    </main>
  );
}
