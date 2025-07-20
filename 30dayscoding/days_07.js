
let changeTextButton = document.getElementById("change-text");
changeTextButton.addEventListener("click", function() {
  let targetDiv = document.getElementById("target-div");
  targetDiv.textContent = "Welcome Chai aur Code";
});


var div = document.querySelector( '.content' );
  

div.onmouseover = function() {
  this.style.backgroundColor = 'green';
  var h2s = this.getElementsByTagName( 'h2' );
  h2s[0].style.backgroundColor = 'lightgreen';
  
};
div.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  var h2s = this.getElementsByTagName( 'h2' );
  h2s[0].style.backgroundColor = 'transparent';
};




