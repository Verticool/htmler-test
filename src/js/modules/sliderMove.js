function sliderMove({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter,
    wrapper, field, offsetWidth, slidesFieldDisplay }) {


    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),

        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = offsetWidth;


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = slidesFieldDisplay;
    slidesField.style.transition = '0.5s all';

    // slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    function initialSlider(slidesField) {
        return slidesField.style.transform = `translateX(-${offsetWidth}px)`;
    }
    initialSlider(slidesField);


    next.addEventListener('click', () => {
        if (offset === deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

    })
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    });

}

export default sliderMove;