import React from "react";
import "./ProgressBar.css";
function ProgressBar({ title, percentage, width }) {
  return (
    <div className="px-5">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <div className="flex percent items-center justify-between">
            <span>{title}</span>
            <span>{percentage}</span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
            <div
              className={`progress-bar bg-black h-2 w-[${width}]`}
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="80"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
