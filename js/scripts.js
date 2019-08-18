function check(){
var day = document.questions.date.value;
var century = document.questions.first2.value;
var numb2 = document.questions.last2.value;
var month =document.questions.month.value;

  if (day > 31) {
  alert("check date")
    }
  if (century > 20) {
  alert ("enter first two digits of birth year")
  }
  if (month > 12) {
    alert("enter correct month format")
  }
}
