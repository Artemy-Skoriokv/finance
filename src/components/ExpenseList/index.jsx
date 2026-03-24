import Expense from "../Expense";
import EditingForm from "../EditingForm";
import "./styles.scss";

const ExpenseList = ({
  expenses,
  editedExpense,
  editingErrors,
  cancelEditingExpense,
  validateEditingForm,
  handleChangeEditingForm,
  openEditingForm,
  idEditedExpense,
  removeExpense,
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
            {expense.id === idEditedExpense ? (
              <EditingForm
                editedExpense={editedExpense}
                editingErrors={editingErrors}
                handleChangeEditingForm={handleChangeEditingForm}
                validateEditingForm={validateEditingForm}
                cancelEditingExpense={cancelEditingExpense}
              />
            ) : (
              <Expense
                expense={expense}
                openEditingForm={openEditingForm}
                removeExpense={removeExpense}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
