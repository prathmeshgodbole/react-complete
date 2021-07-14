import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


  const App=()=>{
    const[expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
      return[expense,...prevExpenses]
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started.!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

return (
    <div>
      <h2> Let 's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses}/>
    </div>
  );
}


export default App;
