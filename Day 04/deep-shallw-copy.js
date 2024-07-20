

// var num1=100;
// var num2=num1;

// console.log("before -- num1 ",num1);
// console.log("before ---num2",num2);

// num1=num1*5;

// console.log("after --num1",num1);
// console.log("after --num2",num2);



let arr1=[10,20,30,40,50];
let arr2=arr1;

console.log("before --array 1",arr1);
console.log("before --arayy 2 ",arr2);

arr1.pop();
console.log("after --array 1",arr1);
console.log("after --arayy 2 ",arr2);



//object
let object1={
    name:"vikas",
    age:27,
    salary:100000
}
let object2=object1;
console.log("before --object 1",object1);
console.log("before --object 2 ",object2);

object1.gender="male";

console.log("after --object 1",object1);
console.log("after --object 2 ",object2);

//deep array - ... spread operator

let arr3=[100,200,300,400];
let arr4=[...arr3];
console.log("before --array 3",arr3);
console.log("before --array  4 ",arr4);
arr3.pop();
console.log("after --array 3",arr3);
console.log("after --array 4 ",arr4);

let object3={
    a:100,
    b:200
}

let object4={...object3}
console.log("before --object 3",object3);
console.log("before --object 4 ",object4);
object3.salary=100000;
console.log("after --object 3",object3);
console.log("after --object 4 ",object4);

