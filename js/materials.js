function createLinkBox(materialsWrapper, el) {
    el.setAttribute('class', 'materials_box');
    materialsWrapper.append(el);
}

function createLink(link, className, inText, box, text,) {
    const el = document.createElement('a');
    el.setAttribute('href', link);
    el.setAttribute('class', className);
    el.setAttribute('target', '_blank');
    el.innerText = inText;
    box.append(el);

    const linkText = document.createElement('p');
    linkText.setAttribute('class', 'materials_text');
    linkText.innerText = text;
    box.append(linkText);
}

function createMaterials() {
    const materialsWrapper = document.createElement('div');
    materialsWrapper.setAttribute('class', 'materials_wrapper aboutMe_wrapper');
    main.append(materialsWrapper);

    const materialsBox = document.createElement('div');
    createLinkBox(materialsWrapper, materialsBox);
    createLink('https://andsib.github.io/Hangman/', 'linkBlock hangman', 'HangMan game', materialsBox, 
    'Виселица. Игра, где вы выбираете интересную тему и отгадываете слово.');

    const materialsBox2 = document.createElement('div');
    createLinkBox(materialsWrapper, materialsBox2);
    createLink('https://soap2day.to/', 'linkBlock soap', 'English Films', materialsBox2, 
    'Отличный ресурс для просмотра фильмов на английском.');
}