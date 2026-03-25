import { useState, useEffect } from "react";
import ExpenseList from "../../components/ExpenseList";
import Header from "../../components/Header";
import initialExpenses from "../../constants.js";
import "./styles.scss";

const HomePages = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  useEffect(() => {
    setExpenses(initialExpenses);
  }, []);

  return (
    <div className="home">
      <Header />
      <main className="main">
        <ExpenseList
          expenses={expenses}
        />
      </main>
    </div>
  );
};

export default HomePages;
