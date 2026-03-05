
let niz = JSON.parse(localStorage.getItem('task')) || [];

function akoNema() {
    if (niz.length === 0) {
        document.getElementById("nema").innerHTML = "Trenutno nema taskova!";
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

        



        check.addEventListener('change', function () {
            
            if (check.checked) {
                t.gotovo = true;
                naslov.style.color = "#888";
                naslov.style.textDecoration = "line-through";
                zadatak.style.color = "#888";
                zadatak.style.textDecoration = "line-through";
                saveItem();

            } else if (!check.checked) {
                t.gotovo = false;
                naslov.style.color = "#ffffff";
                naslov.style.textDecoration = "none";
                zadatak.style.color = "#ffffff";
                zadatak.style.textDecoration = "none";
                saveItem();

            }
        })


        let izbrisi = document.createElement('button');
        izbrisi.innerHTML ="IZBRIŠI";
        izbrisi.classList.add('izbrisi');
        osnovni.appendChild(izbrisi);

        izbrisi.addEventListener('click',function(){
            niz.splice(index, 1);
            saveItem();
            
            render();
        })

        



    })
}