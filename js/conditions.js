const conditionalsStartText = `В данном разделе я расскажу как узнать свой приблезительный уровень, связаться со мной и об условиях обучения.`;
const conditionIntroText = `Перед тем как связаться - обязательно ознакомтесь с ценами и условиями ниже.`;
const mainCourseText = `1) Общий английский: 300 грн/час.`;
const mainCourseС1Text = `2) Общий английский С1: 350 грн/час.`;
const znoText = `3) Подготовка к ЗНО: 400 грн/час.`;
const mainCourseGrText = `1) Общий английский: 500 грн/час.`;
const mainCourseС1GrText = `2) Общий английский С1: 600 грн/час.`;
const znoGrText = `3) Подготовка к ЗНО: 600 грн/час.`;
const conditionText1 = `1) Занятия осуществляються по заранее установленному графику.`
const conditionText2 = `2) Материал выдается студенту в электронном виде.`;
const conditionText3 = `3) Оплата за азнятия производится на неделю вперед на счёт банковской карты.`;
const conditionText4 = `4) При отмене или переносе занятия студентом менее чем за 8 часов - стоимость занятия не возвращается.`;
const conditionText5 = `5) При отмене занятия преподавателем менее чем за 8 часов - стоимость следующего занятия 50% от полной цены.`;
const conditionText6 = `6) Перенос занятий осуществляется за 8 часов на удобное время для студента и преподавателя.`;
const conditionCall = `Если Вы согласны на условия, Вы можете связаться со мной по тел. +380-97-73-32-145 (telegram, viber),
электронной почте (andsib90@gmail.com) или пишите в инстаграм, там я подробно отвечу Вам на все вопросы. &#9786`;
const conditionCall2 = `Для того чтобы узнать Ваш уровень, мы проводим с Вами ознакомитльную встречу (20 мин). Мы узнаем Ваш уровень и подбирём нужную для Вас программу обучения.`;

function createConditionsEl(el,attr, attrName, text, wrap) {
    const element = document.createElement(el);
    element.setAttribute(attr, attrName);
    element.innerHTML = text;
    wrap.append(element)
}

function createConditions() {
    const condittions = document.createElement('div');
    condittions.setAttribute('class', 'conditions_wrap aboutMe_wrapper');
    main.append(condittions);

    const condittionsContainer = document.createElement('div');
    condittionsContainer.setAttribute('class', 'condittionsContainer');
    condittions.append(condittionsContainer);

    createConditionsEl('p', 'class', 'conditionals', conditionalsStartText, condittionsContainer);
    createConditionsEl('p', 'class', 'conditionals', conditionCall2, condittionsContainer);
    createConditionsEl('p', 'class', 'conditionals', conditionIntroText, condittionsContainer);

    const pricesInd = document.createElement('ul');
    pricesInd.setAttribute('class', 'conditions_prices');
    pricesInd.innerHTML = 'Индивидуальные занятия';
    condittionsContainer.append(pricesInd);

    createConditionsEl('li', 'class', 'conditions_prices_text', mainCourseText, pricesInd);
    createConditionsEl('li', 'class', 'conditions_prices_text', mainCourseС1Text, pricesInd);
    createConditionsEl('li', 'class', 'conditions_prices_text', znoText, pricesInd);

    const pricesGroup = document.createElement('ul');
    pricesGroup.setAttribute('class', 'conditions_prices');
    pricesGroup.innerHTML = 'Групповые занятия (2-5 чел.)';
    condittionsContainer.append(pricesGroup);

    createConditionsEl('li', 'class', 'conditions_prices_text', mainCourseGrText, pricesGroup);
    createConditionsEl('li', 'class', 'conditions_prices_text', mainCourseС1GrText, pricesGroup);
    createConditionsEl('li', 'class', 'conditions_prices_text', znoGrText, pricesGroup);

    const condition = document.createElement('ul');
    condition.setAttribute('class', 'conditionList');
    condittionsContainer.append(condition);

    createConditionsEl('li', 'class', 'conditions', 'Условия', condition);
    createConditionsEl('li', 'class', 'conditions', conditionText1, condition);
    createConditionsEl('li', 'class', 'conditions', conditionText2, condition);
    createConditionsEl('li', 'class', 'conditions', conditionText3, condition);
    createConditionsEl('li', 'class', 'conditions', conditionText4, condition);
    createConditionsEl('li', 'class', 'conditions', conditionText5, condition);
    createConditionsEl('li', 'class', 'conditions', conditionText6, condition);

    createConditionsEl('p', 'class', 'conditions_call', conditionCall, condittionsContainer);
}