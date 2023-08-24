import React, { useState } from "react";
import "./addForm.css"
import { categories } from "../../constants/add-expenses";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actionS/expenses";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from "./successmodal";
const AddForm=()=>{
    const categorieslist =categories;
    const [open,setOpen]=useState(false);
    const [expenditure,setExpenditure]=useState();
    const [amt,setAmt]=useState();
    const [hcategory,setHCategory]=useState();
    const [modalOpen,setModalOpen]=useState(false);
    const dispatch=useDispatch();
    const addTitle=(e)=>{
        setExpenditure(e.target.value);
    }
    const addAmt=(e)=>{
        const value=parseFloat(e.target.value)
        if (isNaN(value)){
            setAmt("")
            return
        }
        setAmt(value);
    }
    const actionClick=(category)=>{
        setHCategory(category)
        setOpen(false)
    }
    const handleaction=()=>{
        console.log(expenditure,amt)
        if (expenditure===undefined)||(expenditure==="")||(amt===undefined)||(amt==="")||(!hcategory)){
            const notify=()=>toast("Please re-enter details properly");
            notify();
            return;
        }
        const data = {
            expenditure,
            amt,
            hcategory,
            createdAt:new Date()
        }
        dispatch(addExpense(data))
        setModalOpen(true)
    }
    return(
        <div className="addForm">
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                theme="light"
            />
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className="form-item">
                <label>Expenditure Title</label>
                <input placeholder="Name of Expenditure" value={expenditure} onChange={(e)=>addTitle(e)} />
            </div>
            <div className="form-item">
                <label>Amount ₹</label>
                <input placeholder="Enter Amount Spent" value={amt} onChange={(e)=>addAmt(e)}/>
            </div>
            <div className="category-container">
                <div className="category">
                    <div className="categories-dropdown" onClick={()=>setOpen(!open)}>
                        <label>{hcategory?hcategory.title:"Category"}</label>
                        <i class="fi fi-rr-angle-small-down"></i>
                    </div>
                    {open && <div className="categories-container">
                        {categorieslist.map(category=>(
                            <div className="category-item" style={{borderRight:`5px solid ${category.color}`}} key={category.id} onClick={()=>actionClick(category)}>
                                <label>{category.title}</label>
                                <img src={category.icon} alt={category.title}/>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
            <div className="form-add-btn">
                <div onClick={()=>handleaction()} >
                    <label>Add</label>
                    <i class="fi fi-sr-file-upload"></i>
                </div>
            </div>
        </div>
    )
}
export default AddForm;
