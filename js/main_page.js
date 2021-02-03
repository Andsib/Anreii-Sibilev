const sliderBox = document.createElement('div');
const carouselInner = document.createElement('div');

function createCarusel () {
    sliderBox.setAttribute('class', 'carousel slide sliderBox');
    sliderBox.setAttribute('id', 'carouselExampleControls');
    sliderBox.setAttribute('data-ride', 'carousel');
    main.append(sliderBox);

    carouselInner.setAttribute('class', 'carousel-inner');
    sliderBox.append(carouselInner);

    createInnerSlide('carousel-item active', 'img/slider/1.jpg', 'main');
    createInnerSlide('carousel-item', 'img/slider/2.jpg', 'lesson1');
    createInnerSlide('carousel-item', 'img/slider/3.jpg', 'lesson2');
    createInnerSlide('carousel-item', 'img/slider/4.jpg', 'lesson3');
    createInnerSlide('carousel-item', 'img/slider/5.jpg', 'lesson4');

    createControl('carousel-control-prev', 'prev', 'carousel-control-prev-icon');
    createControl('carousel-control-next', 'next', 'carousel-control-next-icon');
}