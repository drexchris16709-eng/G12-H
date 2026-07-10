const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menuBtn");
const back = document.getElementById("backBtn");
const main = document.querySelector(".main");

window.onload = () => {
    sidebar.classList.add("hide");
    main.classList.add("full");
    menu.classList.remove("hide");
};

menu.onclick = () => {
    sidebar.classList.remove("hide");
    main.classList.remove("full");
    menu.classList.add("hide");
};

back.onclick = () => {
    sidebar.classList.add("hide");
    main.classList.add("full");
    menu.classList.remove("hide");
};

let seconds=0;

const timer=document.getElementById("activeTime");

setInterval(()=>{

seconds++;

let h=Math.floor(seconds/3600);
let m=Math.floor((seconds%3600)/60);
let s=seconds%60;

timer.innerHTML=
String(h).padStart(2,"0")+":"+
String(m).padStart(2,"0")+":"+
String(s).padStart(2,"0");

},1000);

function showOfficers(){

const content = document.getElementById("content");

content.innerHTML = `

<h1 id="officersTitle">Class Officers</h1>

<div id="officersContainer">

<h2 id="officersHeading1">Graceful Hopper Officers</h2>

<ol id="officersList">

<li id="officerPresident"><strong>President:</strong>Eric John Milgar</li>

<li id="officerVicePresident"><strong>Vice President:</strong>Christian Paul A. Pineda</li>

<li id="officerSecretary"><strong>Secretary:</strong>Jean Louisse C. Causing</li>

<li id="officerExternalSecretary"><strong>External Secretary:</strong>Rochel Ann Mae S. Alcanse</li>

<li id="officerTreasurer"><strong>Treasurer:</strong>Amber Reign A. Ayap</li>

<li id="officerAuditor"><strong>Auditor:</strong>Airish S. Amistoso</li>

<li id="officerPIO"><strong>P.I.O:</strong>Christian Andrie B. Lumpod</li>

<li id="SMM"><strong>SMM:</strong>Christopher Johann D. Olanolan</li>

<li id="PO1"><strong>PO1:</strong>Kyle Jassem T. Bandalan</li>

<li id="PO2"><strong>PO2:</strong>Franc Jarod F. Borja</li>

<li id="SecretaryDocumentation"><strong>Secretary Documentation:</strong>John Vincent T. Pretal</li>

</ol>

</ul>

<p id="officersDescription">
These officers help lead the class, support the teacher, and help keep the classroom organized.
</p>

</div>

`;

}

menu.onclick = () => {
    sidebar.classList.remove("hide", "closing");
    sidebar.classList.add("active");
};

back.onclick = () => {
    sidebar.classList.remove("active");
    sidebar.classList.add("closing");

    setTimeout(() => {
        sidebar.classList.add("hide");
        sidebar.classList.remove("closing");
    }, 500);
};

const triangleBtn = document.getElementById("triangleBtn");
const dateModal = document.getElementById("dateModal");
const closeModal = document.getElementById("closeModal");

const liveClock = document.getElementById("liveClock");
const currentDate = document.getElementById("currentDate");

triangleBtn.onclick = () => {
    dateModal.style.display = "flex";
};

closeModal.onclick = () => {
    dateModal.style.display = "none";
};

dateModal.onclick = (e) => {
    if (e.target === dateModal) {
        dateModal.style.display = "none";
    }
};

function updateTime(){

    const now = new Date();

    liveClock.textContent = now.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    });

    currentDate.textContent = now.toLocaleDateString([],{
        weekday:"long",
        month:"long",
        day:"numeric",
        year:"numeric"
    });
}

updateTime();
setInterval(updateTime,1000);

let id = window.setInterval(() => {}, 0);
while (id--) clearInterval(id);
window.setInterval = () => 0;
window.setTimeout = () => 0;

const loadingScreen = document.createElement('div');
loadingScreen.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
`;

const circle = document.createElement('div');
circle.style.cssText = `
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #0033CC;
    border-radius: 50%;
    animation: spin 1s linear infinite;
`;

const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

loadingScreen.appendChild(circle);
document.body.appendChild(loadingScreen); 
