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
    aboutMe.classList.add('list_item_active');
    condition.classList.remove('list_item_active');
    materials.classList.remove('list_item_active');
    feedback.classList.remove('list_item_active');
})

aboutMeFooter.addEventListener('click', function () {
    main.innerHTML = '';
    createAboutMe();
    aboutMe.classList.add('list_item_active');
    condition.classList.remove('list_item_active');
    materials.classList.remove('list_item_active');
    feedback.classList.remove('list_item_active');
})

condition.addEventListener('click', function () {
    main.innerHTML = '';
    createConditions();
    condition.classList.add('list_item_active');
    aboutMe.classList.remove('list_item_active');
    materials.classList.remove('list_item_active');
    feedback.classList.remove('list_item_active');
})

conditionFooter.addEventListener('click', function () {
    main.innerHTML = '';
    createConditions();
    condition.classList.add('list_item_active');
    aboutMe.classList.remove('list_item_active');
    materials.classList.remove('list_item_active');
    feedback.classList.remove('list_item_active');
})

materials.addEventListener('click', function () {
    main.innerHTML = '';
    createMaterials();
    materials.classList.add('list_item_active');
    aboutMe.classList.remove('list_item_active');
    condition.classList.remove('list_item_active');
    feedback.classList.remove('list_item_active');
})

materialsFooter.addEventListener('click', function () {
    main.innerHTML = '';
    createMaterials();
    materials.classList.add('list_item_active');
    aboutMe.classList.remove('list_item_active');
    condition.classList.remove('list_item_active');
    feedback.classList.remove('list_item_active');
})

feedback.addEventListener('click', function () {
    main.innerHTML = '';
    createFeedback();
    feedback.classList.add('list_item_active');
    aboutMe.classList.remove('list_item_active');
    condition.classList.remove('list_item_active');
    materials.classList.remove('list_item_active');
})

feedbackFooter.addEventListener('click', function () {
    main.innerHTML = '';
    createFeedback();
    feedback.classList.add('list_item_active');
    aboutMe.classList.remove('list_item_active');
    condition.classList.remove('list_item_active');
    materials.classList.remove('list_item_active');
})