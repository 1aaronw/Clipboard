
if(localStorage["output"]){
    var output = localStorage["output"];
    document.getElementById("output").value = output;
}

document.getElementById("save").addEventListener("click", function(){
    var output = document.getElementById("output").value;
    localStorage.setItem("output", output);
    console.log("saved!");
}, false);


document.getElementById("clear").addEventListener("click", eraseText);

function eraseText(){
    document.getElementById("output").value = "";
}