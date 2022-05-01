mass=document.getElementById('mass');
console.log(mass)
height=document.getElementById('height');
result=document.getElementById('result')
showresult=document.getElementById('showresult')
result.addEventListener("click", function(e){
    e.preventDefault();
    newMass=mass.value;
    //convert centimeter to meter
    newHeight=(height.value)/100;
    //calulate bmi formula

        var bmi=newMass/(newHeight*newHeight)
        //precision of two decimal
        var myNumberWithTwoDecimalPlaces=parseFloat(bmi).toFixed(2);
        showresult.innerHTML=myNumberWithTwoDecimalPlaces
    
});