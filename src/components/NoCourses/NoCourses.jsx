import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import image from '../../images/ui/NoCurse.png';
import Button from '../ui-kit/Buttons/ButtonFilled/ButtonFilled';
import style from './NoCourses.module.scss';

// todo вставить все картинки кнопки и прочее чтобы был уневирсальный

/**
 * принимает пропс с навазнием нужного компонента
 * @param {text} emptyStates - принимает название пустой страницы
 */
export default function NoCourses({ emptyStates }) {
  const navigate = useNavigate()
  return (
    <section className={style.section}>
      <div className={style.container}>
        <img
          className={style.image}
          src={image}
          alt="Картинка планеты в космосе"
        />
        <p className={style.text}>У вас нет курсов</p>
        <div role='none' onClick={() => navigate('/courses/new-courses')}>
        <Button buttonText="Создать курс" />
        </div>
       
      </div>
    </section>
  );
}

NoCourses.propTypes = {
  /**
   * какую страницу выводить
   */
  emptyStates: PropTypes.string,
};

NoCourses.defaultProps = {
  emptyStates: '404',
};
