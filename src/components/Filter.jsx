import { useMemo } from "react";
import { useProducts } from "../context/products";
import { FilterWrapper } from "../styles/styled-components";

const availableSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

function Filter() {
  const { filters, filterProducts } = useProducts();

  const selectedCheckboxes = useMemo(() => new Set(filters), [filters]);

  return (
    <FilterWrapper>
      <h4>Sizes:</h4>
      {availableSizes.map(label => (
        <label htmlFor={`checkbox-${label}`} key={label}>
          <input
            id={`checkbox-${label}`}
            checked={selectedCheckboxes.has(label)}
            data-testid="checkbox"
            onChange={() => {
              if (selectedCheckboxes.has(label)) {
                selectedCheckboxes.delete(label);
              } else {
                selectedCheckboxes.add(label);
              }

              filterProducts(Array.from(selectedCheckboxes));
            }}
            type="checkbox"
            value={label}
          />
          <span className="checkmark">{label}</span>
        </label>
      ))}
    </FilterWrapper>
  );
}

export default Filter;
