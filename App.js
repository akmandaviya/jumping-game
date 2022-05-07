var dino = document.getElementById("dino");
var block = document.getElementById("block");


// -------for jumping the dino-------
function jump() {
    if(dino.classList != "animate") {
        dino.classList.add("animate");
    }
   
    setTimeout(function() {
        dino.classList.remove("animate");
    },500)
}

//--------checking hit detection-----
var checkIfHit = setInterval(function() {
    // getting top position of dino 
   var dinoTop = parseInt (window.getComputedStyle(dino).getPropertyValue("top")); 
    // getting left position of block
    var blockLeft = parseInt (window.getComputedStyle(block).getPropertyValue("left")); 

    if(blockLeft < 20 && blockLeft > 0 && dinoTop >=130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over");//this means both are hit with each other
    }
},10)