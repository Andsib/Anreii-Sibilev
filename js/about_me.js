const aboutMeShort =
    `Я уже более 10 лет преподаю английский язык. Имею огромный опыт индивидуальных и групповых занятий как со взрослыми, так и с детьми.
    Увлекаюсь просмотром аутентичных фильмов и сериалов, просмотр и пророботку которых внедряю в свои уроки. Интересуюсь миром IT и обожаю уроки на эту тему.
    Я убежден, что смогу найти с Вами точки соприкосновения и обучить английскому на высшем уровне.`;

const aboutMeProf =
    `Профессиональное  образование: 2008–2013 – национальный университет им.Мечникова, Одесса, филолог, переводчик, преподаватель английского языка.
    Опыт работы:
•	2013 – 2014: Учитель английского языка в школе “Гармония XXI век”.
•	2014 – 2018: преподаватель английского языка в Bavarian House, Odessa.
•	2014 – 2018: работа по программе «The Retraining Program for former military personnel as part of NATO Ukraine Resettlement Program».
•	2018 – 2020: AutoDoc IT Company, должность Content Editor.
•   2020 - по сегодняшний день: преподаватель английского языка в BeBest.
`;
const aboutMeApproach =
    `Занятия проходят по коммуникативной методике. Это означает, что уроки максимально проходят на английском языке.
выначинаете говорить на английском с первого занятия.
Эта методика позволит Вам говорить на английском языке свободно и грамотно, слышать и понимать его, изучить грамматику и новые слова.
А самое главное - научит мыслить на английском.`;

function createElement(elName, className, name, parent, text) {
    const element = document.createElement(elName);
    element.setAttribute(className, name);
    element.innerHTML = text;
    parent.append(element);
}

function createAboutMe() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'aboutMe_wrapper');
    main.append(wrapper);

    const aboutMeBox = document.createElement('div');
    aboutMeBox.setAttribute('class', 'aboutMe_box');
    wrapper.append(aboutMeBox);

    const aboutMeBoxSecond = document.createElement('div');
    aboutMeBoxSecond.setAttribute('class', 'aboutMe_box');
    wrapper.append(aboutMeBoxSecond);

    const aboutMeBoxThird = document.createElement('div');
    aboutMeBoxThird.setAttribute('class', 'aboutMe_box');
    wrapper.append(aboutMeBoxThird);

    createElement('div', 'class', 'aboutMe_icon aboutMe_icon__me', aboutMeBox, null);
    createElement('div', 'class', 'aboutMe_text aboutMe_text__me', aboutMeBox, aboutMeShort);
    createElement('div', 'class', 'aboutMe_text aboutMe_text__appr', aboutMeBoxSecond, aboutMeApproach);
    createElement('div', 'class', 'aboutMe_icon aboutMe_icon__appr', aboutMeBoxSecond, null);
    createElement('div', 'class', 'aboutMe_icon aboutMe_icon__prof', aboutMeBoxThird, null);
    createElement('div', 'class', 'aboutMe_text aboutMe_text__prof', aboutMeBoxThird, aboutMeProf);

}