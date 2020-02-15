import React from 'react';
import P from 'prop-types';

const FeedbackOptions = ({ option, onLeaveFeedback, name }) => {
  return (
    <button name={name} onClick={onLeaveFeedback} type="button">
      {option}
    </button>
  );
};

FeedbackOptions.propTypes = {
  option: P.string.isRequired,
  onLeaveFeedback: P.func.isRequired,
  name: P.string.isRequired,
};

export default FeedbackOptions;
