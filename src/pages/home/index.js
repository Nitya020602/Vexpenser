import React from "react";
import TopFold from "../../components/topfold";
import "./home.css"
import ExpenseList from "../../components/expenseList";
const Home=()=>{
    return (<div className="home">
    <TopFold/>
    <ExpenseList/>
    </div>);
}
export default Home;