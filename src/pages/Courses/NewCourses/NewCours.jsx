import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import style from '../../PositionsPage/NewPosition/NewPosition.module.scss';
import Input from '../../../components/ui-kit/Input/Input';
import Button from '../../../components/ui-kit/Button/Button';
import Navigation from '../../../components/Navigation/Navigation';
import sectionStyles from '../Courses.module.scss';
import {
  createPosition,
  getPositions,
} from '../../../services/positions/positionsSlice';
import { fetchProfile } from '../../../services/profile/profileSlice';
import NewCourses from '../../../components/NewCourses/NewCourses';

export default function NewCours() {
  const [position, setPosition] = React.useState();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profileState);

const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  function handlePosition(event) {
    setPosition(event.currentTarget.value);
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(
      createPosition({
        name: position,
        company_id: profile.company_id,
      })
    );
    setPosition('');
    console.log('form', position);
    dispatch(getPositions());
    navigate(-1);
  }

  return (
    <section className={sectionStyles.section}>
      <Navigation isAdmin areCoursesOpened={false} />

      <section className={style.sectionNewPositions}>
        <NewCourses />
      
      </section>
    </section>
  );
}
