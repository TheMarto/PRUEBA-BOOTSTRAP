const imgconst = document.querySelectorAll('.galery .container-img');
const imgModal = document.getElementById('modal-galery-img');

imgconst.forEach((img) => {
    img.addEventListener('click', () => {
        const rutaimg = img.querySelector('img').src;
        imgModal.src = rutaimg;
    });
})