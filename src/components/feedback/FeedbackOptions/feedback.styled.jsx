import styled from '@emotion/styled';

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const StyledListItem = styled.li`
  margin: 0 10px;
`;

export const StyledButton = styled.button`
  background-color: #6c5ce7;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #9f7aea;
  }
`;
