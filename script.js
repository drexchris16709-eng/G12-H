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

<div id="officerModalOverlay"></div>

<div id="officerTriangleBtn" onclick="openOfficerModal()">
    <span></span>
</div>

<div id="officerSideModal">

    <button id="closeOfficerModal" onclick="closeOfficerModal()">✕</button>

    <div id="officerModalLeft">
        <button onclick="changeOfficer('President')">President</button>
        <button onclick="changeOfficer('Vice President')">Vice President</button>
        <button onclick="changeOfficer('Secretary')">Secretary</button>
        <button onclick="changeOfficer('External Secretary')">External Secretary</button>
        <button onclick="changeOfficer('Treasurer')">Treasurer</button>
        <button onclick="changeOfficer('Auditor')">Auditor</button>
        <button onclick="changeOfficer('P.I.O')">P.I.O</button>
        <button onclick="changeOfficer('S.M.M')">S.M.M</button>
        <button onclick="changeOfficer('PO1')">PO1</button>
        <button onclick="changeOfficer('PO2')">PO2</button>
        <button onclick="changeOfficer('Secretary Document')">Secretary Document</button>
    </div>

    <div id="officerModalRight">
        <img id="officerPicture" src="logo.jpg">
        <h2 id="officerName">Select Officer</h2>
        <p id="officerText">Click a button to view information.</p>
    </div>

</div>

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

<li id="SMM"><strong>S.M.M:</strong>Christopher Johann D. Olanolan</li>

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

window.addEventListener("load", () => {
    document.getElementById("welcomeModal").classList.add("show");
});

function closeWelcomeModal(){
    document.getElementById("welcomeModal").classList.remove("show");
}

function goHome(){
    location.reload();
}

const sidebarButtons = sidebar.querySelectorAll("button");

sidebarButtons.forEach(button => {
    button.addEventListener("click", () => {
        sidebar.classList.add("hide");
    });
});

function showSidebar(){
    sidebar.classList.remove("hide");
}

function openOfficerModal(){
document.getElementById("officerSideModal").classList.add("active");
}

function closeOfficerModal(){
document.getElementById("officerSideModal").classList.remove("active");
}

function changeOfficer(position){

    const officerPicture = document.getElementById("officerPicture");
    const officerName = document.getElementById("officerName");
    const officerText = document.getElementById("officerText");

    const officers = {

        "President":{
            image:"logo.jpg",
            text:"The President leads the class and oversees all activities and meetings, make sure that class goals and responsibilities are carried out effectively."
        },

        "Vice President":{
            image:"vp.jpg",
            text:"The Vice President assists the President in leading the class and managing its activities, and also take over the President's responsibilities whenever the President is absent or unavailable."
        },

        "Secretary":{
            image:"logo.jpg",
            text:"The Secretary records the minutes of meetings and keeps important class documents organized, and also prepare reports and maintain official records."
        },

        "External Secretary":{
            image:"ex.jpeg",
            text:"The External Secretary communicates with other classes, organizations, and school offices, and help coordinate external events and partnerships."
        },

        "Treasurer":{
            image:"logo.jpg",
            text:"The Treasurer manages the class funds and keeps accurate financial records, collecting fees and prepare financial reports for the class."
        },

        "Auditor":{
            image:"logo.jpg",
            text:"The Auditor checks the Treasurer's financial records for accuracy and transparency, ensuring that all class funds are properly accounted for."
        },

        "P.I.O":{
            image:"pio.jpeg",
            text:"The Public Information Officer shares important announcements, updates, and activities with the class, and ensure that students receive accurate information in a clear and timely manner"
        },

        "S.M.M":{
            image:"logo.jpg",
            text:"The Social Media Manager manages the class's social media accounts and creates engaging posts, promoting class activities and keep students updated through online platforms."
        },

        "PO1":{
            image:"logo.jpg",
            text:"The Peace Officer 1 helps maintain order and discipline during class activities and meetings, encourage students to follow school rules and promote a safe environment."
        },

        "PO2":{
            image:"logo.jpg",
            text:"The Peace Officer 2 assists PO1 in maintaining peace and discipline within the class, helping resolve minor issues and support the officers during events."
        },

        "Secretary Document":{
            image:"logo.jpg",
            text:"The Secretary for Documentation takes photos, videos, and other records of class activities and events, organize and preserve documentation for reports, presentations, and future reference."
        }

    };

document.addEventListener("click", function(e){

    if(e.target.tagName === "IMG" && e.target.closest("#officerModalRight")){

        const oldPopup = document.getElementById("officerImagePopup");
        if(oldPopup){
            oldPopup.remove();
        }

        const popup = document.createElement("div");
        popup.id = "officerImagePopup";

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "✕";
        closeBtn.id = "closeOfficerImagePopup";

        const frame = document.createElement("div");
frame.id = "officerImageFrame";

const img = document.createElement("img");
img.src = e.target.src;

const shine = document.createElement("div");
shine.id = "officerImageShine";

frame.appendChild(img);
frame.appendChild(shine);

popup.appendChild(closeBtn);
popup.appendChild(frame);

        document.body.appendChild(popup);

        closeBtn.style.position = "fixed";
        closeBtn.style.top = "25px";
        closeBtn.style.right = "25px";
        closeBtn.style.zIndex = "9999999";
        closeBtn.style.pointerEvents = "auto";

        img.style.maxWidth = "85vw";
        img.style.maxHeight = "85vh";
        img.style.objectFit = "contain";

        closeBtn.addEventListener("click", function(){
            popup.remove();
        });

        popup.addEventListener("click", function(event){
            if(event.target === popup){
                popup.remove();
            }
        });

    }

});

    officerPicture.src = officers[position].image;
    officerName.innerHTML = position;
    officerText.innerHTML = officers[position].text;

}

function openOfficerModal(){
    document.getElementById("officerSideModal").classList.add("active");
    document.getElementById("officerModalOverlay").classList.add("active");
}

function closeOfficerModal(){
    document.getElementById("officerSideModal").classList.remove("active");
    document.getElementById("officerModalOverlay").classList.remove("active");
}

function showCleaners(){

const content = document.getElementById("content");

content.innerHTML = `

<h1 class="CleanersTitle">Cleaners</h1>

<button id="openCleanerSidebar" onclick="toggleCleanerSidebar()"></button>

<div id="cleanerSidebar">
    <button onclick="showCleaner('Monday')">Monday</button>
    <button onclick="showCleaner('Tuesday')">Tuesday</button>
    <button onclick="showCleaner('Wednesday')">Wednesday</button>
    <button onclick="showCleaner('Thursday')">Thursday</button>
    <button onclick="showCleaner('Friday')">Friday</button>
</div>

<div id="cleanerPictureFrame">
    <img id="cleanerImage" src="logo.jpg" alt="" onclick="openCleanerPopup()">
</div>

<div id="cleanerImagePopup">
    <button id="closeCleanerPopup" onclick="closeCleanerPopup()">✕</button>
    <img id="popupCleanerImage" src="">
</div>
`;
}

function toggleCleanerSidebar(){
    document.getElementById("cleanerSidebar").classList.toggle("active");
}

function openCleanerPopup(){

    document.getElementById("popupCleanerImage").src =
        document.getElementById("cleanerImage").src;

    document.getElementById("cleanerImagePopup").classList.add("active");
}

function closeCleanerPopup(){

    document.getElementById("cleanerImagePopup").classList.remove("active");
}

function showCleaner(cleaner){

    let image = document.getElementById("cleanerImage");
    let popupImage = document.getElementById("popupCleanerImage");
    let name = document.getElementById("cleanerName");

    let cleaners = {
        "Monday":"m.jpg",
        "Tuesday":"tue.jpg",
        "Wednesday":"wed.jpg",
        "Thursday":"th.jpg",
        "Friday":"fr.jpg"
    };

    currentCleanerIndex = cleanerDays.indexOf(cleaner);

    image.src = cleaners[cleaner];
    popupImage.src = cleaners[cleaner];
    name.textContent = cleaner;
}

const cleanerDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];

let currentCleanerIndex = 0;

let startX = 0;

document.addEventListener("touchstart", function(e){

    if(e.target.id !== "popupCleanerImage") return;

    startX = e.touches[0].clientX;

}, { passive: true });

document.addEventListener("touchend", function(e){

    if(e.target.id !== "popupCleanerImage") return;

    let endX = e.changedTouches[0].clientX;
    let distance = endX - startX;

    if(Math.abs(distance) < 60) return;

    if(distance < 0){
        currentCleanerIndex++;

        if(currentCleanerIndex >= cleanerDays.length){
            currentCleanerIndex = 0;
        }

    }else{

        currentCleanerIndex--;

        if(currentCleanerIndex < 0){
            currentCleanerIndex = cleanerDays.length - 1;
        }

    }

    showCleaner(cleanerDays[currentCleanerIndex]);

}, { passive: true });

function openCleanerPopup(){

    const popup = document.getElementById("cleanerImagePopup");
    const popupImg = document.getElementById("popupCleanerImage");
    const currentImg = document.querySelector("#cleanerPictureFrame img");

    popupImg.src = currentImg.src;

    popup.classList.add("active");
}

function closeCleanerPopup(){
    document.getElementById("cleanerImagePopup").classList.remove("active");
}

function openInfoModal(){

    document.getElementById("infoModal").classList.add("active");

}

function closeInfoModal(){

    document.getElementById("infoModal").classList.remove("active");

}

const loading = document.createElement("div");
loading.id = "pageLoading";

loading.innerHTML = `
<div id="loadingSpinner"></div>
`;

document.body.appendChild(loading);

const style = document.createElement("style");

style.innerHTML = `
#pageLoading{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.65);
    display:none;
    justify-content:center;
    align-items:center;
    z-index:999999999;
    backdrop-filter:blur(3px);
}

#loadingSpinner{
    width:70px;
    height:70px;
    border:7px solid rgba(255,255,255,.2);
    border-top:7px solid skyblue;
    border-right:7px solid cyan;
    border-radius:50%;
    animation:loadingSpin .4s linear infinite;
    box-shadow:
        0 0 15px skyblue,
        0 0 30px cyan;
}

@keyframes loadingSpin{

    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }

}
`;

document.head.appendChild(style);

function showLoading(){
    loading.style.display = "flex";
}

function hideLoading(){
    loading.style.display = "none";
}

// =========================
// Automatic for ALL Buttons
// =========================

document.addEventListener("click",function(e){

    const btn = e.target.closest("button");

    if(!btn) return;

    if(
        btn.id === "closeCleanerPopup" ||
        btn.id === "closeInfoModal" ||
        btn.id === "closeOfficerModal" ||
        btn.id === "closeOfficerImagePopup" ||
        btn.id === "closeModal"
    ){
        return;
    }

    showLoading();

    setTimeout(function(){

        hideLoading();

    },700);

});

function openInfoImage(img){

    document.getElementById("popupInfoImage").src = img.src;

    document.getElementById("infoImagePopup").classList.add("active");

}

function closeInfoImage(){

    document.getElementById("infoImagePopup").classList.remove("active");

}

document.getElementById("infoImagePopup").addEventListener("click",function(e){

    if(e.target === this){

        closeInfoImage();

    }

});

document.addEventListener("click", function(e){

    const dateModal = document.querySelector(".dateModal");
    if(dateModal && e.target === dateModal){
        dateModal.style.display = "none";
    }

    const welcomeModal = document.querySelector(".welcome-modal");
    if(welcomeModal && e.target === welcomeModal){
        welcomeModal.classList.remove("show");
    }

    const officerOverlay = document.getElementById("officerModalOverlay");
    const officerModal = document.getElementById("officerSideModal");

    if(officerOverlay && e.target === officerOverlay){
        officerOverlay.classList.remove("active");
        officerModal.classList.remove("active");
    }

    const officerImagePopup = document.getElementById("officerImagePopup");
    if(officerImagePopup && e.target === officerImagePopup){
        officerImagePopup.style.display = "none";
    }

    const cleanerPopup = document.getElementById("cleanerImagePopup");
    if(cleanerPopup && e.target === cleanerPopup){
        cleanerPopup.classList.remove("active");
    }

    const infoModal = document.getElementById("infoModal");
    if(infoModal && e.target === infoModal){
        closeInfoModal();
    }

    const infoImagePopup = document.getElementById("infoImagePopup");
    if(infoImagePopup && e.target === infoImagePopup){
        infoImagePopup.classList.remove("active");
    }

});
