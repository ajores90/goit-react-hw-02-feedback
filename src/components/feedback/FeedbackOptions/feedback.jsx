import React from 'react';
import PropTypes from 'prop-types';
import { StyledList, StyledListItem, StyledButton } from './feedback.styled';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <StyledList>
        {options.map(option => (
          <StyledListItem key={option}>
            <StyledButton name={option} onClick={onLeaveFeedback}>
              {option}
            </StyledButton>
          </StyledListItem>
        ))}
      </StyledList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
