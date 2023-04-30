import PropTypes from 'prop-types';

import { FilterField } from './Filter.styled';

export const Filter = ({ filter, handleFilterField }) => {
  return (
    <FilterField
      type="text"
      name="filter"
      placeholder="Find contacts by name"
      value={filter}
      onChange={handleFilterField}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterField: PropTypes.func.isRequired,
};
