import "./styles.scss";

const AddForm = ({
  expense,
  errors,
  handlChangeInput,
  submitVisibiliErrors,
  validateForm,
}) => {
  return (
    <div className="add-form">
      <div className="add-form__record">
        <div className="add-form__record-block">
          <input
            type="text"
            placeholder="Статья расходов"
            className="add-form__record-text"
            value={expense.category}
            onChange={(e) => handlChangeInput("category", e.target.value)}
          />
          <hr className="add-form__record-line" />
          <span
            className={`add-form__error-message ${
              submitVisibiliErrors && errors.category
                ? "add-form__error-message__visible"
                : ""
            }`}
          >
            {errors.category}
          </span>
        </div>
        <div className="add-form__record-block">
          <input
            type="number"
            placeholder="Сумма"
            className="add-form__record-text"
            value={expense.price}
            onChange={(e) => handlChangeInput("price", e.target.value)}
            min={0}
          />
          <hr className="add-form__record-line" />
          <span
            className={`add-form__error-message ${
              submitVisibiliErrors && errors.price
                ? "add-form__error-message__visible"
                : ""
            }`}
          >
            {errors.price}
          </span>
        </div>
        <button
          type="button"
          className="add-form__record-button"
          onClick={validateForm}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddForm;