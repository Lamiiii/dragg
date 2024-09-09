// const dragBox=document.querySelector("#img");
// const dropBox=document.querySelector("#dropBox");

// dragBox.ondragstart=function(event){
//    event.dataTransfer.setData("id",this.getAttribute("id")); 
// }

// dropBox.ondragover=(event)=>event.preventDefault();


// dropBox.ondrop=function(event){
//  const getId=event.dataTransfer.getData("id");
//  const element=document.getElementById(getId);
//  this.append(element);
// }





// const dropBox=document.querySelector("#dropBox");

// const dragBoxes = document.querySelectorAll(".dragBox");

// dragBoxes.forEach((element) => {
//   element.ondragstart = function(event) {
//     event.dataTransfer.setData("class", this.getAttribute("class")); // `className` istifadə edilir
//   }
// });


// dropBox.ondragover=(event)=>event.preventDefault();

// dropBox.ondrop=function(event){
// const className=event.dataTransfer.getData("class");
// const element=document.getElementsByClassName(className);
// this.append(element);

// }
   

     


const dropBox = document.querySelector("#dropBox"); 

const dragBoxes = document.querySelectorAll(".dragBox");

dragBoxes.forEach((element) => {
   element.onmouseover=function(){
     this.style.backgroundColor="red";
   }

   element.onmouseout=function(){
      this.style.backgroundColor="";
    }


  element.ondragstart = function(event) {
    event.dataTransfer.setData("class", this.className); 
  }
});

dropBox.ondragover = (event) => event.preventDefault(); 

dropBox.ondrop = function(event) {
  event.preventDefault();

  const className = event.dataTransfer.getData("class");
  const element = document.querySelector(`.${className}`); 

    this.append(element);
};
