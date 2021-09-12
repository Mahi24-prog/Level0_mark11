var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkBtn = document.querySelector(".check-btn");
var result = document.querySelector(".result")

function addDate(date){
    var sum = 0;
    var result = date.replaceAll("-","");
    for(var i of result){
        i = parseInt(i)
        sum += i;
    }
    return(sum);
}

function checkDateisLucky(sumOfDate, luckyNumber){
    if (parseInt(sumOfDate)%parseInt(luckyNumber) === 0){
        return true;
    }else{
        return false;
    }
}

checkBtn.addEventListener("click", ()=>{
    var sumOfDate = addDate(dateOfBirth.value);
    var output = checkDateisLucky(sumOfDate, luckyNumber.value);
    if(output == true){
        result.innerText = luckyNumber.value + " is Lucky Number 🥳 🥳 🥳"
    }else{
        result.innerText = luckyNumber.value + " is not that lucky 😕"
    }
})