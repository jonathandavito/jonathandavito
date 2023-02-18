// Years of experience
function expYears(){
    const currentYear = new Date().getFullYear();
    const startYear = 2014;
    const YOE = currentYear - startYear;

    document.getElementById("YOE").textContent = YOE;
}

function thanksFonts(){
    var fontType = ["Emeritus", "Taklobo", "Tangley", "Swirl"];
    var num = Math.floor(Math.random()*4);
    
    document.getElementById("thanks").style.fontFamily = fontType[num];
}

window.addEventListener("load", myInit, true); function myInit(){  
    //expYears(); 
    thanksFonts();
};