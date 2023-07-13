import React from "react";
import Modal from 'react-modal';
import "./successmodal.css"
import { Link } from "react-router-dom";
const SuccessModal=({modalOpen,setModalOpen})=>{
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:"#CF9FFF",
          borderRadius:"10px"
        },
      };
    return(
      <Modal isOpen={modalOpen} style={customStyles}>
        <div className="inner">
          <label>Added Expenditure Successfully!!</label>
          <img src={require("../../logos/images/reward.png")} alt="Expense Added" className="imgsuccess"/>
          <Link to="/" className="linker" >
            <div className="home-directer">
              <i class="fi fi-rr-home"></i>
              <label>Home</label>
            </div>
          </Link>
        </div>
      </Modal>
    )
};
export default SuccessModal;