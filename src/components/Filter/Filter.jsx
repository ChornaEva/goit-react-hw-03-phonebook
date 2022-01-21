import React from "react";
import PropTypes from "prop-types";
import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      <FilterInput
        name="filter"
        type="text"
        value={filter}
        onChange={onChange}
      ></FilterInput>
      Find contacts by name
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
