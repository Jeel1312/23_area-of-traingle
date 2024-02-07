function calculate(){
    let a=document.getElementById("base").value;
    let b=document.getElementById("height").value;
    
    let c= 0.5*a*b;
    
    document.getElementById("area").innerHTML="The area of the triangle is :"+ c;
}