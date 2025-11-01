import { Trash2 } from "lucide-react";
import React from "react";

type Adventure = {
  location: string;
  description: string;
  date: string;
};

type Props = {
  adventure: Adventure;
  onDelete: () => void;
};

const AdventureCard: React.FC<Props> = ({ adventure, onDelete }) => {
  const dateObj = new Date(adventure.date);
  const readableDate = dateObj.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="w-full mb-3 bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col sm:flex-row w-full">
        {/* Decorative left panel */}
        <div className="sm:w-48 w-full bg-gradient-to-br from-sky-500 to-indigo-600 text-white p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs uppercase opacity-90">Adventure</div>
            <div className="mt-2 text-sm font-semibold">
              {adventure.location}
            </div>
            <div className="mt-3 text-xs bg-white/20 px-2 py-1 rounded-full inline-block">
              {readableDate}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-slate-900">
              {adventure.location}
            </h3>
            {/* <div className="hidden sm:flex items-center gap-2">
              <button className="text-sm text-slate-500 hover:text-slate-700">
                Share
              </button>
              <button className="px-3 py-1 bg-rose-500 text-white rounded-md text-sm shadow">
                View
              </button>
            </div> */}
            <button
              className="inline-flex cursor-pointer items-center px-2 py-2 bg-rose-600 hover:bg-rose-400 text-white  text-sm rounded-full"
              onClick={onDelete}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed text-justify">
            {adventure.description}
          </p>

          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 text-xs px-3 py-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15 8l6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8z" />
              </svg>
              Adventure
            </span>

            <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 text-xs px-3 py-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {dateObj.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          {/* Mobile actions */}
          {/* <div className="mt-4 sm:hidden flex items-center gap-3">
            <button className="flex-1 px-3 py-2 bg-slate-100 rounded-md text-sm">
              Share
            </button>
            <button className="flex-1 px-3 py-2 bg-rose-500 text-white rounded-md text-sm">
              View
            </button>
          </div> */}
        </div>
      </div>
    </article>
  );
};

export default AdventureCard;
