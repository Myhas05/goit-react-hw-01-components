import React from 'react';
import T from 'prop-types';
import style from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.headTh}>Type</th>
            <th className={style.headTh}>Amount</th>
            <th className={style.headTh}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className={style.tableTd}>{item.type}</td>
              <td className={style.tableTd}>{item.amount}</td>
              <td className={style.tableTd}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.number.isRequired,
      currency: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default TransactionHistory;
