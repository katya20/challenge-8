readMessages(function(message) {
  $(".message-display").append($("<div>" + message + "</div>"));
})

// this is run when we clear the messages in the store
listenForClear(function() {  
  $(".message-display").html("")
})

console.log("hello")

var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
  var keyCode = e.keyCode;
  var inputValue = quantityInput.val();
  console.log ("hi");
  // enter key!
  if (keyCode == 13) {	
    console.log("enter")
  }
})
