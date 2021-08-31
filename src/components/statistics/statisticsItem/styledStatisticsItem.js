import styled from 'styled-components';

const LiItem = styled.li`
  padding: 5px;
  width: calc(100% / 5);
  background-color: #B0E0E6;
  transition: box-shadow 200ms linear;
  &:hover {
    box-shadow: 4px 4px 9px 7px rgba(34, 60, 80, 0.3);
  }
  .label,
  .percentage {
    display: block;
    padding: 10px;
  }
  .label {
    font-size: 14px;
  }
  .percentage {
    font-weight: 700;
    font-size: 18px;
  }
`;
export default LiItem;