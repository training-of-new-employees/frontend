import { NavLink } from 'react-router-dom';
import navigationStyles from '../Navigation/Navigation.module.scss';

export default function CoursesList() {
  const testData = [
    { id: 1, title: 'Lesson 1' },
    { id: 2, title: 'Lesson 2' },
    { id: 3, title: 'Lesson 4' },
  ];

  return (
    <>
      {testData.map((item) => (
        <NavLink
          key={item.id}
          to={`/lesson/${item.id}`}
          className={({ isActive }) =>
            `${navigationStyles.item} ${
              isActive ? navigationStyles.item_active : ''
            }`
          }
        >
          <div className={navigationStyles.itemContainer}>
            <p>{item.title}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
}
