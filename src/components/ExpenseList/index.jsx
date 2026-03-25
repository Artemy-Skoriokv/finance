import Expense from "../Expense";
import "./styles.scss";

const ExpenseList = ({
  expenses,
}) => {
  return (
    <div className="expense-list">
      <div className="expense-list__block">
        <div className="expense-list__category">
          <hr className="expense-list__category-line" />
          <p className="expense-list__category-text">Статья расходов</p>
          <p className="expense-list__category-text">Дата</p>
          <p className="expense-list__category-text">Сумма расхода</p>
        </div>
        {expenses.map((expense) => (
          <div key={expense.id}>
              <Expense expense={expense} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
