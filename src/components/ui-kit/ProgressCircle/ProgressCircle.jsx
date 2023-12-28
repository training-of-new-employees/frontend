import React from 'react';
import {number} from "prop-types";
import styles from './ProgressCircle.module.scss';
import {useInterval} from "../../hooks/useInterval";

// Компонент "Круг-прогресс". Принимает в качестве пропса процент, на который заполняет круг.
// При изменении пропса круг динамичсески перерисовывается с анимацией.
// Если пропс не указать, компонент отрисовывается с цилклической анимацией круга.

export default function ProgressCircle({percentage}) {
  const [offset, setOffset] = React.useState(percentage ?? 0);
  React.useEffect(()=>{
    setOffset(percentage)
  }, [percentage])
  useInterval(()=>{
    if(percentage) {
      return
    }
    setOffset(offset + 100)
  }, 1000)

  return (
    <div className={styles.container}>
      <svg className={styles.svg}
           viewBox="-1 -1 34 34">
        <circle cx="16" cy="16" r="15.9155"
                className={styles.progressBarProgress}
                strokeDashoffset={100-offset}
        />
      </svg>
    </div>
  );
}

ProgressCircle.propTypes = {
  percentage: number
};

ProgressCircle.defaultProps = {
  percentage: null
};
