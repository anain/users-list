import { useState } from "react";
import { Button } from "../Button/Button";

import "./Filter.scss";

type Props = {
  categories: Category[];
  onFilter: (checkedCategories: string[]) => void;
  icon?: string;
};

export type Category = {
  id: string;
  value: string;
};

const Filter = ({ categories, icon, onFilter }: Props) => {
  const [displayOptions, setDisplayOptions] = useState<boolean>(false);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  const updateFilter = (categoryId: string) => {
    if (checkedCategories.includes(categoryId)) {
      onFilter(checkedCategories.filter((cat) => cat !== categoryId));
      setCheckedCategories((curr) => curr.filter((cat) => cat !== categoryId));
    } else {
      onFilter([...checkedCategories, categoryId]);
      setCheckedCategories((curr) => [...curr, categoryId]);
    }
  };

  const clearFilter = () => {
    onFilter([]);
    setCheckedCategories([]);
  };

  return (
    <div className="ds-filter">
      <Button
        iconBeforeLabel={icon}
        iconAfterLabel="chevron-down.svg"
        label="Teams"
        onClick={() => {
          setDisplayOptions((curr) => !curr);
        }}
        className="ds-filter__toggle"
      />
      {displayOptions && (
        <div className="ds-filter__options">
          {categories.map((category, index) => {
            return (
              <div className="ds-filter__category" key={index}>
                <input
                  className="ds-filter__category-input"
                  type="checkbox"
                  value={category.value}
                  id={category.id}
                  onChange={() => updateFilter(category.id)}
                  checked={checkedCategories.includes(category.id)}
                />
                <label htmlFor={`${category.value}-${index}`}>
                  {category.value}
                </label>
              </div>
            );
          })}
          <div className="ds-filter__category-wrapper">
            <Button
              label="Clear filters"
              iconAfterLabel="eraser.svg"
              onClick={() => clearFilter()}
              className="ds-filter__category --erase"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
