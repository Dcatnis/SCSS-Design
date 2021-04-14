var button=document.getElementById("button")
button.onclick=Myclick;
var email=document.getElementById("email")
var EmptyError=document.getElementById("empty_error")
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var structure=document.getElementById("structure")


function Myclick(){
 if(email.value==""){
     email.classList.add("EmptyEmail")
     EmptyError.style.display="block"
     structure.style.display="none"
 }else if(email.value.match(mailformat)){
    structure.style.display="none"
    EmptyError.style.display="none"
    email.classList.add("EmailFiled")
    return true
    
   
     
 

}else{
     
     EmptyError.style.display="none"
     email.classList.add("EmptyEmail")
     structure.style.display="block"
     email.value="example@email.com"
     
 }
}