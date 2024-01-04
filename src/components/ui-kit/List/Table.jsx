import PropTypes from 'prop-types';
import tableStyles from './Table.module.scss';

export default function Table({ columns, data }) {
  // eslint-disable-next-line react/no-array-index-key
  const headers = columns.map((col, index) => <th key={index}>{col.header}</th>);
  const rows = data.map((item) => (
    <tr key={item.id}>
      {columns.map((col, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <td key={index}>{item[col.accessor]}</td>
      ))}
    </tr>
  ));

  return (
    <table className={tableStyles.table}>
      <thead className={tableStyles.title}>
        <tr>{headers}</tr>
      </thead>
      <tbody className={tableStyles.tableContant}>
        {rows}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired
    })
  ).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
