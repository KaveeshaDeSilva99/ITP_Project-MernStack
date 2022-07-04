import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';




export default class AllSupplier extends Component{


   constructor(props){

       super(props);

       this.state={

        suppliers:[]
       };

   }
  componentDidMount(){

   this.retriveSuppliers();
  }
  retriveSuppliers(){

   axios.get("http://localhost:8070/supplier/all").then(res=>{

      if(res.data.success){
          this.setState({

            suppliers:res.data.existingSuppliers

          });

          console.log(this.state.suppliers)

      }


   })


  }

  onDelete(id){

     fetch(`http://localhost:8070/supplier/delete/${id}`,{

           method:`DELETE`

     }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Deleted Succsessfull")
           this.retriveSuppliers()

         })


     })
    


  }

//Filter /Search Mechod
filterContent(suppliers,searchTerm){

    const results=suppliers.filter((supplier)=>supplier.name.toLowerCase().includes(searchTerm));
    this.setState({suppliers:results});
  
  }
  
  handleTextSearch=(e)=>{
  
     const searchTerm=e.currentTarget.value;
     axios.get("http://localhost:8070/supplier/all").then(res=>{
  
      if(res.data.success){
         this.filterContent(res.data.existingSuppliers,searchTerm)
      }
  });
  
  };


 render(){ 

    return(

      <div className="container" class="p-3 mb-2 bg-secondary text-white">

      <h1><center><strong>All suppliers</strong></center></h1>


      <div className="col-lg-3 mt-2 mb-2" class="text-center">
            
            <input
             className="form-control"
             type="search"
             placeholder="Search"
             name="searchTerm"
             onChange={this.handleTextSearch}
            
            ></input></div>




      <table class="table table-dark table-hover">
      <thead>
      <tr class="text-danger">
           <th scope="col">Index</th>
           <th scope="col">name</th>
           <th scope="col">nic</th>
           <th scope="col">address</th>
           <th scope="col">email_address</th>
           <th scope="col">estate_name</th>
           <th scope="col">route</th>
           <th scope="col">bank</th>
           <th scope="col">account_no</th>
           <th scope="col">Action</th>
           
      
  
  
      </tr>
     </thead>
     <tbody>

       {this.state.suppliers.map((suppliers,index)=>(

        <tr>
          <th scope="row">{index+1}</th>
          <td>{suppliers.name}</td>
          <td>{suppliers.nic}</td>
          <td>{suppliers.address}</td>
          <td>{suppliers.email_address}</td>
          <td>{suppliers.estate_name}</td>
          <td>{suppliers.route}</td>
          <td>{suppliers.bank}</td>
          <td>{suppliers.account_no}</td>
          

          <td>
         
                               
          <a className="btn btn-success"  href={`/update/${suppliers._id}`} >Update</a>&nbsp;&nbsp;
               <button  type="button" class="btn btn-success"  onClick={()=>this.onDelete(suppliers._id)}> 
               <i className="fa-solid fa-trash-can "></i>&nbsp;&nbsp; Delete&nbsp;&nbsp;&nbsp;</button>
        </td>
        </tr>

       ))}



     </tbody>



     </table>

     <div>
    <br/>
    <a href="/print" class="btn btn-primary" style={{width:"300px", textAlign: 'center'}}><strong >Generate Report</strong></a>
    </div>
            
 
    

  
      </div>

    

    ) 
 }

 }