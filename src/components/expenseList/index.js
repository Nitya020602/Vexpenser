import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./expenseList.css"
import { ToastContainer, toast } from "react-toastify";

const ExpenseList = () =>{
    const {ListExpenses: list,query} = useSelector((state)=>state.expenses)
    const fliteredList=list.filter(item=>item.expenditure.includes(query))
    console.log(fliteredList)
    const notify=()=>toast.success("Expense Deleted Successfully")
    return(
    <div className="expensesList">
        <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                theme="light"
            />
        {fliteredList.length? (
            fliteredList.map((item)=>
            <Card item={item} notify={notify}/>)
        ):(
            <div className="empty-cls">
                <img src={require("../../logos/images/cart.png")} alt="empty list" className="emptyList"/>
                <label>Uh Oh! Can't find any, list is empty</label>
            </div>
        )}
        </div>
    )
}
export default ExpenseList;