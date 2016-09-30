addMessage("LOL");

var quantityInput = $(".element-quantity-input")


quantityInput.keydown(function(e) {
  var keyCode = e.keyCode;
  var inputValue = quantityInput.val();
  console.log ("hi");
  // enter key!
  if (keyCode == 13) {	
    console.log("enter");
    addElementsToThePage(inputValue);  
  }
})
