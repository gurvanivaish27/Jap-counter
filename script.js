let japname = prompt("Which name do you wish to chant?");
if(!japname){
    japname = "Radhe-Radhe";
}
document.getElementById("chantbtn").innerText=japname;
let count=0;

function increment() {
count+=1;
document.getElementById("count").textContent = count;
}

function reset(){
    count=0;
document.getElementById("count").textContent = count;
}