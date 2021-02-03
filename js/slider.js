function createInnerSlide(className, src, alt) {
    const elemWrapper = document.createElement('div');
    elemWrapper.setAttribute('class', className);
    carouselInner.append(elemWrapper);

    const innerSlide = document.createElement('img');
    innerSlide.setAttribute('class', 'd-block w-100 slider');
    innerSlide.setAttribute('src', src);
    innerSlide.setAttribute('alt', alt);
    elemWrapper.append(innerSlide);
}

function createControl(className, data, secName) {
    const controlWrapper = document.createElement('a');
    controlWrapper.setAttribute('class', className);
    controlWrapper.setAttribute('href', '#carouselExampleControls');
    controlWrapper.setAttribute('role', 'button');
    controlWrapper.setAttribute('data-slide', data);
    sliderBox.append(controlWrapper);

    const control = document.createElement('span');
    control.setAttribute('class', secName);
    control.setAttribute('aria-hidden', 'true');
    controlWrapper.append(control)
}