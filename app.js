// 1. Carrusel de Clases
function scrollClasses(offset) {
    const container = document.getElementById('classes-container');
    container.scrollBy({ left: offset, behavior: 'smooth' });
}

// 2. Modales
const modal = document.getElementById('apply-modal');
const modalContent = document.getElementById('apply-modal-content');

function openApplyModal() {
    modal.classList.remove('hidden');
    // Allow display block to apply before adding opacity
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeApplyModal() {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }, 10);
}

// Cerrar modal al click en el exterior
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeApplyModal();
    }
});

// 2b. Info Modal Logic
const infoModal = document.getElementById('info-modal');
const infoModalContent = document.getElementById('info-modal-content');

function openInfoModal(title, subtitle, desc) {
    document.getElementById('info-modal-title').textContent = title;
    document.getElementById('info-modal-subtitle').textContent = subtitle;
    document.getElementById('info-modal-desc').textContent = desc;

    infoModal.classList.remove('hidden');
    setTimeout(() => {
        infoModal.classList.remove('opacity-0');
        infoModalContent.classList.remove('scale-95', 'opacity-0');
        infoModalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeInfoModal() {
    infoModalContent.classList.remove('scale-100', 'opacity-100');
    infoModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        infoModal.classList.add('opacity-0');
        setTimeout(() => {
            infoModal.classList.add('hidden');
        }, 300);
    }, 10);
}

infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) {
        closeInfoModal();
    }
});

// 3. Envío de Formulario - Informativo / Decorativo
function submitForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const bgOld = btn.className;

    btn.innerHTML = 'ENVIANDO...';
    btn.classList.add('opacity-50', 'pointer-events-none');

    setTimeout(() => {
        btn.innerHTML = 'ESTÁS DENTRO. REVISA TU CORREO.';
        btn.classList.remove('bg-primary');
        btn.classList.add('bg-white', 'text-black');

        // Efecto visual y cierre
        setTimeout(() => {
            closeApplyModal();
            e.target.reset();
            // Resetear Botón
            btn.className = bgOld;
            btn.innerHTML = 'ENVIAR APLICACIÓN';
        }, 3000);
    }, 1000);
}

// 4. Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
function toggleMenu() {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('-translate-x-full');
        }, 10);
    } else {
        mobileMenu.classList.add('-translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
}

// 5. La animación estroboscópica (.strobe-bar) ahora se procesa mediante @keyframes en CSS.
