// Years of experience
function expYears(){
    const currentYear = new Date().getFullYear();
    const startYear = 2014;
    const YOE = currentYear - startYear;
    if (document.getElementById("YOE")) {
        document.getElementById("YOE").textContent = YOE;
    } else {
        return;
    }
    
}

function thanksFonts(){
    var fontType = ["Emeritus", "Taklobo", "Tangley", "Swirl"];
    var num = Math.floor(Math.random()*4);
    if (document.getElementById("thanks")) {
        document.getElementById("thanks").style.fontFamily = fontType[num];
    } else {
        return;
    }
}

window.addEventListener("load", myInit, true); function myInit(){  
    expYears(); 
    thanksFonts();
};