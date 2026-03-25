import cross from "../../images/cross.png";
import checkMark from "../../images/checkMark.png";
import "./styles.scss";

const EditingForm = ({
  editedExpense,
  editingErrors,
  handleChangeEditingForm,
  validateEditingForm,
  cancelEditingExpense,
}) => {
  return (
    <div className="editing-form">
      <hr className="editing-form__line-top" />
      <div className="editing-form__general">
        <div className="editing-form__block-category">
          <input
            type="text"
            className="editing-form__category"
            name="category"
            value={editedExpense.category}
            onChange={handleChangeEditingForm}
            placeholder="Категория"
          />
          <hr className="editing-form__line" />
          {editingErrors.category && (
            <span className="editing-form__error">{editingErrors.category}</span>
          )}
        </div>
        <div className="editing-form__block">
          <input
            type="text"
            className="editing-form__date"
            name="date"
            value={editedExpense.date}
            onChange={handleChangeEditingForm}
            placeholder="ДД.ММ.ГГГГ"
          />
          <hr className="editing-form__line" />
          {editingErrors.date && (
            <span className="editing-form__error">{editingErrors.date}</span>
          )}
        </div>
        <div className="editing-form__block">
          <input
            type="number"
            className="editing-form__price"
            name="price"
            value={editedExpense.price}
            onChange={handleChangeEditingForm}
            placeholder="Сумма"
          />
          <hr className="editing-form__line" />
          {editingErrors.price && (
            <span className="editing-form__error">{editingErrors.price}</span>
          )}
        </div>
        <div className="editing-form__edit">
          <button
            className="editing-form__button"
            type="button"
            onClick={validateEditingForm}
          >
            <img
              src={checkMark}
              alt="Сохранить"
              className="editing-form__images-check"
            />
          </button>
          <button
            className="editing-form__button"
            type="button"
            onClick={cancelEditingExpense}
          >
            <img src={cross} alt="Отмена" className="editing-form__images" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditingForm;
