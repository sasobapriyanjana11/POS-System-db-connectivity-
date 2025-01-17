import express from "express";
import {addCustomer, deleteCustomer, getAllCustomers, updateCustomer} from "../database/local-data-store";
import {Customer} from "../model/Customer";
import { customerAdd} from "../database/prisma-data-store";

const router=express.Router();

router.post("/add",async (req,res)=>{
    // console.log((req.body.name));
    const newCustomer = req.body;
    try{
        await customerAdd(newCustomer);
        res.send('add customer');
    }catch(err){
        console.log(err)
    }


});
router.put("/update/:id",(req,res)=>{
    const id=+req.params.id;
    const customer=req.body;
    updateCustomer(id,customer);

    res.send("update customer")
});
router.delete("/delete/:id",(req,res)=>{
    const id=+req.params.id;
    deleteCustomer(id);
    res.send("delete customer")
});
router.get("/get",(req,res)=>{
   const customers= getAllCustomers();
   res.json(customers);
    res.send("get customer")
});
export default router;