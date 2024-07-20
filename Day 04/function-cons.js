

/*
cons - new thing - object




*/

// let obj1={
//     name:"vikas",
//     age:27,
//     marjs:[100,200,300],
//     otherdetails:{
//         salary:10000,
//         gender:"male",
//         ismarried:false
//     }
// }



// let obj2={
//     name:"vikas",
//     age:27,
//     marjs:[100,200,300],
//     otherdetails:{
//         salary:10000,
//         gender:"male",
//         ismarried:false
//     }
// }

// function cons and class cons

function Employee(fname,lname,umar,sal,otherdetails){
    this.firstname=fname;
    this.lastname=lname;
    this.age=umar;
    this.salary=sal;
    this.otherdetails=otherdetails;
 


}

let obj1=new Employee("vikas","chaudhary",27,10000);
let obj2= new Employee("puneet","malik",20,100000,{gender:"male",ismarried:false});
console.log(obj2);


console.log(obj1);

console.log(obj1===obj2);

console.log("------------------------------");
let obj3=new Employee("ajay","tiwari","21",50000,{gender:"males",ismarried:false})
let obj4= new Employee("ajay","tiwari","21",50000,{gender:"males",ismarried:false})
console.log(obj3===obj4);


//instance of - true false

console.log(obj3 instanceof Employee);
console.log(obj4 instanceof Employee);








