

var formInput = document.querySelectorAll('.form__input');

for (const items of formInput) {
    items.addEventListener('click', function () {
        // items.classList.toggle('border__input');
        window.addEventListener('click', function (e) {
            console.log(formInput)
            if (!e.target.matches('form__input')) {
                if (formInput.classList.contains('border__input')) {
                    formInput.classList.remove('border__input')
                }
            }
        });
    });

};

