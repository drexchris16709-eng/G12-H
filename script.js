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

document.addEventListener('DOMContentLoaded', () => {

  const searchDataset = [
    { name: "Christian Andrie B. Lumpod", file: "christian-lumpod.html" },
    { name: "Armil John P. Lobendino",    file: "armil-lobendino.html" },
    { name: "Kyle Jassem T. Bandalan",     file: "kyle-bandalan.html" },
    { name: "Ryle Kristof S. Marquez",     file: "ryle-marquez.html" },
    { name: "Christian Paul A. Pineda",   file: "christian-pineda.html" },
    { name: "John Vincent T. Pretal",     file: "john-pretal.html" },
    { name: "Eric John A. Milgar",        file: "eric-milgar.html" },
    { name: "Clifford Jay D. Salino",     file: "clifford-salino.html" }
  ];

  const defaultSuggestions = [
    { name: "Students List",       file: "students-list.html" },
    { name: "R.I.A Pro (Premium Mode)",            file: "pro-mode" },
    { name: "Teachers Dashboard",  file: "teachers-dashboard.html" },
    { name: "All Records (Graceful Hopper)",         file: "all-records.html" }
  ];

  const riaSysSearchBtn = document.getElementById('riaSysSearchBtn');
  const riaSysModalBackdrop = document.getElementById('riaSysModalBackdrop');
  const riaSysCloseBtn = document.getElementById('riaSysCloseBtn');
  const riaSysSearchInput = document.getElementById('riaSysSearchInput');
  const riaSysSuggestionsContainer = document.getElementById('riaSysSuggestionsContainer');
  const riaSysSectionLabel = document.getElementById('riaSysSectionLabel');

  const riaProModalBackdrop = document.getElementById('riaProModalBackdrop');
  const riaProCloseBtn = document.getElementById('riaProCloseBtn');
  const riaProPayBtn = document.getElementById('riaProPayBtn');
  const riaProStatusMsg = document.getElementById('riaProStatusMsg');
  const riaProPaymentOptions = document.querySelectorAll('.ria-pro-payment-option');

  function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  }

  function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }

  function openSearchModal() {
    if (riaSysModalBackdrop) {
      riaSysModalBackdrop.classList.add('ria-sys-active');
      lockScroll();
      renderDefaultSuggestions();
      setTimeout(() => { riaSysSearchInput.focus(); }, 50);
    }
  }

  function closeSearchModal() {
    if (riaSysModalBackdrop) {
      riaSysModalBackdrop.classList.remove('ria-sys-active');
      riaSysSearchInput.value = '';
      unlockScroll();
    }
  }

  function renderDefaultSuggestions() {
    riaSysSectionLabel.textContent = "Suggestions by Super AI";
    riaSysSuggestionsContainer.innerHTML = '';
    defaultSuggestions.slice(0, 4).forEach(item => {
      riaSysSuggestionsContainer.appendChild(createCard(item));
    });
  }

  function createCard(item) {
    const card = document.createElement('div');
    card.className = 'ria-sys-card';
    card.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <span>${item.name}</span>
    `;

    card.addEventListener('click', () => {
      if (item.file === "pro-mode" || item.name === "R.I.A Pro") {
        closeSearchModal();
        openRiaProModal();
      } else {
        riaSysSearchInput.value = item.name;
        navigateToFile(item);
      }
    });

    return card;
  }

  function navigateToFile(item) {
    const targetUrl = item.file;

    fetch(targetUrl)
      .then(response => {
        if (!response.ok) throw new Error('File missing');
        return response.text();
      })
      .then(htmlContent => {
        if (htmlContent.trim() === '') {
          showFileNotFound();
        } else {
          window.location.href = targetUrl;
        }
      })
      .catch(() => {
        showFileNotFound();
      });
  }

  function showFileNotFound() {
    riaSysSectionLabel.textContent = "Error";
    riaSysSuggestionsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 14px; text-align: center; color: #ff5555; background: #2a1515; border-radius: 8px; border: 1px solid #552222; font-size: 0.9rem;">
        ⚠️ File not found
      </div>
    `;
  }

  function handleSearch(query) {
    const cleanQuery = query.trim().toLowerCase();
    if (cleanQuery === '') {
      renderDefaultSuggestions();
      return;
    }

    const matches = searchDataset.filter(item => item.name.toLowerCase().includes(cleanQuery));
    riaSysSectionLabel.textContent = matches.length > 0 ? "Search Results" : "No results found";
    riaSysSuggestionsContainer.innerHTML = '';
    matches.forEach(item => {
      riaSysSuggestionsContainer.appendChild(createCard(item));
    });
  }

  window.openRiaProModal = function() {
    if (riaProModalBackdrop) {
      riaProModalBackdrop.classList.add('ria-pro-active');
      lockScroll();
    }
  };

  window.closeRiaProModal = function() {
    if (riaProModalBackdrop) {
      riaProModalBackdrop.classList.remove('ria-pro-active');
      if (riaProStatusMsg) riaProStatusMsg.textContent = '';
      unlockScroll();
    }
  };

  riaProPaymentOptions.forEach(option => {
    option.addEventListener('click', () => {
      riaProPaymentOptions.forEach(opt => opt.classList.remove('ria-pro-option-active'));
      option.classList.add('ria-pro-option-active');
      const radioInput = option.querySelector('input[type="radio"]');
      if (radioInput) radioInput.checked = true;
    });
  });

  if (riaProPayBtn) {
    riaProPayBtn.addEventListener('click', () => {
      riaProPayBtn.disabled = true;
      riaProPayBtn.textContent = 'Processing...';
      setTimeout(() => {
        localStorage.setItem('ria_pro_user', 'true');
        riaProStatusMsg.style.color = '#55ff55';
        riaProStatusMsg.textContent = '🎉 Payment Successful! R.I.A Pro Activated.';
        setTimeout(() => {
          closeRiaProModal();
          riaProPayBtn.disabled = false;
          riaProPayBtn.textContent = 'Pay ₱199 & Activate Pro';
        }, 1500);
      }, 2000);
    });
  }

  if (riaSysSearchBtn) riaSysSearchBtn.addEventListener('click', openSearchModal);
  if (riaSysCloseBtn) riaSysCloseBtn.addEventListener('click', closeSearchModal);
  if (riaProCloseBtn) riaProCloseBtn.addEventListener('click', closeRiaProModal);
  if (riaSysModalBackdrop) {
    riaSysModalBackdrop.addEventListener('click', (e) => {
      if (e.target === riaSysModalBackdrop) closeSearchModal();
    });
  }

  if (riaProModalBackdrop) {
    riaProModalBackdrop.addEventListener('click', (e) => {
      if (e.target === riaProModalBackdrop) closeRiaProModal();
    });
  }

  if (riaSysSearchInput) {
    riaSysSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    riaSysSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        
        const cleanQuery = riaSysSearchInput.value.trim().toLowerCase();
        const match = searchDataset.find(item => item.name.toLowerCase().includes(cleanQuery));
        if (match) {
          e.preventDefault();
          navigateToFile(match);
        } else if (cleanQuery !== '') {
          e.preventDefault();
          showFileNotFound();
        }
      } else if (e.key === 'Escape' && riaSysModalBackdrop.classList.contains('ria-sys-active')) {
        closeSearchModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && riaProModalBackdrop && riaProModalBackdrop.classList.contains('ria-pro-active')) {
      closeRiaProModal();
    }
  });

});

(function () {
  const style = document.createElement("style");
  style.textContent = `
    .maintenance-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vw;
      height: 100vh;
      background-color: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      opacity: 1;
      transition: opacity 0.4s ease;
    }

    .maintenance-card {
      background: #ffffff;
      width: 90%;
      max-width: 440px;
      padding: 36px 28px;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
      text-align: center;
      animation: popupSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      box-sizing: border-box;
    }

    @keyframes popupSlide {
      from {
        transform: translateY(20px) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }

    .maintenance-icon-container {
      width: 64px;
      height: 64px;
      margin: 0 auto 20px;
      background: #f1f5f9;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: background 0.3s ease;
    }

    .maintenance-gear-icon {
      width: 32px;
      height: 32px;
      color: #0f172a;
      animation: spin 10s linear infinite;
    }

    /* Loading Spinner Style */
    .maintenance-spinner {
      width: 32px;
      height: 32px;
      border: 3px solid #cbd5e1;
      border-top: 3px solid #0f172a;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto;
    }

    /* Small Check Icon badge inside the circle container */
    .maintenance-check-badge {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 22px;
      height: 22px;
      background-color: #16a34a;
      border: 2px solid #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      animation: bounceIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    @keyframes bounceIn {
      0% { transform: scale(0); }
      70% { transform: scale(1.15); }
      100% { transform: scale(1); }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .maintenance-card h2 {
      margin: 0 0 10px;
      color: #0f172a;
      font-size: 1.4rem;
      font-weight: 700;
    }

    .maintenance-text {
      margin: 0 0 20px;
      color: #64748b;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .maintenance-status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background-color: #fef3c7;
      color: #92400e;
      font-size: 0.85rem;
      font-weight: 600;
      border-radius: 9999px;
      margin-bottom: 24px;
      transition: background 0.3s ease, color 0.3s ease;
    }

    .maintenance-pulse-dot {
      width: 8px;
      height: 8px;
      background-color: #d97706;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.7);
      animation: pulse 1.8s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(217, 119, 6, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(217, 119, 6, 0); }
    }

    .maintenance-btn {
      width: 100%;
      padding: 12px 20px;
      background-color: #0f172a;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: background-color 0.2s ease, transform 0.1s ease, opacity 0.2s ease;
    }

    .maintenance-btn:hover {
      background-color: #1e293b;
    }

    .maintenance-btn:active {
      transform: scale(0.98);
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.className = "maintenance-overlay";
  overlay.id = "maintenance-overlay";

  overlay.innerHTML = `
    <div class="maintenance-card" id="maintenance-card-content">
      <div class="maintenance-icon-container" id="maintenance-icon-wrap">
        <svg class="maintenance-gear-icon" id="maintenance-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </div>
      <h2 id="maintenance-title">System Under Maintenance</h2>
      <p class="maintenance-text" id="maintenance-desc">
        We are currently performing scheduled system upgrades to improve performance. We'll be back shortly!
      </p>
      <div class="maintenance-status-badge" id="maintenance-badge">
        <span class="maintenance-pulse-dot"></span> Status: Upgrading Databases
      </div>
      <button class="maintenance-btn" id="maintenance-retry-btn">
        <span id="maintenance-btn-text">Check Status</span>
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  const btn = document.getElementById("maintenance-retry-btn");
  const btnText = document.getElementById("maintenance-btn-text");
  const iconWrap = document.getElementById("maintenance-icon-wrap");
  const icon = document.getElementById("maintenance-icon");
  const title = document.getElementById("maintenance-title");
  const desc = document.getElementById("maintenance-desc");
  const badge = document.getElementById("maintenance-badge");

  btn.addEventListener("click", function () {
    icon.remove();
    const spinner = document.createElement("div");
    spinner.className = "maintenance-spinner";
    iconWrap.appendChild(spinner);

    btnText.textContent = "Checking Server...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    setTimeout(() => {
      // ⚠️ Change this to `true` when your server comes back online
      const isServerOnline = "true";

      if (isServerOnline) {
        spinner.remove();
        iconWrap.appendChild(icon);
        iconWrap.style.background = "#dcfce7";

        const checkBadge = document.createElement("div");
        checkBadge.className = "maintenance-check-badge";
        checkBadge.innerHTML = `
          <svg style="width:13px;height:13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        iconWrap.appendChild(checkBadge);

        title.textContent = "Connection Restored";
        desc.textContent = "You are now back to the server.";
        
        badge.style.background = "#dcfce7";
        badge.style.color = "#166534";
        badge.innerHTML = `<span style="width:8px;height:8px;background:#16a34a;border-radius:50%;display:inline-block;"></span> Status: Online`;

        btn.style.background = "#16a34a";
        btn.style.opacity = "1";
        btn.innerHTML = `
          <svg style="width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Connected</span>
        `;

        setTimeout(() => {
          overlay.style.opacity = "0";
          setTimeout(() => overlay.remove(), 400);
        }, 1500);

      } else {
        spinner.remove();
        iconWrap.appendChild(icon);
        btnText.textContent = "Still in Maintenance — Try Again";
        btn.style.opacity = "1";
        btn.disabled = false;
      }
    }, 1500);
  });
})();
