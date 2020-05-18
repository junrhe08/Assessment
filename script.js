var slideIndex = [1,1];  
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
} 

var p1 = {name:"Iphone 4", brand:"Apple", description:"Phone",price:"$"+1000};
var p2 = {name:"Iphone 5", brand:"Apple", description:"Phone",price:"$"+2000};
var p3 = {name:"Iphone 6", brand:"Apple", description:"Phone",price:"$"+3000};
var p4 = {name:"Iphone 7", brand:"Apple", description:"Phone",price:"$"+4000};
var p5 = {name:"Iphone 8", brand:"Apple", description:"Phone",price:"$"+5000};
var p6 = {name:"Iphone 10", brand:"Apple", description:"Phone",price:"$"+6000};
var p7 = {name:"Iphone 11", brand:"Apple", description:"Phone",price:"$"+7000};
var p8 = {name:"Iphone 11+", brand:"Apple", description:"Phone",price:"$"+8000};

document.getElementById("p1").innerHTML =
p1.name + "<br/>" + p1.brand + "<br/>" + p1.description + "<br/>" + p1.price;
document.getElementById("p2").innerHTML =
p2.name + "<br/>" + p2.brand + "<br/>" + p2.description + "<br/>" + p2.price;
document.getElementById("p3").innerHTML =
p3.name + "<br/>" + p3.brand + "<br/>" + p3.description + "<br/>" + p3.price;
document.getElementById("p4").innerHTML =
p4.name + "<br/>" + p4.brand + "<br/>" + p4.description + "<br/>" + p4.price;
document.getElementById("p5").innerHTML =
p5.name + "<br/>" + p5.brand + "<br/>" + p5.description + "<br/>" + p5.price;
document.getElementById("p6").innerHTML =
p6.name + "<br/>" + p6.brand + "<br/>" + p6.description + "<br/>" + p6.price;
document.getElementById("p7").innerHTML =
p7.name + "<br/>" + p7.brand + "<br/>" + p7.description + "<br/>" + p7.price;
document.getElementById("p8").innerHTML =
p8.name + "<br/>" + p8.brand + "<br/>" + p8.description + "<br/>" + p8.price;


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
enter1 =document.getElementById("enter1") 
enter1.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+p1.name+","+"Price:"+p1.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Successfully Add to the Cart");
});
enter2 =document.getElementById("enter2") 
enter2.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+p2.name+","+"Price:"+p2.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Successfully Add to the Cart");
});
enter3 =document.getElementById("enter3") 
enter3.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+p3.name+","+"Price:"+p3.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Successfully Add to the Cart");
});
enter4 =document.getElementById("enter4") 
enter4.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+p4.name+","+"Price:"+p4.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Successfully Add to the Cart");
});
enter5 =document.getElementById("enter5") 
enter5.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+p5.name+","+"Price:"+p5.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Successfully Add to the Cart");
});
enter6 =document.getElementById("enter6") 
enter6.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+p6.name+","+"Price:"+p6.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Successfully Add to the Cart");
});
enter7 =document.getElementById("enter7") 
enter7.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+p7.name+","+"Price:"+p7.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Successfully Add to the Cart");
});
enter8 =document.getElementById("enter8") 
enter8.addEventListener("click", function(){
   var node = document.createElement("LI");
   var textnode = document.createTextNode("Brand:"+p8.name+","+"Price:"+p8.price);
   node.appendChild(textnode);
   document.getElementById("myUL").appendChild(node);
   alert("Successfully Add to the Cart");
});