import React from 'react';
import P from 'prop-types';

const Statisctic = ({ label, value, percent }) => {
  return (
    <li>
      {label}: {value} {percent && <span>%</span>}
    </li>
  );
};

Statisctic.defaultProps = {
  label: 'error',
  value: 0,
  percent: false,
};

Statisctic.propTypes = {
  label: P.string,
  value: P.number,
  percent: P.bool,
};

export default Statisctic;
