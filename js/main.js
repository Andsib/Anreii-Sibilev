const main = document.querySelector('.main');
const mainPage = document.getElementById('mainPage');
const aboutMe = document.getElementById('aboutMe');
const aboutMeFooter = document.getElementById('aboutMeFooter');
const condition = document.getElementById('condition');
const conditionFooter = document.getElementById('conditionFooter');
const materials = document.getElementById('materials');
const materialsFooter = document.getElementById('materialsFooter');
const feedback = document.getElementById('feedback');
const feedbackFooter = document.getElementById('feedbackFooter');

createCarusel();

mainPage.addEventListener('click', function () {
    location.reload();
})

aboutMe.addEventListener('click', function () {
    main.innerHTML = '';
    createAboutMe();
})

aboutMeFooter.addEventListener('click', function () {
    main.innerHTML = '';
    createAboutMe();
})

condition.addEventListener('click', function () {
    main.innerHTML = '';
    createConditions();
})

conditionFooter.addEventListener('click', function () {
    main.innerHTML = '';
    createConditions();
})

materials.addEventListener('click', function () {
    main.innerHTML = '';
    createMaterials();
})

materialsFooter.addEventListener('click', function () {
    main.innerHTML = '';
    createMaterials();
})

feedback.addEventListener('click', function () {
    main.innerHTML = '';
    createFeedback();
})

feedbackFooter.addEventListener('click', function () {
    main.innerHTML = '';
    createFeedback();
})