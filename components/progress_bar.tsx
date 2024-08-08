import React, { useEffect, useState } from "react";

export default function ProgressBar({
  start,
  end,
}: {
  start: Date;
  end: Date;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();
      const totalDuration = end.getTime() - start.getTime();
      const elapsedTime = now.getTime() - start.getTime();
      const percentage = Math.min(
        Math.max((elapsedTime / totalDuration) * 100, 0),
        100
      );
      setProgress(percentage);
    };

    calculateProgress();
    const intervalId = setInterval(calculateProgress, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [start, end]);

  return (
    <div>
      <div
        className="text-teal-500 font-bold text-center"
        style={{ translate: `${progress - 50}% 0` }}
      >
        {progress.toPrecision(3)}%
      </div>
      <div className="bg-slate-50/10 rounded-lg w-full h-4">
        <div
          className="bg-teal-500/70 rounded-lg h-4"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
