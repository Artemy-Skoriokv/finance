import "./styles.scss";

const ExpenseTotal = ({ totalExpense }) => {
  return (
    <div className="expense-total">
      <div className="expense-total__box">
        <p className="expense-total__text">Всего:</p>
        <p className="expense-total__sum">{totalExpense} ₽</p>
      </div>
    </div>
  );
};

export default ExpenseTotal;