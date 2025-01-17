import express from 'express'
import customerRouter from './routes/customer-routes';
import {addCustomer,getAllCustomers,updateCustomer,deleteCustomer} from "./database/local-data-store";

const app=express();

app.use(express.json());

app.use('/customers', customerRouter);

app.listen(3000,()=>{
    console.log("server running on server port 3000")
});