import PropTypes, { func } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import tableStyles from './Table.module.scss';
import styles from '../../../pages/PositionsPage/PositionPage.module.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownMenuButton from '../DropdownMenuButton/DropdownMenuButton';
import help from '../../../images/ui/Bag.svg';
import { getUserByIdReducer } from '../../../services/users/usersSlice';

export default function Table({ columns, data, openPopup }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line react/no-array-index-key
  const headers = columns.map((col, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <th key={index}>{col.header}</th>
  ));

  console.log(data);
  const rows = Array.from(data).map((item) => (
    <tr key={item.id}>
      <td>
        {item.name} {item.surname} {item.patronymic}
      </td>
      <td>{item.company_name}</td>
      <td>{item.email}</td>
      <td>{item.active ? 'Активен' : 'Не активен'}</td>

      <td aria-label="Mute volume" className={tableStyles.tableCell}>
        <DropdownMenu isChild className={styles.iconMenu} stylesButton>
          <div role="none" onClick={() => navigate(`/users/${item.id}`)}>
            <DropdownMenuButton IconComponent={help} text="Редактировать" />
          </div>
          <div
            role="none"
            onClick={() => {
              dispatch(getUserByIdReducer(item));
              openPopup();
            }}
          >
            <DropdownMenuButton IconComponent={help} text="Архивировать" />
          </div>
        </DropdownMenu>
      </td>
      {/* {columns.map((col, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <td key={index}>{item[col.accessor]}</td>
      ))} */}
    </tr>
  ));

  return (
    <table className={tableStyles.table}>
      <thead className={tableStyles.title}>
        <tr>{headers}</tr>
      </thead>
      <tbody className={tableStyles.tableContant}>{rows}</tbody>
    </table>
  );
}

Table.propTypes = {
  openPopup: func,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Table.defaultProps = {
  openPopup: func,
};
