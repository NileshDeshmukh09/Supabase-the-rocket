import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { LuTrendingUp } from "react-icons/lu";

interface CardProps {
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  percentage?: number;
  tooltip?: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, value, percentage, tooltip }) => (
  <li className="flex flex-col bg-white border shadow rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
    <div className="p-4 md:p-5 flex gap-x-2">
      {/* Icon Section */}
      <div className="shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-lg dark:bg-neutral-800">
        {icon}
      </div>
      <div className="grow">
        {/* Title and Tooltip */}
        <div className="flex items-center gap-x-2">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
            {title}
          </p>
          {tooltip && (
            <div className="hs-tooltip relative">
              <div className="hs-tooltip-toggle">
                <AiOutlineQuestionCircle className="shrink-0 w-4 h-4 text-gray-500 dark:text-neutral-500" />
                <span className="hs-tooltip-content opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700">
                  {tooltip}
                </span>
              </div>
            </div>
          )}
        </div>
        {/* Value and Percentage */}
        <div className="mt-1 flex items-center gap-x-2">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
            {value}
          </h3>
          {percentage !== undefined && (
            <span
              className={`inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full ${
                percentage > 0
                  ? "bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100"
                  : "bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100"
              }`}
            >
              {percentage > 0 ? <LuTrendingUp /> : <HiMiniArrowTrendingDown />}
              <span className="inline-block text-xs font-medium">
                {Math.abs(percentage)}%
              </span>
            </span>
          )}
        </div>
      </div>
      {/* Drag Handle */}
      <div className="shrink-0 flex justify-center items-center w-[26px] h-[46px] bg-gray-50 rounded-lg dark:bg-neutral-800">
        <PiDotsSixVerticalBold className="text-xl" />
      </div>
    </div>
  </li>
);

export default Card;
