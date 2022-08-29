const footerButtom = document.querySelector('.footer__btn');
const backdropFooter = document.querySelector('.backdrop');

footerButtom.addEventListener('click', onOpenFooterButtom);
backdropFooter.addEventListener('click', onCloseModal);
document.addEventListener('keydown', onCloseByEscape);  

function onOpenFooterButtom(){
    backdropFooter.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
   
}

function onCloseModal(e){
    const closeByButton = e.target.classList.contains('backdrop__button');
    const closeByBackdrop =  e.target.classList.contains('backdrop');
    if(!closeByButton && !closeByBackdrop){
        return;
    }else{
        backdropFooter.classList.add('is-hidden');
        document.body.style.overflow = 'visible';
    };
}

function onCloseByEscape (event) {
    if (event.code === 'Escape') {
        backdropFooter.classList.add('is-hidden');
        document.body.style.overflow = 'visible';
    };
};


export { onOpenFooterButtom, onCloseModal, onCloseByEscape };