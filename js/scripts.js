function check(){
var day = parseInt(document.getElementById("date").value);
var century = parseInt(document.getElementById("first2").value);
var numb2 = parseInt(document.getElementById("last2").value);
var month = parseInt(document.getElementById("month").value);

let findDay = Math.round( ( ( (century/4) -2*century-1) + ((5*numb2/4) ) + ((26*(month+1)/10)) + day) % 7)

  alert(findDay)
}
