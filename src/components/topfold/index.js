import React, { useState } from "react";
import "./topfold.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actionS/expenses";
const TopFold=()=>{
    const [searchValue,setSearchValue] = useState("")
    const dispatch=useDispatch()
    const searching=(e)=>{
        setSearchValue(e.target.value);
        dispatch(searchExpense(e.target.value))
    }
    return(
        <div className="topfold">
        {window.location.pathname === "/" ?
        (<div className="main-topfold">
            <div className="searcher">
                <input placeholder="Search the expenses" value={searchValue} onChange={(e)=>searching(e)}/>
                <i class="fi fi-br-search"></i>
            </div>
            <Link style={{textDecoration:'none'}}to="/addexpense" className="link">
                <div className="add-btn">
                    <label>Add</label> 
                    <i class="fi fi-rr-add"></i>
                </div>
            </Link>
        </div>):(<div className="add-topfold">
        <Link style={{textDecoration:'none'}} to="/" className="link">
            <div className="control">
                <i class="fi fi-sr-angle-circle-left"></i>
                <label>Back</label>
            </div>
        </Link>
        <Link style={{textDecoration:'none'}} to="/" className="link">
        <div className="control">
            <label>Cancel</label>
            <i class="fi fi-br-cross-circle"></i>
        </div>
        </Link>
        </div>)}
        </div>
    )
}
export default TopFold;