export const scrollUp = document.querySelector('.back-to-top');

window.onscroll = () => {
    if (window.scrollY > 450) {
        scrollUp.classList.remove('hide');
    } else if (window.scrollY < 450) {
        scrollUp.classList.add('hide');
    }
}
export function smoothScrollToBottomPage () {
   
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}
