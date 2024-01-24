import { NavLink, useParams } from 'react-router-dom';
import navigationStyles from '../Navigation/Navigation.module.scss';
import FilesIcon from '../../images/ui/Files.svg';
import FolderIcon from '../../images/ui/Folder.svg';

export default function CoursesMenu() {
  const {id} = useParams()
  return (
    <>
      <NavLink
        to={`/courses/${id}`}
        className={({ isActive }) =>
          `${navigationStyles.item} ${
            isActive ? navigationStyles.item_active : ''
          }`
        }
      >
        <div className={navigationStyles.itemContainer}>
          <img
            className={navigationStyles.itemImage}
            alt="иконка"
            src={FilesIcon}
          />
          <p>Основная информация</p>
        </div>
      </NavLink>
      <NavLink
        to={`/courses/${id}/lessons`}
        className={({ isActive }) =>
          `${navigationStyles.item} ${
            isActive ? navigationStyles.item_active : ''
          }`
        }
      >
        <div className={navigationStyles.itemContainer}>
          <img
            className={navigationStyles.itemImage}
            alt="иконка"
            src={FolderIcon}
          />
          <p>Материалы</p>
        </div>
      </NavLink>
    </>
  );
}
