import React from "react";
import "./add-expense.css"
import TopFold from "../../components/topfold";
import AddForm from "../../components/addForm";
const AddExpenses=()=>{
    return (
    <div className="add-expense">
        <TopFold />
        <AddForm />
    </div>
    )
}
export default AddExpenses;