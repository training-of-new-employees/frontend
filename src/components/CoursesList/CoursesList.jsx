import { NavLink, useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import navigationStyles from '../Navigation/Navigation.module.scss';

export default function CoursesList() {
  const {id} = useParams()
  const {lessons} = useSelector((state) => state.lessonsState);
  const testData = [
    { id: 1, title: 'Lesson 1' },
    { id: 2, title: 'Lesson 2' },
    { id: 3, title: 'Lesson 4' },
  ];

  return (
    <>
      {lessons.map((item) => (
        <NavLink
          key={item.id}
          to={`/courses/${item.course_id}/lessons/${item.id}`}
          className={({ isActive }) =>
            `${navigationStyles.item} ${
              isActive ? navigationStyles.item_active : ''
            }`
          }
        >
          <div className={navigationStyles.itemContainer}>
            <p>{item.name}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
}
