debugger


let name="vikas";
let surname="chaudhary";
const age=27;
function saymyname(){
    console.log("i am vikas");
    saymyage();
    return "vikas";
}

function saymyage(){
    console.log("i am  27");
    fun();

    return 27;
}

const fun=()=>{
    console.log(" i am  a fat arrow fun");
    return "fat arrow";
}

saymyname();
