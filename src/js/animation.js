import ScrollReveal from 'scrollreveal';

const distance = '24px';
ScrollReveal({ reset: false });

export const setScrollReveal = (element, isStaggered) => {
    let delayOffset;
    isStaggered ? delayOffset = 200 : delayOffset = 0;
    element.forEach((item, index) => {
        ScrollReveal().reveal(item, {
            delay: delayOffset * (index - 1),
            distance: distance,
            easing: 'ease-in',
        });
    })
}

export const syncScrollReveal = () => {
    ScrollReveal().sync();
}