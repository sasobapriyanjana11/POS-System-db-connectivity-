import {Customer} from "../model/Customer";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function customerAdd(customer : Customer) {
    try{
        await prisma.customer.create({
            data:{
                name:customer.name,
                address :customer.address,
            }
        })
        console.log('customer added successfully');
    }catch(err){
        console.log(err)
    }

}
export async function deleteCustomers(id:number){
    try{
        await prisma.customer.delete({
            where:{
                id:id,
            }
        })
        console.log('customer delete successfully');
    }catch(err){
        console.log(err)
    }

}
export async function updateCustomer(id:number,customer:Customer){
    try{
        await prisma.customer.update({
            where:{
                id:id,
            },
            data:{
                name:customer.name,
                address :customer.address,
            }

        })
        console.log('customer update successfully');
    }catch(err){
        console.log(err)
    }
}
export async function getCustomers(customer:Customer){
    try{

    }catch(err){
        console.log(err)
    }
}