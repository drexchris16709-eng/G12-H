function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("active");
}

function toggleDropdown(index){
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns[index].classList.toggle("active");
}

const sidebar = document.getElementById("sidebar");

let startY = 0;
let scrollTop = 0;

sidebar.addEventListener("touchstart", function(e){
    startY = e.touches[0].pageY;
    scrollTop = sidebar.scrollTop;
});

sidebar.addEventListener("touchmove", function(e){
    const y = e.touches[0].pageY;
    sidebar.scrollTop = scrollTop - (y - startY);
}, { passive: true });

const topBar = document.getElementById("topBar");
window.addEventListener("scroll", () => {

    if(window.scrollY > 180){
        topBar.classList.add("show");
    }else{
        topBar.classList.remove("show");
    }

});

const activeTime = document.getElementById("activeTime");

const startTime = Date.now();
function updateActiveTime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const hours = String(Math.floor(elapsed / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
    const seconds = String(elapsed % 60).padStart(2, "0");
    activeTime.textContent = `Active Time: ${hours}:${minutes}:${seconds}`;
}

updateActiveTime();
setInterval(updateActiveTime, 1000);
updateActiveTime();
setInterval(updateActiveTime, 1000);
window.addEventListener("scroll", function () {
    const sidebar = document.getElementById("sidebar");
    if (window.scrollY <= 400) {
        sidebar.classList.remove("active");

    }

});

document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    if (sidebar.classList.contains("active")) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("active");

        }

    }

});

document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    if (sidebar.classList.contains("active")) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("active");

        }

    }

});

const notificationBtn = document.getElementById("notificationBtn");
const notificationPanel = document.getElementById("notificationPanel");
const notificationCount = document.getElementById("notificationCount");

if(notificationBtn && notificationPanel){
    notificationBtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        notificationPanel.classList.toggle("active");
        if(notificationPanel.classList.contains("active")){
            if(notificationCount){
                notificationCount.style.display = "none";
            }

        }

    });

    document.addEventListener("click",(e)=>{
        if(
            !notificationBtn.contains(e.target) &&
            !notificationPanel.contains(e.target)
        ){
            notificationPanel.classList.remove("active");

        }

    });

}

function openNotification(title, text){
    const modalTitle = document.getElementById("modalNotificationTitle");
    const modalText = document.getElementById("modalNotificationText");
    const modal = document.getElementById("notificationModal");
    if(modalTitle && modalText && modal){
        modalTitle.innerHTML = title;
        modalText.innerHTML = text;
        modal.classList.add("active");

    }

}

const closeNotificationModal = document.getElementById("closeNotificationModal");
if(closeNotificationModal){
    closeNotificationModal.onclick = function(){
        document.getElementById("notificationModal")
        .classList.remove("active");

    };

}

const notificationModal = document.getElementById("notificationModal");
if(notificationModal){
    notificationModal.onclick = function(e){
        if(e.target === this){
            this.classList.remove("active");

        }

    };

}

const dateTimeText = document.getElementById("dateTimeText");

function updateDateTime(){

    const now = new Date();

    const date = now.toLocaleDateString("en-US",{
        weekday:"long",
        month:"long",
        day:"numeric",
        year:"numeric"
    });

    const time = now.toLocaleTimeString("en-US",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:true
    });

    dateTimeText.textContent = `Date & Time: ${date} • ${time}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

const DEFAULT_LAT = 14.5995; 
const DEFAULT_LON = 120.9842;

async function checkConnectionAndWeather() {
  const badge = document.getElementById('status-badge');
  const locEl = document.getElementById('weather-loc');
  const tempEl = document.getElementById('weather-temp');

  if (navigator.onLine) {
    badge.classList.remove('offline');
    badge.classList.add('online');
    locEl.textContent = "Online";

    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${DEFAULT_LAT}&longitude=${DEFAULT_LON}&current_weather=true`);
      const data = await res.json();
      tempEl.textContent = `${Math.round(data.current_weather.temperature)}°C`;
    } catch (err) {
      tempEl.textContent = "--°C";
    }
  } else {
    badge.classList.remove('online');
    badge.classList.add('offline');
    locEl.textContent = "Offline";
    tempEl.textContent = "--°C";
  }
}

window.addEventListener('DOMContentLoaded', checkConnectionAndWeather);
window.addEventListener('online', checkConnectionAndWeather);
window.addEventListener('offline', checkConnectionAndWeather);

const songs = [
    "Moonstar88 - Migraine.mp3",
    "IV Of Spades - Mundo.mp3",
    "Ikaw Lamang - Silent Sanctuary.mp3",
    "Eraserheads - Ang Huling El Bimbo.mp3",
    "Itchyworms - Di na muli.mp3",
    "Ikot.mp3"
];

let currentSong = 0;
let warningAccepted = false;
let autoPlayNext = true;

const audio = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const songName = document.getElementById("songName");

function loadSong(index){
    audio.src = songs[index];
    songName.textContent = songs[index];
}

loadSong(currentSong);
playBtn.onclick = function () {
    if (!warningAccepted) {
        document.getElementById("musicWarning").style.display = "flex";
        return;
    }
    if (audio.paused) {
        autoPlayNext = true;
        audio.play();
        playBtn.textContent = "▌▌";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }

};

nextBtn.onclick = function(){
    currentSong++;
    if(currentSong >= songs.length){
        currentSong = 0;
    }
    loadSong(currentSong);
    autoPlayNext = false;
    audio.pause();
    playBtn.textContent = "▶";

};

prevBtn.onclick = function(){
    currentSong--;
    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    autoPlayNext = false;
    audio.pause();
    playBtn.textContent = "▶";

};

audio.onended = function(){
    currentSong++;
    if(currentSong >= songs.length){
        currentSong = 0;
    }
    loadSong(currentSong);
    if(autoPlayNext){
        audio.play();
        playBtn.textContent = "▌▌";
    }else{
        playBtn.textContent = "▶";
    }

};

document.getElementById("continueMusic").onclick = function () {
    warningAccepted = true;
    document.getElementById("musicWarning").style.display = "none";
    autoPlayNext = true;
    audio.play();
    playBtn.textContent = "▌▌";
};

document.getElementById("cancelMusic").onclick = function () {
    document.getElementById("musicWarning").style.display = "none";
    audio.pause();
    playBtn.textContent = "▶";
};

window.isAppOnline = true;
function blockScrollInteractions(e) {
  if (!window.isAppOnline) {
    e.preventDefault();
  }
}

function handleNetworkChange() {
  const isOnline = navigator.onLine;
  window.isAppOnline = isOnline;
  let modal = document.getElementById('network-error-modal');
  if (!isOnline) {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('wheel', blockScrollInteractions, { passive: false });
    window.addEventListener('touchmove', blockScrollInteractions, { passive: false });
    window.addEventListener('keydown', blockScrollKeyboardIntercept, { passive: false });

    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'network-error-modal';
      modal.innerHTML = `
        <div class="network-modal-box">
          <div class="network-modal-icon"></div>
          <h2>No Internet Connection</h2>
          <p>Please connect to the internet or contact the developer immediately.</p>
        </div>
      `;
      
      document.body.appendChild(modal);
    }
    
    setTimeout(() => modal.classList.add('active'), 10);
  } else {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    window.removeEventListener('wheel', blockScrollInteractions);
    window.removeEventListener('touchmove', blockScrollInteractions);
    window.removeEventListener('keydown', blockScrollKeyboardIntercept);
    if (modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  }
}

function blockScrollKeyboardIntercept(e) {
  const keysToBlock = ['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'];
  if (keysToBlock.includes(e.code)) {
    e.preventDefault();
  }
}

window.addEventListener('offline', handleNetworkChange);
window.addEventListener('online', handleNetworkChange);
window.addEventListener('DOMContentLoaded', handleNetworkChange);

document.addEventListener('DOMContentLoaded', () => {
  const viewMoreBtn = document.querySelector('.viewMoreBtn');
  const detailsModal = document.getElementById('details-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  if (viewMoreBtn && detailsModal) {
    viewMoreBtn.addEventListener('click', () => {
      if (window.isAppOnline === false) return;
      
      detailsModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeModalBtn && detailsModal) {
    const closeWindow = () => {
      detailsModal.classList.remove('open');
      document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', closeWindow);

    detailsModal.addEventListener('click', (e) => {
      if (e.target === detailsModal) {
        closeWindow();
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const seeMoreBtn = document.querySelector('.seeMoreBtn');
  const seeMoreModal = document.getElementById('see-more-modal');
  const closeSeeMoreBtn = document.getElementById('close-see-more-btn');
  if (seeMoreBtn && seeMoreModal) {
    seeMoreBtn.addEventListener('click', () => {
      if (window.isAppOnline === false) return;
      seeMoreModal.classList.add('open');
      document.body.style.overflow = 'hidden'; 
    });
  }

  if (closeSeeMoreBtn && seeMoreModal) {
    const closeWindow = () => {
      seeMoreModal.classList.remove('open');
      document.body.style.overflow = ''; 
    };

    closeSeeMoreBtn.addEventListener('click', closeWindow);
    seeMoreModal.addEventListener('click', (e) => {
      if (e.target === seeMoreModal) {
        closeWindow();
      }
    });
  }
});

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const aiModal = document.getElementById('aiModal');
if (openModalBtn && closeModalBtn && aiModal) {
    openModalBtn.addEventListener('click', () => {
        aiModal.classList.toggle('hidden');
    });
    closeModalBtn.addEventListener('click', () => {
        aiModal.classList.add('hidden');
    });
    document.addEventListener('click', (event) => {
        if (!aiModal.contains(event.target) && !openModalBtn.contains(event.target)) {
            aiModal.classList.add('hidden');
        }
    });
}

const modal = document.getElementById('infoModal');
function showOtherInfo() {
    modal.classList.add('active');
}
function closeOtherInfo() {
    modal.classList.remove('active');
}
window.onclick = function(event) {
    if (event.target === modal) {
        closeOtherInfo();
    }
}

const loginBtn = document.getElementById("loginBtn");
const riaRedirectModalUnique = document.getElementById("riaRedirectModalUnique");
loginBtn.addEventListener("click", () => {
    riaRedirectModalUnique.classList.add("riaRedirectModalOpenUnique");
});

function closeRiaRedirectModalUnique(){
    riaRedirectModalUnique.classList.remove("riaRedirectModalOpenUnique");
}

function goToRIAUnique(){
    window.location.href = "ria.html";
}

function goToRIAUnique(){
    closeRiaRedirectModalUnique();
    document
        .getElementById("riaUserTypeModal")
        .classList.add("riaUserTypeOpen");

}

function closeRiaUserTypeModal(){
    document
        .getElementById("riaUserTypeModal")
        .classList.remove("riaUserTypeOpen");

}

function selectStudent(){
    window.location.href="student.html";

}

function selectTeacher(){
    window.location.href="teacher.html";

}

function selectStudent(){
    closeRiaUserTypeModal();
    document
        .getElementById("riaStudentLoginModal")
        .classList.add("riaStudentLoginOpen");

}

function selectTeacher(){
    closeRiaUserTypeModal();
    document
        .getElementById("riaTeacherLoginModal")
        .classList.add("riaTeacherLoginOpen");

}

function closeStudentLogin(){
    document
        .getElementById("riaStudentLoginModal")
        .classList.remove("riaStudentLoginOpen");

}

function closeTeacherLogin(){
    document
        .getElementById("riaTeacherLoginModal")
        .classList.remove("riaTeacherLoginOpen");

}

function studentLogin(){
}

function teacherLogin(){
}

const signupBtn = document.getElementById("signupBtn");
const riaSignupModalUnique = document.getElementById("riaSignupModalUnique");
signupBtn.addEventListener("click", () => {
    riaSignupModalUnique.classList.add("riaSignupModalOpenUnique");
});

function closeSignupModal(){
    riaSignupModalUnique.classList.remove("riaSignupModalOpenUnique");
}

function openFacebookPage(){
}

function contactDeveloper(){
}

document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".adviserCard");
    if (card) {
        const video = document.createElement("video");
        video.src = ".mp4";
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.classList.add("bgVideo");
        card.prepend(video);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#notificationBtn");
    if (btn) {
        document.body.appendChild(btn); 
    }
});

function rescueNotificationSystem() {
    const btn = document.querySelector("#notificationBtn");
    const panel = document.querySelector("#notificationPanel");
    if (btn && btn.parentElement !== document.body) {
        document.body.appendChild(btn);
    }
    if (panel && panel.parentElement !== document.body) {
        document.body.appendChild(panel);
    }
}

rescueNotificationSystem();
document.addEventListener("DOMContentLoaded", rescueNotificationSystem);
window.addEventListener("load", rescueNotificationSystem);
setTimeout(rescueNotificationSystem, 500);

document.addEventListener('DOMContentLoaded', () => {
    const uniqueModal = document.getElementById('wcmWelcomeModalUnique');
    const uniqueCloseBtn = document.getElementById('wcmCloseModalBtnUnique');
    if (uniqueCloseBtn && uniqueModal) {
        uniqueCloseBtn.addEventListener('click', () => {
            uniqueModal.style.transition = 'opacity 0.3s ease';
            uniqueModal.style.opacity = '0';
            setTimeout(() => {
                uniqueModal.style.display = 'none';
            }, 300);
        });
    }
});
