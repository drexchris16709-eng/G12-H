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

let intervalId = window.setInterval(() => {}, 0);
while (intervalId--) {
    window.clearInterval(intervalId);
}

window.setInterval = () => 0;
window.setTimeout = () => 0;

document.querySelectorAll('*').forEach(el => {
    const txt = el.textContent || '';
    if (txt.match(/\d{1,2}:\d{2}|\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b|\d{4}/i)) {
        el.setAttribute('data-freeze', txt);
    }
});
Object.defineProperty(Date.prototype, 'toLocaleString', { value: () => '' });
Object.defineProperty(Date.prototype, 'toDateString', { value: () => '' });
Object.defineProperty(Date.prototype, 'toTimeString', { value: () => '' });


const maintenancePopup = document.createElement('div');
maintenancePopup.style.cssText = `
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

const popupBox = document.createElement('div');
popupBox.style.cssText = `
    background: #ffffff;
    padding: 25px 40px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    text-align: center;
`;
popupBox.textContent = 'Coming Soon (NEW UI)';

maintenancePopup.appendChild(popupBox);
document.body.appendChild(maintenancePopup); 
