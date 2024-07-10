console.log(this);


let obj={
    name:"vikas",
    age:27,
    task: ()=>{
        console.log(this);
    }
}

obj.task();


let obj2={
    name:"vikaS",
    surname:"chaudhary",
    marks:{
        task:function(){
            console.log(this);
            // let fun2=()=>{
            //     // console.log(this);
            // }
            // fun2();
        }
    }
}

obj2.marks.task();


// async js and sync js 
//callbacks
//priomises
//asycn await 
//fetch and axios
//api 





