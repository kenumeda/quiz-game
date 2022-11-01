const quiz = [
    {
        question: 'Which country is the best to visit during december?',
        answer: [ 
        'Austalia',
        'Thailand',
        'Japan',
        'America',
    ],
    correct: 'Thailand'
    },{
        question: 'Best ps2 game?',
        answer: [ 
        'Kingdom hearts 2',
        'Mario',
        'Go Kart',
        'Transformers',
        ],  
        correct: 'Kingdom hearts 2'
    },{
        question: 'What is the best Japanese food',
        answer: [ 
        'Sushi',
        'Ramen',
        'Fried Rice',
        'Curry',
        ],
        correct: 'Sushi'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button')



const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    // let buttonLength = $button.length;
    while(buttonIndex < $button.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent){
        window.alert('correct');
    }else{
        window.alert('wrong');
        }

    quizIndex++; 

    if(quizIndex < quizLength){
    //if there are any question
    setupQuiz();
    }else{
    //if there are no more questions
    window.alert('finish! Your final scrore is' + score + '/' + quizLength);
    }   



};

let handlerIndex = 0;
const buttonLength = $button.length;
while (handlerIndex < buttonLength) {   
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}


