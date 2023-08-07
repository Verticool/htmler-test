import modals from './modules/modals';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import burger from './modules/burger';
import sliderMove from './modules/sliderMove'

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    sliderMove({
        container: '.places_slider',
        nextArrow: '.places_slider_btn_right',
        prevArrow: '.places_slider_btn_left',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.places_slider_items',
        field: '.places_slider_inner',
        slide: '.places_slider_item',
        offsetWidth: 970,
        slidesFieldDisplay: 'flex',
    });
    sliderMove({
        container: '.feedback',
        nextArrow: '.slider_feedback_btn_right',
        prevArrow: '.slider_feedback_btn_left',
        wrapper: '.slider_feedback',
        field: '.slider_feedback__inner',
        slide: '.slider_feedback__item',
        offsetWidth: 0,
        slidesFieldDisplay: 'flex',
    });
    modals();
    forms();
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="email"]');
    checkTextInputs('[name="message"]');

    burger('.side-menu', '.hamburger');

});