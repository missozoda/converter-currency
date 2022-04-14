
var elDollar = document.querySelector("#dollar");
var elSum = document.querySelector("#sum");
var elBtn = document.querySelector(".form-btn");
var elChangeBtn = document.querySelector(".form-change-btn");
var elList = document.querySelector(".list");
var elCourse = 11000;
var count = 1;
var elText1 = document.querySelector(".form-label-1");
var elText2 = document.querySelector(".form-label-2");
var elClearBtn = document.querySelector(".clear-btn");



elChangeBtn.addEventListener("click", function(e){
  e.preventDefault();

  if (count == 1){
    elText1.textContent = "So`m";
    elText2.textContent = "$";
    count ++;
    elDollarValue = elDollar.value;
    elDollar.value = elSum.value;
    elSum.value = elDollarValue;
  }
  else{
    elText2.textContent = "So`m";
    elText1.textContent = "$";
    elDollarValue = elDollar.value;
    elDollar.value = elSum.value;
    elSum.value = elDollarValue;
    count = 1;
  }
})


elBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  
  var elDollarValue = elDollar.value.trim();

  if (elDollarValue == "" || elDollarValue.length > 15){
    elDollar.setAttribute( 'style', 'border-color: red !important' );
    return
  }

  var dollarNumber = Number(elDollarValue)
  if (isNaN(dollarNumber)){
    elDollar.setAttribute( 'style', 'border-color: red !important' );
    return
  }

  if (elText2.textContent == "$"){
    var sum = elDollarValue / elCourse;
    elSum.value = sum;
  }
  else {
    sum = elDollarValue * elCourse;
    elSum.value = sum;
  }

  elDollar.setAttribute( 'style', 'border-color: primary !important' );
  var newLi = document.createElement("li");
  var newSpan1 = document.createElement("span");
  var newSpan2 = document.createElement("span");
  newSpan1.textContent = elDollarValue;
  newSpan2.textContent= sum;
  

  if (elText2.textContent == "So`m") {
    newSpan1.textContent = elDollarValue;
    newSpan2.textContent= sum;
    newLi.append(newSpan1," $ ", " = ", newSpan2, " sum ");
  }
  else{
    newSpan2.textContent = elDollarValue;
    newSpan1.textContent= sum;
    newLi.append(newSpan2," sum ", " = ", newSpan1, " $ ");
    newLi.setAttribute( 'style', 'color: green !important' );
  }

  elList.appendChild(newLi);
})

elClearBtn.addEventListener("click", (evt) => {
  elList.innerHTML = ""
})