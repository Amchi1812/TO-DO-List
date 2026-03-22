let niz = [];


function dodaj() {
    let input = document.getElementById("task");
    let zadatak = input.value.trim();

    if (zadatak === "") return;

    niz.push({ id: Date.now(),sadrzaj: zadatak, gotovo: false });

    input.value = "";
    saveItem();
    posljednjiDodan();
    trenutno();
    duzina();
}



function posljednjiDodan() {



    if (niz.length === 0) {
        document.getElementById("posljednjiD").innerHTML = "Trenutno nema taskova!";
        return;
    }

    let duzina = niz.length;
    let posljednji = niz[duzina - 1];
    let zadatak = posljednji.sadrzaj;

    let element = document.getElementById("posljednjiD");
    

    element.innerHTML = "Zadatak " + duzina + "#" + "<br>" +  zadatak;

    if (posljednji.gotovo) {
        element.style.color = "#888";
        element.style.textDecoration = "line-through";
        document.getElementById("checkbox").checked = true;
    } else {
        element.style.color = "#ffffff";
        element.style.textDecoration = "none";
        document.getElementById("checkbox").checked = false;
    }

    
}




function saveItem() {
    localStorage.setItem('task', JSON.stringify(niz));
}

function loadTasks() {
    let sacuvano = localStorage.getItem('task');
    niz = sacuvano ? JSON.parse(sacuvano) : [];

    posljednjiDodan();

    
}





function zavrsen() {
    if (document.getElementById("checkbox").checked) {
        let duzina = niz.length;
        let posljednji = niz[duzina - 1];
        posljednji.gotovo = true;
        document.getElementById("posljednjiD").style.color = "#888";
        document.getElementById("posljednjiD").style.textDecoration = "line-through"
        saveItem();
    } else if (!document.getElementById("checkbox").checked) {
        let duzina = niz.length;
        let posljednji = niz[duzina - 1];
        let zadatak = posljednji.sadrzaj;
        posljednji.gotovo = false;

        document.getElementById("posljednjiD").style.color = "#ffffff";
        document.getElementById("posljednjiD").style.textDecoration = "none"
        document.getElementById("posljednjiD").innerHTML = "Zadatak " + duzina + "#" + "<br>" + zadatak;
        saveItem();
    }


}

function trenutno(){
    let duzina = niz.length;
    

    
    if(duzina === 0){
        document.querySelector(".check").style.display ="none";
    }else {
        document.querySelector(".check").style.display = "flex";  
    }
}

function duzina(){
    if(niz.length === 0) return;

    let posljednji = niz[niz.length - 1];
    let d = posljednji.sadrzaj.length;

    if (d>21){
        document.getElementById("posljednjiD").style.fontSize="11px";
        document.getElementById("posljednjiD").style.marginTop= "20px"
    }else {document.getElementById("posljednjiD").style.fontSize="16px";}
}

document.addEventListener('DOMContentLoaded', function () {
    loadTasks()
    trenutno();
    duzina();

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav ul");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        nav.classList.toggle("active")
    });
});



















