import { useState, useEffect, useMemo } from "react";
import ExpenseList from "../../components/ExpenseList";
import Header from "../../components/Header";
import ExpenseTotal from "../../components/ExpenseTotal";
import AddForm from "../../components/AddForm/index.jsx";
import formatDate from "../../helpers/formatDate.js";
import initialExpenses from "../../constants.js";
import "./styles.scss";

const HomePages = () => {
  const [expense, setExpense] = useState({
    category: "",
    price: "",
  });
  
  const [errors, setErrors] = useState({
    category: "",
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
        />
      </main>
    </div>
  );
};

export default HomePages;
