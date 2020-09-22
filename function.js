function func1(event){

console.log(event)
let clickedButton = event.target.innerText;
var flag;

document.getElementById("ans").value += clickedButton;
let x =document.getElementById("ans").value;

if (clickedButton!="="||clickedButton!="C"){
    if(flag==1){
    document.getElementById("ans").value="";
    document.getElementById("ans").value += clickedButton;
    flag=0;
    console.log(flag)
}

}
//calculation
if (clickedButton=="="){

    flag=1;
    
    let  len= x.length;
    let y = x.slice(0,len-1);
    console.log(y)
    let z =eval(y);
    // alert(z);
    document.getElementById("ans").value=z;
    console.log(flag)

}
//reset textbox
else if (clickedButton=="C"){
     flag=0;
     document.getElementById("ans").value="";
     console.log(flag)

}

}

