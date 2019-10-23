import React from 'react';
import T from 'prop-types';
import style from './Statistics.module.css';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <div className={style.box}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.list}>
        {stats.map(stat => (
          <li
            className={style.listItem}
            key={stat.id}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <span className={style.span}>{stat.label}</span>
            <span className={style.span}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
