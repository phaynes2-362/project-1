function alert_me(){
  alert("you have submited"); 
  return true;
  }
 function validate() {
	var x = document.forms["myForm"]["fname"].value;
	if(x == "") {
		alert("your must be filled out!");
		return false;
	}
