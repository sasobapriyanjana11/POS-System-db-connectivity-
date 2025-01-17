import { Customer } from "../model/Customer";

let customers: Customer[] = [];

// Add a customer
export function addCustomer(customer: Customer) {
    customers.push(customer);
}

// Get all customers
export function getAllCustomers(): Customer[] {
    return customers;
}

export function updateCustomer(customerId: number, updatedData: Partial<Customer>): boolean {
    const customerIndex = customers.findIndex((customer) => customer.id === customerId);
    if (customerIndex !== -1) {
        customers[customerIndex] = { ...customers[customerIndex], ...updatedData };
        return true;
    }
    return false;
}

export function deleteCustomer(customerId: number): boolean {
    const initialLength = customers.length;
    customers = customers.filter((customer) => customer.id !== customerId);
    return customers.length < initialLength;
}


