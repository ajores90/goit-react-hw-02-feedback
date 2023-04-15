import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledList, StyledListItem } from './Statistics.styled';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, totalFeedback, positivePercentage } =
      this.props;

    return (
      <StyledSection>
        <StyledList>
          <StyledListItem>Good: {good}</StyledListItem>
          <StyledListItem>Neutral: {neutral}</StyledListItem>
          <StyledListItem>Bad: {bad}</StyledListItem>
          <StyledListItem>Total: {totalFeedback}</StyledListItem>
          <StyledListItem>
            Positive feedback: {positivePercentage.toFixed(1)}%
          </StyledListItem>
        </StyledList>
      </StyledSection>
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
