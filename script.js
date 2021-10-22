var xpos;
var ypos;
var zpos;
var e1pos;
var e2pos;
var e3pos;
var step;

function stepMod(){
    step = document.getElementById("step").value;
    
}
function increment(axis){
    var previous;
    var final;
    previous = parseFLoat(document.getElementById(axis).value);
    final = previous + step;
    document.getElementById(axis).textContent(final);
}

console.log(document.getElementById("step"))