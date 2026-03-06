
let niz = JSON.parse(localStorage.getItem('task')) || [];

function akoNema() {
    let niz2 = niz.filter(t => t.gotovo===false);
    if (niz2.length === 0) {
        document.getElementById("nema").innerHTML = "Trenutno nema nezavršenih taskova!";
    } else {
        document.getElementById("nema").innerHTML = "";
    }
}
function saveItem() {
    localStorage.setItem('task', JSON.stringify(niz));
}


document.addEventListener('DOMContentLoaded', function () {
    akoNema();
    render();
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav ul");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        nav.classList.toggle("active")
    });
});


function render() {
    let svi = document.getElementById("svi");
    svi.innerHTML = "";
    akoNema();

    niz.forEach((t, index) => {
        if (!t.gotovo) {
            let osnovni = document.createElement('div');
            osnovni.classList.add("osnovni");
            let naslov = document.createElement("h3");
            let zadatak = document.createElement("p");
            zadatak.classList.add("zadatak");

            naslov.innerHTML = "TASK " + (index + 1) + "#";
            zadatak.innerHTML = t.sadrzaj;
            osnovni.appendChild(naslov);
            osnovni.appendChild(zadatak);
            svi.appendChild(osnovni);
            let check = document.createElement("input");
            check.type = "checkbox";
            check.classList.add("check")
            osnovni.appendChild(check);
            check.checked = t.gotovo;
            if (t.gotovo) {
                naslov.style.color = "#888";
                naslov.style.textDecoration = "line-through";
                zadatak.style.color = "#888";
                zadatak.style.textDecoration = "line-through";
            }

            let brojKaraktera = t.sadrzaj.length;

            if(brojKaraktera>21){
                zadatak.style.fontSize="11px"
            }else{zadatak.style.fontStyle="16px"}





            check.addEventListener('change', function () {

                if (check.checked) {
                    t.gotovo = true;
                    naslov.style.color = "#888";
                    naslov.style.textDecoration = "line-through";
                    zadatak.style.color = "#888";
                    zadatak.style.textDecoration = "line-through";
                    saveItem();
                    render();

                } else if (!check.checked) {
                    t.gotovo = false;
                    naslov.style.color = "#ffffff";
                    naslov.style.textDecoration = "none";
                    zadatak.style.color = "#ffffff";
                    zadatak.style.textDecoration = "none";
                    saveItem();
                    render();

                }
            })


            let izbrisi = document.createElement('button');
            izbrisi.innerHTML = "IZBRIŠI";
            izbrisi.classList.add('izbrisi');
            osnovni.appendChild(izbrisi);

            izbrisi.addEventListener('click', function () {
                niz.splice(index, 1);
                saveItem();
                render();


            })
        }





    })
}