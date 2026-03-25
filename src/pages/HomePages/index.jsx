import { useState, useEffect, useMemo } from "react";
import ExpenseList from "../../components/ExpenseList";
import Header from "../../components/Header";
import ExpenseTotal from "../../components/ExpenseTotal";
import AddForm from "../../components/ExpenseForm";
import formatDate from "../../helpers/formatDate.js";
import initialExpenses from "../../constants.js";
import "./styles.scss";

const HomePages = () => {
  const [expense, setExpense] = useState({
    category: "",
    price: "",
  });

  const [idEditedExpense, setIdEditedExpense] = useState(null);
  const [editedExpense, setEditedExpense] = useState({
    category: "",
    date: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    category: "",
    price: "",
  });

  const [editingErrors, setEditingErrors] = useState({
    category: "",
    date: "",
    price: "",
  });

  const [expenses, setExpenses] = useState(initialExpenses);

  useEffect(() => {
    setExpenses(initialExpenses);
  }, []);

  const totalExpense = useMemo(() => {
    return expenses.reduce((sum, expense) => {
      return sum + (Number(expense.price) || 0);
    }, 0);
  }, [expenses]);

  const addExpense = () => {
    const newExpense = {
      id: Date.now(),
      category: expense.category.trim(),
      date: formatDate(),
      price: expense.price.trim(),
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setExpense({
      category: "",
      price: "",
    });
    setErrors({ category: "", price: "" });
  };

  const validateForm = () => {
    setErrors({ category: "", price: "" });

    if (!expense.category.trim()) {
      setErrors({
        ...errors,
        category: "Поле не должно быть пустым и меньше или равно 0",
      });
      return;
    }

    if (!expense.price.trim() || Number(expense.price) <= 0) {
      setErrors({
        ...errors,
        price: "Поле не должно быть пустым и меньше или равно 0",
      });
      return;
    }

    addExpense();
  };

  const handlChangeInput = (key, value) => {
    setExpense((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === "category" && errors.category) {
      setErrors((prev) => ({ ...prev, category: "" }));
    }

    if (key === "price" && errors.price) {
      setErrors((prev) => ({ ...prev, price: "" }));
    }
  };

  const openEditingForm = (expense) => {
    setIdEditedExpense(expense.id);
    setEditedExpense({
      category: expense.category,
      date: expense.date,
      price: expense.price,
    });
    setEditingErrors({
      category: "",
      date: "",
      price: "",
    });
  };

  const cancelEditingExpense = () => {
    setIdEditedExpense(null);
    setEditingErrors({
      category: "",
      date: "",
      price: "",
    });
  };

  const handleChangeEditingForm = (e) => {
    const { name, value } = e.target;
    setEditedExpense((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (editingErrors[name]) {
      setEditingErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateEditingForm = () => {
    setEditingErrors({
      category: "",
      date: "",
      price: "",
    });

    if (!editedExpense.category.trim()) {
      setEditingErrors({
        ...errors,
        category: "Поле не должно быть пустым",
      });
      return;
    }

    if (!editedExpense.date.trim()) {
      setEditingErrors({
        ...errors,
        date: "Поле не должно быть пустым",
      });
      return;
    }

    if (
      !editedExpense.price.trim() ||
      Number(editedExpense.price.trim()) <= 0
    ) {
      setEditingErrors({
        ...errors,
        price: "Поле не должно быть пустым",
      });
      return;
    }

    updateExpense();
  };

  const updateExpenseInList = (expensesList, editedId, updatedExpenseData) => {
    const index = expensesList.findIndex(
      (expenseItem) => expenseItem.id === editedId,
    );

    if (index === -1) return expensesList;

    const newExpenses = [...expensesList];
    newExpenses[index] = {
      ...newExpenses[index],
      category: updatedExpenseData.category.trim(),
      date: updatedExpenseData.date.trim(),
      price: updatedExpenseData.price.trim(),
    };

    return newExpenses;
  };

  const updateExpense = () => {
    setExpenses((prev) =>
      updateExpenseInList(prev, idEditedExpense, editedExpense),
    );
    cancelEditingExpense();
  };

  return (
    <div className="home">
      <Header />
      <main className="main">
        <AddForm
          expense={expense}
          errors={errors}
          handlChangeInput={handlChangeInput}
          validateForm={validateForm}
        />
        <ExpenseTotal totalExpense={totalExpense} />
        <ExpenseList
          expenses={expenses}
          idEditedExpense={idEditedExpense}
          editedExpense={editedExpense}
          editingErrors={editingErrors}
          openEditingForm={openEditingForm}
          cancelEditingExpense={cancelEditingExpense}
          handleChangeEditingForm={handleChangeEditingForm}
          validateEditingForm={validateEditingForm}
        />
      </main>
    </div>
  );
};

export default HomePages;
