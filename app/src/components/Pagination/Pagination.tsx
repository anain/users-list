import React from "react";
import { Button } from "../Button/Button";
import "./Pagination.scss";

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  pageNumber: number;
  activePage: number;
  onPageClick: (page: number) => void;
}

const Pagination = ({
  pageNumber,
  activePage,
  className,
  onPageClick,
}: PaginationProps) => {
  return (
    <div className={`ds-pagination ${className ? className : ""}`}>
      {activePage > 0 && (
        <Button
          visuallyHideLabel
          label="Show previous page "
          onClick={() => onPageClick(activePage - 1)}
          iconBeforeLabel="arrow-left.svg"
          className="ds-pagination__arrow --previous"
        />
      )}
      {Array(pageNumber)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <Button
              label={index.toString()}
              onClick={() => onPageClick(index)}
              className={`ds-pagination__page ${
                activePage === index ? "--active-page" : ""
              }`}
            />
          </div>
        ))}
      {activePage < pageNumber - 1 && (
        <Button
          visuallyHideLabel
          label="Show next page"
          iconBeforeLabel="arrow-right.svg"
          onClick={() => onPageClick(activePage + 1)}
          className="ds-pagination__arrow --next"
        />
      )}
    </div>
  );
};

export default Pagination;
