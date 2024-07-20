
function sayHello(){
    console.log("good morning"+" "+this.name);
    console.log("my last name is "+this.lastname);
}

let person={
    name:"vikas",
    lastname:"chaudhary"
}

sayHello.call(person);



//apply = []
sayHello.apply(person,[])


//bind - returns a new func

let rv=sayHello.bind(person,[])
rv();
