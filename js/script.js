
var elDollar = document.querySelector("#dollar");
var elSum = document.querySelector("#sum");
var elBtn = document.querySelector(".form-btn");
var elChangeBtn = document.querySelector(".form-change-btn");
var elList = document.querySelector(".list");
var elCourse = 11000;



elBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  

  var dollar = elDollar.value.trim();


  if (dollar == "" || dollar.length > 15){
    elDollar.setAttribute( 'style', 'border-color: red !important' );
    return
  }

  var dollarNumber = Number(dollar)
  if (isNaN(dollarNumber)){
    elDollar.setAttribute( 'style', 'border-color: red !important' );
    return
  }


  var sum = dollar * elCourse;
  elSum.value = sum;

  elDollar.setAttribute( 'style', 'border-color: primary !important' );
  var newLi = document.createElement("li");
  var newSpan1 = document.createElement("span");
  var newSpan2 = document.createElement("span");
  newSpan1.textContent = dollar;
  newSpan2.textContent= sum;

  newLi.append(newSpan1," $ ", " = ", newSpan2, " sum ");
  elList.appendChild(newLi);



})