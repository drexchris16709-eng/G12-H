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
<button id="openCleanerSidebar" onclick="toggleCleanerSidebar()"></button>

<div id="cleanerSidebar">
    <button onclick="showCleaner('Cleaner 1')">Monday</button>
    <button onclick="showCleaner('Cleaner 2')">Tuesdday</button>
    <button onclick="showCleaner('Cleaner 3')">Wednesday</button>
    <button onclick="showCleaner('Cleaner 4')">Thursday</button>
    <button onclick="showCleaner('Cleaner 5')">Friday</button>
</div>

    <div id="cleanerPictureFrame">
        <img id="cleanerImage" src="" alt="Cleaner Picture">
        <h2 id="cleanerName">Select a Day</h2>
    </div>

</div>
`;
}

function toggleCleanerSidebar(){
    document.getElementById("cleanerSidebar").classList.toggle("active");
}

function showCleaner(name){
    document.getElementById("cleanerContent").innerHTML = `
        <h1>${name}</h1>
        <p>Information about ${name}.</p>
    `;
}

function toggleCleanerSidebar(){

    const sidebar = document.getElementById("cleanerSidebar");
    const buttons = sidebar.querySelectorAll("button");


    if(sidebar.classList.contains("active")){

        buttons.forEach((btn,index)=>{
            btn.classList.remove("openBtn");
            setTimeout(()=>{
                btn.classList.add("closeBtn");
            }, index * 50);

        });

        setTimeout(()=>{
            sidebar.classList.remove("active");
            buttons.forEach(btn=>{
                btn.classList.remove("closeBtn");
            });
        },400);

    }else{
        sidebar.classList.add("active");
        buttons.forEach((btn,index)=>{
            btn.classList.remove("closeBtn");
            setTimeout(()=>{
                btn.classList.add("openBtn");
            }, index * 50);

        });

    }

}

function showCleaner(cleaner){

    let image = document.getElementById("cleanerImage");
    let name = document.getElementById("cleanerName");

    let cleaners = {
        "Monday":"logo.jpg",
        "Tuesday":"logo.jpg",
        "Wednesday":"logo.jpg",
        "Thursday":"logo.jpg",
        "Friday":"logo.jpg"
    };

    image.src = cleaners[cleaner];
    name.innerHTML = cleaner;
}

const image = document.getElementById("image");

const wrapper = document.createElement("div");
wrapper.className = "imageWrapper";

image.parentNode.insertBefore(wrapper, image);
wrapper.appendChild(image);
