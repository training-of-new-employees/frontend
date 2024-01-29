import PropTypes, { func } from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import tableStyles from './Table.module.scss';
import styles from '../../../pages/PositionsPage/PositionPage.module.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownMenuButton from '../DropdownMenuButton/DropdownMenuButton';
import help from '../../../images/ui/Bag.svg';
import { getUserByIdReducer } from '../../../services/users/usersSlice';
import { getCurrentLessonByIdReducer } from '../../../services/lessons/lessonsSlice';

export default function ListLessons({ columns, data }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line react/no-array-index-key
  const headers = columns.map((col, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <th key={index}>{col.header}</th>
  ));
  const rows = Array.from(data).map((item) => (
    <tr
      key={item.id}
      onClick={() => {

        dispatch(getCurrentLessonByIdReducer(item));
        navigate(`/courses/${item.course_id}/lessons/${item.id}`);
      }}
    >
      <td>{item.name}</td>
      <td>{item.arhcived ? 'Архивирован' : 'Не архивирован'}</td>

      <td
        aria-label="Mute volume"
        className={tableStyles.tableCell}
        onClick={(event) => event.stopPropagation()}
      >
        <DropdownMenu isChild className={styles.iconMenu} stylesButton>
          <div role="none" onClick={() => navigate(`/users/${item.id}`)}>
            <DropdownMenuButton IconComponent={help} text="Редактировать" />
          </div>
          <div
            role="none"
            onClick={() => {
              dispatch(getUserByIdReducer(item));
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

ListLessons.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
