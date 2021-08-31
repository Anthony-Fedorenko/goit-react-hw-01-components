import styled from 'styled-components';

const TransactionHistoryWrapper = styled.section`
  padding: 30px 0;
  .transaction-history {
    margin: 0 auto;
    border-collapse: collapse;
    border-radius: 5px;
    box-shadow: 4px 4px 19px 4px rgba(58, 42, 69, 0.2);
    overflow: hidden;
  }
  .thead {
    background-color: #4169E1;
    color: #ffffff;
  }
  .thead th {
    padding: 10px 15px;
    width: 200px;
    text-align: center;
    text-transform: uppercase;
  }
  .thead th:not(:last-child) {
    border-right: 1px solid #f2f7f8;
  }
  .tbody {
    font-size: 14px;
  }
  .tbody tr {
    color: #164a45;
    background-color: #B0C4DE;
    transition: background-color 50ms linear, color 50ms linear;
    &:hover {
      background-color: #00BFFF;
      color: #ffffff;
    }
  }
  .tbody tr:nth-child(2n) {
    background-color: #f3f0f8;
    transition: background-color 50ms linear, color 50ms linear;
    &:hover {
      background-color: #00BFFF;
      color: #ffffff;
    }
  }
  .tbody td {
    padding: 10px 15px;
    text-align: center;
  }
  .tbody td:not(:last-child) {
    border-right: 1px solid #f2f7f8;
  }
`;
export default TransactionHistoryWrapper;