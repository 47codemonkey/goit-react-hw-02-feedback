import React from 'react';
import P from 'prop-types';

const Statisctic = ({ label = 'error', value = 0, percent = false }) => {
  return (
    <li>
      {label}: {value} {percent && <span>%</span>}
    </li>
  );
};

Statisctic.propTypes = {
  label: P.string,
  value: P.number,
  percent: P.bool,
};

export default Statisctic;
