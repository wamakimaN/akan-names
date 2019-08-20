function check(){
var day = parseInt(document.getElementById("date").value);
var century = parseInt(document.getElementById("first2").value);
var numb2 = parseInt(document.getElementById("last2").value);
var month = parseInt(document.getElementById("month").value);

var findDay = Math.round( ( ( (century/4) -2*century-1) + ((5*numb2/4) ) + ((26*(month+1)/10)) + day) % 7)
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

if (document.getElementById("male").checked)  {
  switch (findDay) {
    case 1:
    alert(maleName[6]);
    break;
    case 2:
    alert(maleName[1]);
    break;
    case 3:
    alert(maleName[2]);
    break;
    case 4:
    alert(maleName[3]);
    break;
    case 5:
    alert(maleName[4]);
    break;
    case 6:
    alert(maleName[5]);
    break;
    case 7:
    alert(maleName[0]);
    break;
  }
}
else if (document.getElementById("female").checked)  {
  switch (findDay) {
    case 1:
    alert(femaleName[6]);
    break;
    case 2:
    alert(femaleName[1]);
    break;
    case 3:
    alert(femaleName[2]);
    break;
    case 4:
    alert(femaleName[3]);
    break;
    case 5:
    alert(femaleName[4]);
    break;
    case 6:
    alert(femaleName[5]);
    break;
    case 7:
    alert(femaleName[0]);
    break;
  }
}
else alert("choose gender")
}
