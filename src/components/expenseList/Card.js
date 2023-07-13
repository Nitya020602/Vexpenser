import React from "react"; 
import moment from "moment/moment";
import "./Card.css"
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actionS/expenses";

const Card=({item,notify})=>{
    const time=moment(item.createdAt).fromNow()
    const dispatch=useDispatch();
    const deleteAction=()=>{
        dispatch(deleteExpense(item));
        notify();
    }
    console.log(item)
    return(
    <div className="display-card" style={{borderRight: `6px solid ${item.hcategory.color}` }}>
        <div className="category-img">
            <img src={item.hcategory.icon} alt={item.hcategory.title} className="cardImg"/>
        </div>
        <div className="card-details">
            <label className="card-title">{item.expenditure}</label>
            <label className="card-time">{time}</label>
        </div>
        <div className="card-right">
            <div>
                <label className="card-amt">₹ {item.amt}</label>
            </div>
            <div className="delete-icon" onClick={deleteAction}>
                <i class="fi fi-br-trash"></i>
            </div>
        </div>
    </div>
    );
}
export default Card;