var myImage = document.getElementById("myimg");

let l = document.getElementById("left");
let r = document.getElementById("right");


let min = 1;

function left() {
    if (index > min) {
        index--;
    }
    if (index < max) {
        r.style.display = "inline-block";
    }

    // if (index == min) {
    //     l.style.display = "none";
    // }
    else {
        l.style.display = "inline-block";
    }
    myImage.src = `images/${index}.jpg`;
}

function right() {

    if (index < max) {
        index++;
    }
    // if (index == max) {
    //     r.style.display = "none";
    // }
    else {
        r.style.display = "inline-block";
    }

    if(index>min){
        l.style.display="inline-block";
    }

    myImage.src = `images/${index}.jpg`;
}

// function slider(){
//     right();
//     if(index==max){
//         index=0;
//     }
    
// }

// setInterval(() => {
//     slider();
// }, 1000);



function mainSlider() {
    myImage.style.transitionDuration = "0.5s";

    var index = 0;
    var max = 8;
    setInterval(() => {
        myImage.style.marginLeft = `-${index * 650}px`;
        index++;
        if (index == max) {
            index = 0;
        }
    }, 2000);
}

let container2 = document.getElementById("container2");
for (let i = 0; i < 8; i++) {
    container2.innerHTML += `<img id="imgs32" src="images/${i + 1}.jpg"></img>`
}
var index = 0;
let childrens = container2.children
for (let i = 0; i < childrens.length; i++) {
    childrens[i].setAttribute("draggable", false)
    childrens[i].addEventListener("click",(e)=>{
        myImage.src = childrens[i].src;
        index = i;
    });
}

var mouseX1 = 0;
var mouseX2 = 0;
document.onmousedown = (e) => {
    mouseX1 = e.clientX;
};
var myimage = document.getElementById("imgs32");
myimage.style.transitionDuration = "0.5s";
var max = 8;
document.onmouseup = (e) => {
    //e.clientX

    //mouseX1
    // console.log(e.clientX)
    // console.log(mouseX1)



    if ((e.clientX - mouseX1) < 0) {
        if(index==0){
            index++;
        }
        if (index != max) {
            myimage.style.marginLeft = `-${index * 140}px`;
            index++;
        }
        else{
            myimage.style.marginLeft = "0px";
            index = 1;
        }
       // console.log(index)
    }
    else if ((e.clientX - mouseX1) > 100) {
        if(index!=1){

            index--;
        }
        index--;
        myimage.style.marginLeft = `-${index * 140}px`;
        
        //console.log("Second: ",index)
    }
};


