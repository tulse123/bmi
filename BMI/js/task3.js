inputOne=document.getElementById('inputOne')
inputTwo=document.getElementById('inputTwo')
result=document.getElementById('result')
showresult=document.getElementById('showresult')
function printNum(lesser, greater){
    let text = "";
    console.log(lesser)
    console.log(greater)
    for(let i=lesser; i <= greater; i++){
        console.log(i)

        if(i%3 === 0 || i%7 === 0){
            if(i%3 === 0 && i%7 === 0){
                text += "hiphop" + "<br>";
                showresult.innerHTML=text;

            }
            else if(i%3 === 0){
                text += "hip" + "<br>";
                showresult.innerHTML=text;
    
            }
            else if(i%7 === 0){
                text += "hop" + "<br>";
                showresult.innerHTML=text;
    
            }
            
        }
        else{
            text += i+ "<br>";
            showresult.innerHTML=text;
        } 
    }

}
result.addEventListener("click", function(e){
    e.preventDefault();
    newInputOne=Number(inputOne.value);
    newInputTwo=Number(inputTwo.value);
    if(newInputOne > 1000 || newInputTwo > 1000 || newInputOne < 0 || newInputTwo < 0){
        showresult.innerHTML="value can only be 0-1000"
    }
    else{
        if (newInputOne > newInputTwo){
            printNum(newInputTwo, newInputOne);
        }
        else{
            printNum(newInputOne, newInputTwo);
        }

    }
   
    
    
});
result.addEventListener("click", () => {
    alert('hello');
});