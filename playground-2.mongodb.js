// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('employeePaymentsPortal');

// Create a new document in the collection.
db.getCollection('employees').insertOne({
    employeeId: "E001",
    name: "John Doe",
    email: "johndoe@email.com",
    department: "Finance",
    position: "Manager",
    salary: 100000
});

