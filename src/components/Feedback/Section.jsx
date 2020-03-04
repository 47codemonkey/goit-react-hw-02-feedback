import React, { Component } from 'react';
import P from 'prop-types';
import style from './statistic.module.css';
import Statisctics from './Statistics';
import FeedBackOptions from './FeedbackOptions';

class Section extends Component {
  static propTypes = {
    title: P.string,
  };

  static defaultProps = {
    title: 'Please leave feedback',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addComment = e => {
    const { name } = e.target;
    this.setState(prev => ({
      [name]: prev[name] + 1,
      total: prev.total + 1,
    }));
  };

  render() {
    const { title } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.container}>
        <h2>{title}</h2>
        <FeedBackOptions
          onLeaveFeedback={this.addComment}
          name="good"
          option="GOOD"
        />
        <FeedBackOptions
          onLeaveFeedback={this.addComment}
          option="NEUTRAL"
          name="neutral"
        />
        <FeedBackOptions
          onLeaveFeedback={this.addComment}
          name="bad"
          option="BAD"
        />
        <h2>Statisctics</h2>
        {!good && !neutral && !bad ? (
          'No feedback given'
        ) : (
          <Statisctics good={good} neutral={neutral} bad={bad} />
        )}
      </div>
    );
  }
}

export default Section;
