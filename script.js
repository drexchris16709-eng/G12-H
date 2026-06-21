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

       
