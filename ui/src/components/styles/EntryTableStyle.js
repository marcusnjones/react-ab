import styled from 'styled-components';

const EntryTable = styled.table`
  table-layout: fixed;
  width: 100%;
  thead {
    background-color: #f1f8ff;
  }
  thead tr th {
    padding: 4px;
    line-height: 1.5em;
    text-align: left;
    word-wrap: break-word;
  }
  thead tr th:nth-child(1),
  thead tr th:nth-child(2),
  thead tr th:nth-child(4),
  thead tr th:nth-child(6),
  thead tr th:nth-child(9) {
    width: 10%;
  }
  thead tr th:nth-child(3),
  thead tr th:nth-child(5) {
    width: 15%;
  }
  thead tr th:nth-child(7),
  thead tr th:nth-child(8) {
    width: 6%;
  }
  thead tr th:nth-child(10) {
    width: 8%;
  }
  tbody {
    font-size: 14px;
  }
  tbody tr {
    line-height: 1.5em;
    border: 1px solid #e1e4e8;
  }
  tbody tr:nth-child(odd) {
    background-color: #f6f8fa;
  }
  tbody tr td {
    word-wrap: break-word;
    padding: 4px;
  }
  tbody tr td span.date,
  tbody tr td span.time {
    display: block;
  }
  tbody tr td ul.action-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default EntryTable;
