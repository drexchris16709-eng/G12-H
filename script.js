const cleanersData = {
            monday: ["ALELUYA", "OLANOLAN", "JARABE", "FELISILDA", "BANDALAN", "AMISTOSO"],
            tuesday: ["AYAP", "DELAROSA", "CANGAYAO", "FRANCISCO", "BASIS", "JUANCE"],
            wednesday: ["BADONG", "SANTILLAN", "MARQUEZ", "LUMPOD", "ALCANTARA", "AMOROSO"],
            thursday: ["ARGAWANON", "SALINO", "ALMONTE", "BARRIOS", "LOBENDINO", "AYOSO", "SARA"],
            friday: ["PINEDA", "CAUSING", "PRETAL", "MILGAR", "BORJA", "ALCANSE", "SERVO"]
        };

        const daysButtons = document.querySelectorAll('#daysContainer button');
        const cleanersListEl = document.getElementById('cleanersList');
        const daysWrapper = document.getElementById('daysWrapper');

        function updateCleaners(day) {
            const names = cleanersData[day];
            cleanersListEl.innerHTML = names.map(name => 
                `<p class="text-2xl font-medium text-black">${name}</p>`
            ).join('');
        }

        function switchTab(activeBtn) {
            daysButtons.forEach(btn => {
                btn.classList.remove('tab-active');
                btn.classList.add('tab-inactive');
            });
            activeBtn.classList.add('tab-active');
            activeBtn.classList.remove('tab-inactive');
            activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            updateCleaners(activeBtn.dataset.day);
        }

        daysButtons.forEach(btn => btn.addEventListener('click', () => switchTab(btn)));

        let startX = 0;
        let isDragging = false;
        daysWrapper.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; isDragging = true; }, { passive: true });
        daysWrapper.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            daysWrapper.scrollLeft += startX - currentX;
            startX = currentX;
        }, { passive: true });
        daysWrapper.addEventListener('touchend', () => { isDragging = false; });

        switchTab(daysButtons[0]);

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
popupBox.textContent = 'System is under maintenance';

maintenancePopup.appendChild(popupBox);
document.body.appendChild(maintenancePopup);  
