
//es5 

function sayHello(){
    for(let i=1;i<=5;i++){
        console.log("hello sir ");
    }

}

sayHello();
sayHello();

//function expression - first vclass memeber 

// let age=27;
// let x=function fun(){

// }

let fun=function sayHello(){
    for(let i=1;i<=5;i++){
        console.log("hello sir ");
    }

}
console.log("0000000000000000000000000000000");

fun();
fun();


//anonymous 

let fun2=function (){
    for(let i=0;i<=21;i++){
        console.log(i);
    }
}


fun2();


//return 


let fun3=function sayMyAge(){

    return function gun(){
        console.log("i am gun");
    }
    console.log("hello dice ");
}

let rv=fun3();
console.log(rv());


//params args 


function printmydetails(name,surname,age,salary,address,marks,otherdetailks){
    return [name,surname,age,salary,address,marks,otherdetailks]

}

let rv2=printmydetails("vikas","chaudhary",27,10000,"delhi",[100,200,300],{ismarried:false,bg:"a+"})
console.log(rv2);


//es6-fat arrow 
let fatarrow=()=>{
    console.log("i am a fat arrow function ");
}

fatarrow();



let sayMyAGE2=age=> console.log("i am ",age+"years old");



sayMyAGE2(27)


let fat3=(name,surname,age,salary,address)=>{
    return [name,surname,age,salary,address]
}


let rv4=fat3("vikas","chaiudhary",27,1000000,"delhi")
console.log(rv4);

//fat arrow with implicit return

let salary=(salary)=>({name:"vikas"})
let rv5=salary(10000)
console.log(rv5);








