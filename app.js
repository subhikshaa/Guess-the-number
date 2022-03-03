var guesssNumber = Math.round(Math.random()*100);

checkMyGuess=()=>{
    var userInput = document.getElementById("uservalue").value;
if(userInput==guesssNumber){
document.getElementById("output").textContent="Hurray...!! You Found It";
timeRefresh(2000);
}
else if(userInput>guesssNumber){
    document.getElementById("output").textContent="Guess is too high";
}
else{
    document.getElementById("output").textContent="Guess is too low";
}
}
timeRefresh=(time)=>{
setTimeout("location.reload(true);",time);
}