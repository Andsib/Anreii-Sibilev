function createFeedbackBox(feedbackWrapper, el, className) {
    el.setAttribute('class', className);
    feedbackWrapper.append(el);
}

function createFeedbackInner(box, student, studentText) {
    const feedbackName = document.createElement('p');
    feedbackName.setAttribute('class', 'feedback_name');
    feedbackName.innerText = student;
    box.append(feedbackName);

    const feedbacText = document.createElement('p');
    feedbacText.setAttribute('class', 'feedback_text');
    feedbacText.innerText = studentText;
    box.append(feedbacText);
}

function createFeedback() {
    const feedbackWrapper = document.createElement('div');
    feedbackWrapper.setAttribute('class', 'feedback_wrapper aboutMe_wrapper');
    main.append(feedbackWrapper);

    const title = document.createElement('p');
    title.setAttribute('class', 'feedback_title');
    title.innerText = 'Отзывы моих студентов';
    feedbackWrapper.append(title);

    const feedbackBoard = document.createElement('div');
    feedbackBoard.setAttribute('class', 'feedback_board');
    feedbackWrapper.append(feedbackBoard);

    const feedbackBox = document.createElement('div');
    createFeedbackBox(feedbackBoard, feedbackBox, 'feedback_box iana');

    const feedbackBox2 = document.createElement('div');
    createFeedbackBox(feedbackBoard, feedbackBox2, 'feedback_box karina');

    const feedbackBox3 = document.createElement('div');
    createFeedbackBox(feedbackBoard, feedbackBox3, 'feedback_box olga');

    const feedbackBox4 = document.createElement('div');
    createFeedbackBox(feedbackBoard, feedbackBox4, 'feedback_box sonya');
}