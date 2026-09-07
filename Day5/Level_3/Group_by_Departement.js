// **Group by Department**: Given an array of `employee` objects,
//  write a function that groups them by their `department` property 
//  into a new object.
    const employees = [
    {name:"Adam",department:"finance"},
    {name:"Ibrahim",department:"logistics"},
    {name:"Nooh",department:"finance"},
    {name:"Mohamed",department:"logistics"},
    {name:"Mosa",department:"logistics"}
];

function department_employee(array) {
    let departments = {};
    for(let i = 0; i < array.length; i++) {
        
        let dept = array[i].department;
        if (!departments[dept])
             {
            departments[dept] = []; 
        }
        departments[dept].push(array[i]);
    }

    return departments;
}
console.log( department_employee(employees) );