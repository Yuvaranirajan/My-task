// const person={
//     name:'yuva',
//     age:0,
//     place:'chennai',
// };
// // console.dir(document.body.children[0].innerHTML="hello");
// // console.dir(document.body.children[1].innerHTML="hello world");
// // console.dir(document.head.children[3].innerHTML="my document");
// console.log(window.document);

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
  password = id("password"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failur-icon");

  var crossmenu=document.getElementById("cross");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  engine(username, 0, "Username cannot be blank");
  engine(password, 1, "Password cannot be blank");
  });
  
  let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
      console.log(id);
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    
      
    } 
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
      var popup=document.getElementById("submit");
     popup.innerHTML="Submit";
     var modal=document.getElementById("modalpopup");
     
      // popup.onclick=function(){
        modal.style.display="flex";
    //}
    
    }
    // console.log(username.value);
     if(username.value==="" || password.value===""){
     modal.style.display="none";
      console.log(username.value);
     }
  }

  crossmenu.onclick=function(){
    modal.style.display="none";
}
  // document.getElementById("check").innerHTML="hi";