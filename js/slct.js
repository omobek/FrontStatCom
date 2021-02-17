let select1 = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select1 = this.closest('.select'),
            currentText = select1.querySelector('.select__current');
        currentText.innerText = text;
        select1.classList.remove('is-active');

    }

    function selectChooseOne(){

    }

};


select1();