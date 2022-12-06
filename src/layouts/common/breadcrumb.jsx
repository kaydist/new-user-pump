import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ breadcrumb }) {
  return (
    <div className="space-x-3 center">
      {breadcrumb
        ? breadcrumb.map((item, index) => {
            return (
              <a key={index} className="center space-x-3">
                <Link to={item?.link ? item?.link : "#"}>
                  <span
                    className={`capitalize ${
                      index === breadcrumb.length - 1 &&
                      breadcrumb.length !== 1 &&
                      `text-black-30`
                    }`}
                  >
                    {item?.title}
                  </span>
                </Link>{" "}
                {index !== breadcrumb.length - 1 && (
                  <span>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.64645 1.44064C3.84171 1.26979 4.15829 1.26979 4.35355 1.44064L10.3536 6.69064C10.5488 6.8615 10.5488 7.1385 10.3536 7.30936L4.35355 12.5594C4.15829 12.7302 3.84171 12.7302 3.64645 12.5594C3.45118 12.3885 3.45118 12.1115 3.64645 11.9406L9.29289 7L3.64645 2.05936C3.45118 1.8885 3.45118 1.6115 3.64645 1.44064Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.64645 1.44064C7.84171 1.26979 8.15829 1.26979 8.35355 1.44064L14.3536 6.69064C14.5488 6.8615 14.5488 7.1385 14.3536 7.30936L8.35355 12.5594C8.15829 12.7302 7.84171 12.7302 7.64645 12.5594C7.45118 12.3885 7.45118 12.1115 7.64645 11.9406L13.2929 7L7.64645 2.05936C7.45118 1.8885 7.45118 1.6115 7.64645 1.44064Z"
                        />
                      </g>
                    </svg>
                  </span>
                )}
              </a>
            );
          })
        : null}
    </div>
  );
}
