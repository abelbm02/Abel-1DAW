(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        // Validar hobbies manualmente
        const checkboxes = form.querySelectorAll('.hobby:checked');
        if (checkboxes.length === 0) {
        event.preventDefault();
        event.stopPropagation();
        const fieldset = form.querySelector('.hobby')?.closest('fieldset');
        if (fieldset) fieldset.classList.add('is-invalid');
        }

        // Validación estándar del navegador
        if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        }

        // Validar coincidencia de contraseñas
        const pass = form.querySelector('#pass')?.value;
        const pass2 = form.querySelector('#pass2')?.value;
        if (pass !== pass2) {
        event.preventDefault();
        event.stopPropagation();
        form.querySelector('#pass2')?.classList.add('is-invalid');
        }

        form.classList.add('was-validated');
    }, false);
    });
})();
