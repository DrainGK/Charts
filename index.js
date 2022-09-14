const charts = document.getElementById("charts");

let arrayCharts = [];


async function fetchCharts(){
    
    await fetch('data.json')
    .then((res) => res.json())
    .then((data) => (arrayCharts = data));
    
    console.log(arrayCharts[0].day);
    
    //me permet de lire la base de donnee en JSON, apres je me dois de l'utiliser
    //Je pense que pour afficher ce dont j'ai besoin, je vais devoir utiliser un .map
}

function getDay() {
    const weekday = ["sun","mon","tue","wed","thu","fri","sat"];

    const d = new Date();
    return weekday[d.getDay()];
}


function chartsDisplay() {
    
    day = getDay();

    console.log(day);
    charts.innerHTML = arrayCharts.map((chart) => {

       return `
        <li class="myCharts">
            <div class="chartsComp">
                <h2 hidden>$${chart.amount}</h2>
                <canvas class="bite${day === chart.day ? " currentDay" : ""}" width="0" height= ${chart.amount*2} onClick="maFonction(this)"></canvas>
                <h3 >${chart.day}</h3>
            </div>
        </li>
        `
        
    }
    ).join("")
    
    console.log(arrayCharts);
}

window.addEventListener('load', () => {
    fetchCharts().then(() => chartsDisplay());
});

function maFonction(canvas) {
    canvas.classList.toggle('color')
    console.log(canvas)
    showHide(canvas.parentElement.querySelector("h2"))
}

function showHide(elt) {
    if (elt.hidden) {
        elt.hidden = false
    } else {
        elt.hidden = true
    }
}
