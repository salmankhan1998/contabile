var modelbtn = document.getElementById('nav-Btn');
var modalcontainer = document.getElementById('modal-container');
var modalClose = document.getElementById('modal-close');

console.log('modelbtn => ', modelbtn, 'modalcontainer => ', modalcontainer);

modelbtn.addEventListener('click', () => {

    modalcontainer.classList.add('show');
});

modalClose.addEventListener('click', () => {

    modalcontainer.classList.add('remove');
});
