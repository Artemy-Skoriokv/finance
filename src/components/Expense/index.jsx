import pencil from "../../images/pencil.png";
import basket from "../../images/basket.png";
import "./styles.scss";

const Expense = ({ expense, openEditingForm, removeExpense }) => {
  return (
    <div className="expense">
      <ul className="expense__list">
        <hr className="expense__line" />
        <li className="expense__item">
          <span className="expense__category">{expense.category}</span>
          <div className="expense__adaptiv">
            <span className="expense__date"> {expense.date} </span>
            <span className="expense__sum">{expense.price} ₽</span>
          </div>
          <div className="expense__buttons">
            <button
              type="button"
              className="expense-edit"
              onClick={() => openEditingForm(expense)}
            >
              <img className="expense-edit__image" src={pencil} alt="pencil" />
            </button>
            <button
              type="button"
              className="expense-delete"
              onClick={() => removeExpense(expense.id)}
            >
              <img
                className="expense-delete__images"
                src={basket}
                alt="basket"
              />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Expense;
