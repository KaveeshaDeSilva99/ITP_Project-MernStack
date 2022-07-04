const router = require("express").Router();
const Supplier = require("../models/supplier");
//const { default: updateSupplier } = require("../../frontend/src/components/UpdateSupplier");
let supplier = require("../models/supplier");



router.route("/add").post((req,res) =>{
     
       const name = req.body.name;
       const nic = req.body.nic;
       const address = req.body.address;
       const email_address  = req.body.email_address;
       const estate_name = req.body.estate_name;
       const route = req.body.route;
       const bank = req.body.bank;
       const account_no = req.body.account_no;

       const newSupplier = new supplier({

        name,
        nic,
        address,
        email_address,
        estate_name,
        route,
        bank,
        account_no
    
    })


    newSupplier.save().then(() =>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//Retrive all data

router.get("/all",(req,res)=>{
    Supplier.find().exec((err,supplier)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingSuppliers:supplier
        });
    });
}); 
/*
//All
router.route("/all").get((req,res) =>{
    supplier.find().then((suppliers) =>{
        res.json({suppliers})
    }).catch((err) =>{
        console.log(err)
    })
})
*/

/*router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{name,nic,address,email_address,estate_name,bank,account_no} = req.body;

    
    const updateSupplier = {
        name,
        nic,
        address,
        email_address,
        estate_name,
        route,
        bank,
        account_no
    }

    const update = await supplier.findByIdAndUpdate(userId, updateSupplier).then(()=>{
        res.status(200).send({status: "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

*/
//Retrive by ID
router.route("/get/:id").get(async(req,res)=>{
    const sp = await supplier.findById(req.params.id);

  if (sp) {
    res.json(sp);
  } else {
    res.status(404).json({ message: "Supplier not found" });
  }
})

module.exports = router;

  





router.route("/update/:id").patch(async(req,res)=>{

    const sp = await supplier.findById(req.params.id);

      if (sp) {
    sp.name = req.body.name || sp.name;
    sp.nic = req.body.nic || sp.nic;
    sp.address = req.body.address || sp.address;
    sp.email_address = req.body.email_address || sp.email_address;
    sp.estate_name = req.body.estate_name || sp.estate_name;
    sp.route = req.body.route || sp.route;
    sp.bank = req.body.bank || sp.bank;
    sp.account_no = req.body.account_no || sp.account_no;

   
    const updateSuppliers = await sp.save();

    res.json({
        name:updateSuppliers.name,
        nic:updateSuppliers.nic,
        address:updateSuppliers.address,
        email_address:updateSuppliers.email_address,
        estate_name:updateSuppliers.estate_names,
        route:updateSuppliers.route,
        bank:updateSuppliers.bank,
        account_no:updateSuppliers.account_no

        
    });
  } else {
    res.status(404);
    
    throw new Error("Can't Update Supplier Details");
  }


})



   

router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;
    
    await supplier.findByIdAndDelete(userId).then(()=>{
    res.status(200).send({status: "User deleted"})
}).catch((errr) =>{
    console.log(errr.message);
    res.status(500).send({status: "Error with delete uder", error: errr.message});
})
})


/*
router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
    
   const user= await supplier.findById(userId).then(()=>{
    res.status(200).send({status: "User fetched", user:user})
}).catch(( ) =>{
    console.log(err.message);
    res.status(500).send({status: "Error with get user", error: err.message});
})
})

*/

module.exports = router;


