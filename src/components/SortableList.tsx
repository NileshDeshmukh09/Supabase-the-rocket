import React, { useEffect, useRef } from "react";
import Sortable from "sortablejs";
import { FaUserFriends } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { MdOutlineAdsClick } from "react-icons/md";
import { LuScanEye } from "react-icons/lu";
import { Card } from "./Card";

const SortableList: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      Sortable.create(listRef.current, {
        animation: 150,
      });
    }
  }, []);

  const cards = [
    {
      icon: (
        <FaUserFriends className="shrink-0 text-2xl size-5 text-gray-600 dark:text-neutral-400" />
      ),
      title: "Total users",
      value: "72,540",
      percentage: 12.5,
      tooltip: "The number of daily users",
    },
    {
      icon: (
        <CgSandClock className="shrink-0 text-2xl size-5 text-gray-600 dark:text-neutral-400" />
      ),
      title: "Sessions",
      value: "29.4%",
    },
    {
      icon: (
        <MdOutlineAdsClick className="text-2xl shrink-0 size-5 text-gray-600 dark:text-neutral-400" />
      ),
      title: "Avg. Click Rate",
      value: "56.8%",
      percentage: -1.7,
    },
    {
      icon: (
        <LuScanEye className="text-2xl shrink-0 size-5 text-gray-600 dark:text-neutral-400text-purple-500" />
      ),
      title: "Pageviews",
      value: "189,320",
      tooltip: "The average pageviews"
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <ul
        ref={listRef}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </ul>
    </div>
  );
};

export default SortableList;
