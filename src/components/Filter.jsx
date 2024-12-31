import PropTypes from "prop-types";
import { FilterSidebar } from "../styles/styled-components";

const AVAILABLE_SIZES = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

function Filter({ filters, onChange }) {
  return (
    <FilterSidebar>
      <nav>
        <h4>Sizes:</h4>
        {AVAILABLE_SIZES.map(label => (
          <label htmlFor={`checkbox-${label}`} key={label}>
            <input
              id={`checkbox-${label}`}
              checked={filters.includes(label)}
              data-testid="checkbox"
              onChange={onChange}
              type="checkbox"
              value={label}
            />
            <span className="checkmark">{label}</span>
          </label>
        ))}
      </nav>
    </FilterSidebar>
  );
}

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
