import React, { Component } from "react";
import axios from "axios";

export default class AllSupplier2 extends Component {


    constructor(props) {

        super(props);

        this.state = {

            suppliers: []
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
   
 
    repotGen=()=>{

         window.print();

    }




    render() {

        return (

            <div className="container" class="p-3 mb-2 bg-secondary text-white">

                <h1><center><strong>All Supplier Details</strong></center></h1>
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
                           
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.suppliers.map((suppliers, index) => (

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

                            </tr>

                        ))}

                    </tbody>

                </table>

            <button class="btn btn-danger" style={{textalign :'center'}} onClick={this.repotGen}>Generate Report</button>

            

            </div>



        )
    }

}



 