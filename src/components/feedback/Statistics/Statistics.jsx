import React from 'react';
import PropTypes from 'prop-types';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, totalFeedback, positivePercentage } =
      this.props;

    return (
      <section>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive feedback: {positivePercentage.toFixed(1)}%</li>
        </ul>
      </section>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
