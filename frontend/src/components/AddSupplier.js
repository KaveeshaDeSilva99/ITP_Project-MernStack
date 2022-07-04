import React, {useState} from "react"
import axios from "axios";


function AddSupplier(){
    
    const[name,setName] = useState(" ");
    const[nic,setNic] = useState(" ");
    const[address,setAddress] = useState(" ");
    const[email_address,setEmail_address] = useState(" ");
    const[estate_name,setEstatename] = useState(" ");
    const[route,setRoute] = useState(" ");
    const[bank,setBank] = useState(" ");
    const[account_no,setAccountNum] = useState(" ");



      function sendData(e){
          e.preventDefault();



          const newSupplier ={

            name,
            nic,
            address,
            email_address,
            estate_name,
            route,
            bank, 
            account_no
          }


axios.post("http://localhost:8070/supplier/add",newSupplier).then(()=>{
alert("Supplier Added")
}).catch((err) =>{
    alert(err)
})

        
      }


     return(
        <div className="container" >
            <h2 class="text-white-50 bg-dark"><center>Black Rose Tea factory</center></h2>
            <h5 class="text-black-50 ">supplier Registration</h5>
        <form onSubmit={sendData}>
        <div className = "form-group">

            <lable for="name"> Supplier name</lable>
            <input type="text" class="form-control"  id="name" required placeholder="Enter supplier name"    onChange={(e) =>{
                setName(e.target.value);
            }}/>
        </div>



        <div className = "form-group">

            <lable for="nic"> Supplier nic</lable>
            <input type="text" class="form-control"  id="nic" required placeholder="Enter supplier nic"     onChange={(e) =>{
                setNic(e.target.value);
            }}/>
        </div>




        <div className = "form-group">

            <lable for="address"> Supplier address</lable>
            <input type="text" class="form-control"  id="address" required placeholder="Enter supplier address"      onChange={(e) =>{
                setAddress(e.target.value);
            }}/>
        </div>


        <div className = "form-group">

            <lable for="email_address"> Supplier email address</lable>
            <input type="text" class="form-control"  id="email_address" required placeholder="Enter supplie email address"      onChange={(e) =>{
                setEmail_address(e.target.value);
            }}/>
        
        </div>


        
        <div className = "form-group">

            <lable for="estate_name"> Supplier estate_name</lable>
            <input type="text" class="form-control"  id="estate_name" required placeholder="Enter estate name"      onChange={(e) =>{
                setEstatename(e.target.value);
            }}/>
        </div>



        <div className = "form-group">

<lable for="route"> Supplier route</lable>
<input type="text" class="form-control"  id="route" required placeholder="Enter route"      onChange={(e) =>{
                setRoute(e.target.value);
            }}/>
</div>




<div className = "form-group">

            <lable for="bank"> Supplier bank</lable>
            <input type="text" class="form-control"  id="bank" required placeholder="Enter bank name"       onChange={(e) =>{
                setBank(e.target.value);
            }}/>
        </div>



        <div className = "form-group">

<lable for="account_no"> Supplier account no </lable>
<input type="text" class="form-control"  id="account_no" required placeholder="Enter supplier account no"       onChange={(e) =>{
                setAccountNum(e.target.value);
            }}/>


</div>

<button type="submit" class="btn btn-primary" style={{width:"300px"}}>Submit</button> 
<div>
    <br/>
<a href="/All" class="btn btn-primary" style={{width:"300px", textAlign: 'center'}}><strong >Supplier's page</strong></a>
</div>



 </form>
      </div>
    )
}

export default AddSupplier;
