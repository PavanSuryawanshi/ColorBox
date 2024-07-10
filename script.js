let box = document.getElementById("box");
let colorArray = [ "blue", "purple", "green", " yellow", "black"];

const changeColor = () =>{
    const randomnum = parseInt(Math.random()*5);
    console.log(Math.random());

    box.style.backgroundColor = colorArray[0]
};

changeColor();