

let arr=[12,34,34.56,"vikas","x",{a:10,b:20},["a","b","c"],function fun(){return "hello world!"},null,undefined]

console.log(arr.__proto__);

console.log(arr.length);

//access

console.log(arr[0]);
// console.log(arr[arr.length-1]());
console.log(arr[arr.length]);

arr[15]="dice";
console.log(arr);

console.log(arr[12]);

//string 
let str="vikas";
console.log("--------------------------------------");
console.log(typeof str);

console.log(str.__proto__);

console.log(str[0]);
console.log(str[str.length]);
// str[3]="z";
// console.log(str);

console.log(str[10]);

str[10]="A";
console.log(str);

//object


let object1={
    name:"vikas",
    surname:"chaudhary",
    age:27,
    salary:10000,
    education:"btech",
    profession:"sde",
    marks:[44,55,66],
    task:function(){
        
        console.log("teaching");
         return "teaching";
    },
    details:{
        gender:"male",
        address:"delhi",

    }

}
console.log(object1.salary);
console.log(object1["marks"][2]);
console.log(object1["task"]());

object1.studentcount=100;
console.log(object1);
object1.marks=[100,200,300];
console.log(object1);


//
for(const key in object1){
    console.log(key,object1[key]);
}


//funcs cons and clas cons 


//func cons


function Details(name,surname,age,salary,task,marks){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.salary=salary;
    this.task=task;
    this.marks=marks;



}

let obj1= new Details("vikas","chaUDHARY",27,10000,function(){
    console.log("teaching")
    return "teacher";
},[100,200,300])
console.log(obj1);
let obj2= new Details("puneet","kumar",28,100000,()=>{
    console.log("it guy")
    return "tech ";
},[200,300])
console.log(obj2);




class Human{
    name;
    surname;
    salary;
    ismarried;
    task;
    constructor(name,surname,salary,ismarried,task){
        this.name=name;
        this.surname=surname;
        this.salary=salary;
        this.ismarried=ismarried;
        this.task=task;

    }
}

let object11=new Human("vikas","chaudhary",100000,false,function(){
    console.log("teaching");
})


let object12= new Human("puneet","kumar",10000,true,function(){
    return "hello"
})
console.log(object11);
console.log(object12);

//object cloning and merging










































