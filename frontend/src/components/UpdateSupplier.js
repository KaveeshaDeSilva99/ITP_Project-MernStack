import React,{useEffect, useState} from "react"
import axios from "axios";
import {useParams } from "react-router-dom";



export default function UpdateSuppliers(){

  const[name,setName] = useState(" ");
  const[nic,setNic] = useState(" ");
  const[address,setAddress] = useState(" ");
  const[email_address,setEmail_address] = useState(" ");
  const[estate_name,setEstatename] = useState(" ");
  const[route,setRoute] = useState(" ");
  const[bank,setBank] = useState(" ");
  const[account_no,setAccountNum] = useState(" ");


  const { id } = useParams();

  useEffect(() => {
      getSupplier();
    }, []);
  
  
    function getSupplier() {
      let supplier = true;
  
// retriew data for id

      fetch(`http://localhost:8070/supplier/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (supplier) {
            setName(result.Name);
            setNic(result.Nic);
            setAddress(result.Address);
            setEmail_address(result.Email_address);
            setEstatename(result.Estatename);
            setRoute(result.Route);
            setBank(result.Bank);
            setAccountNum(result.AccountNum);
           
          }
          console.log(result);
        });
  
      return () => (supplier = false);
    }

  // update data 
  
  function updateData(e){

      e.preventDefault();

      const updateSupplier ={
            name,
            nic,
            address,
            email_address,
            estate_name,
            route,
            bank,
            account_no
      }

      axios
    .patch(`http://localhost:8070/supplier/update/${id}`, updateSupplier)
    .then((_res) => {
      alert("Supplier details Updated Successfully!");
   
      console.log(updateSupplier);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }



return(
    <div className="container" class="p-3 mb-2 bg-secondary text-white">
        <h1 class="text-white-50 bg-dark"><center>Update Supplier Details</center></h1>
        <form className = "supplier" >


                <div className="form-group">
                    <label htmlFor="inputEmail4">Supplier Name</label>
                    <input type="text" className="form-control" id="Name" placeholder="Supplier Name" value={name}
                     onChange={(e)=>{setName(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="iinputPid">Supplier NIC</label>
                    <input type="text" class="form-control" id="NIC" placeholder="Enter Your NIC Here" value={nic}
                     onChange={(e)=> {setNic(e.target.value);} }/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputFande"> Supplier Address</label>
                    <input type="text" class="form-control" id="Address" placeholder="Enter Your Address" value={address} 
                    onChange={(e)=>{setAddress(e.target.value);} }/>
                </div>

      
                <div className="form-group">
                    <label htmlFor="inputRate"> Supplier Email</label>
                    <input type="email" class="form-control" id="Email" placeholder="Enter Your Email" value={email_address} 
                    onChange={(e)=>{setEmail_address(e.target.value);} }/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDate">Estate Name</label>
                    <input type="text" class="form-control" id="Estatename" placeholder="Enter Your Estate Name" value={estate_name}  
                    onChange={(e)=>{setEstatename(e.target.value);} }/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDate">Route</label>
                    <input type="text" class="form-control" id="Route" placeholder="Enter Your Route" value={route}  
                    onChange={(e)=>{setRoute(e.target.value);} }/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDate">Bank Name</label>
                    <input type="text" class="form-control" id="Bank" placeholder="Enter Your Bank Name" value={bank}  
                    onChange={(e)=>{setBank(e.target.value);} }/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputDate">Account Number</label>
                    <input type="number" class="form-control" id="AccountNum" placeholder="Enter Your account no" value={account_no}  
                    onChange={(e)=>{setAccountNum(e.target.value);} }/>
                </div>
            

            
        </form><br></br>
        
        <div>
            
        <button  type="button" class="btn btn-info"  onClick={updateData}><strong> Update Supplier Details</strong></button>

        </div>
        <div>
    <br/>
    <a href="/All" class="btn btn-primary" style={{width:"300px", textAlign: 'center'}}><strong >Supplier's page</strong></a>
    </div>
            
 </div> 
 )

}


















