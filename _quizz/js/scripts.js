// Declaração de variáveis
const question = document.querySelector("#question");
const answerBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d", "e"];
let points = 0;
let actualQuestion = 0;

// Perguntas

const questions = [
    {    // Pergunta 01
        "question":"Em que ano Tadej Pogačar conquistou sua primeira vitória no Tour de France?",
        "answers": [
            {
                "answer": "2018",
                "correct": false
            },
            {
                "answer": "2019",
                "correct": false
            },
            {
                "answer": "2020",
                "correct": true
            },
            {
                "answer": "2021",
                "correct": false
            },
            {
                "answer": "2022",
                "correct": false
            },
        ]
    },
    {    // Pergunta 02
        "question":"Qual equipe de ciclismo Tadej Pogačar representa atualmente (até 2024)?",
        "answers": [
            {
                "answer": "Jumbo-Visma",
                "correct": false
            },
            {
                "answer": "Ineos Grenadiers",
                "correct": false
            },
            {
                "answer": "Quick-Step Alpha Vinyl Team",
                "correct": false
            },
            {
                "answer": "Movistar Team",
                "correct": false
            },
            {
                "answer": "UAE Team Emirates",
                "correct": true
            },
        ]
    },
    {   // Pergunta 03
        "question":"Quantas vezes Tadej Pogačar venceu o Tour de France (até 2024)?",
        "answers": [
            {
                "answer": "1 vez",
                "correct": false
            },
            {
                "answer": "2 vezes",
                "correct": false
            },
            {
                "answer": "3 vezes",
                "correct": true
            },
            {
                "answer": "4 vezes",
                "correct": false
            },
            {
                "answer": "5 vezes",
                "correct": false
            },
        ]
    },
    {   // Pergunta 04
        "question":"Em que país Tadej Pogačar nasceu?",
        "answers": [
            {
                "answer": "Eslovênia",
                "correct": true
            },
            {
                "answer": "Eslováquia",
                "correct": false
            },
            {
                "answer": "Croácia",
                "correct": false
            },
            {
                "answer": "Sérvia",
                "correct": false
            },
            {
                "answer": "Áustria",
                "correct": false
            },
        ]
    },
    {   // Pergunta 05
        "question":"Além do Tour, qual outra grande corrida por etapas Tadej Pogačar venceu em 2021?",
        "answers": [
            {
                "answer": "Giro d'Italia",
                "correct": false
            },
            {
                "answer": "La Vuelta a España",
                "correct": false
            },
            {
                "answer": "Tirreno-Adriático",
                "correct": true
            },
            {
                "answer": "Critérium du Dauphiné",
                "correct": false
            },
            {
                "answer": "Volta à Suíça",
                "correct": false
            },
        ]
    },
    {   // Pergunta 06
        "question":"Qual foi a primeira grande vitória de Tadej Pogačar em uma corrida de um dia?",
        "answers": [
            {
                "answer": "Paris-Roubaix",
                "correct": false
            },
            {
                "answer": "Liège-Bastogne-Liège",
                "correct": true
            },
            {
                "answer": "Giro di Lombardia",
                "correct": false
            },
            {
                "answer": "Amstel Gold Race",
                "correct": false
            },
            {
                "answer": "Milão-Sanremo",
                "correct": false
            },
        ]
    },
    {   // Pergunta 07
        "question":"Quantas medalhas olímpicas Tadej Pogačar conquistou até os Jogos de Tóquio 2024?",
        "answers": [
            {
                "answer": "Nenhuma",
                "correct": false
            },
            {
                "answer": "1 medalha de ouro",
                "correct": false
            },
            {
                "answer": "1 medalha de bronze",
                "correct": true
            },
            {
                "answer": "1 medalha de prata",
                "correct": false
            },
            {
                "answer": "2 medalhas",
                "correct": false
            },
        ]
    },
    {   // Pergunta 08
        "question":"Quantas etapas Tadej Pogačar venceu no Tour de France 2021?",
        "answers": [
            {
                "answer": "1 etapa",
                "correct": false
            },
            {
                "answer": "2 etapas",
                "correct": false
            },
            {
                "answer": "3 etapas",
                "correct": false
            },
            {
                "answer": "4 etapas",
                "correct": true
            },
            {
                "answer": "5 etapas",
                "correct": false
            },
        ]
    },
    {   // Pergunta 09
        "question":"Em 2022, Tadej Pogačar ficou em segundo lugar no Tour de France. Quem foi o vencedor?",
        "answers": [
            {
                "answer": "Primož Roglič",
                "correct": false
            },
            {
                "answer": "Jonas Vingegaard",
                "correct": true
            },
            {
                "answer": "Geraint Thomas",
                "correct": false
            },
            {
                "answer": "Egan Bernal",
                "correct": false
            },
            {
                "answer": "Wout van Aert",
                "correct": false
            },
        ]
    },
    {   // Pergunta 10
        "question":"Em que ano Tadej Pogačar se tornou profissional no ciclismo?",
        "answers": [
            {
                "answer": "2015",
                "correct": false
            },
            {
                "answer": "2016",
                "correct": false
            },
            {
                "answer": "2018",
                "correct": false
            },
            {
                "answer": "2019",
                "correct": true
            },
            {
                "answer": "2020",
                "correct": false
            },
        ]
    },
    

]

// Substituição do quizz para a primeira pergunta

function init() { // Cria a primeira pergunta
    console.log("Iniciou!");
    createQuestion(0);
}

function createQuestion(i) { // Cria uma pergunta
    // Limpar a questão anterior
    const oldButtons = answerBox.querySelectorAll("button");
    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    // Alterar o texo da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Insere as alternativas
    questions[i].answers.forEach(function(answer, i){
        
        // Cria o template do botão do quizz
        const anserTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = anserTemplate.querySelector(".btn-letter");
        const answerText = anserTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer["answer"];

        anserTemplate.setAttribute("correct-answer", answer["correct"]);

        // Remover hide e tamplate class
        anserTemplate.classList.remove("hide");
        anserTemplate.classList.remove("hianswer-templatede");

        // Inserir as alternativas na tela
        answerBox.appendChild(anserTemplate);

        // Inserir um evendo de clik no botão
        anserTemplate.addEventListener("click", function() {
            checkAnswer(this)
        });
        anserTemplate.addEventListener("touch", function() {
            checkAnswer(this)
        });

    });

    // Incrementar o número da questão
    actualQuestion ++;
}

function checkAnswer(btn) { // Verifica resposta do usuário
    
    // Selecionar todos os botões
    const buttons = answerBox.querySelectorAll("button");

    // Verifica se a resposta esta correta e adiciona classes nos botões
    buttons.forEach(function(button) {
        if(button.getAttribute("correct-answer") === "true") {
            button.classList.add("correct-answer");

            if(btn === button) {
                // Incremento dos pontos
                points ++;
            }

        } else {
            button.classList.add("wrong-answer")
        }
    });   
    
    nextQuestion();
}

function nextQuestion() { // Exibe a próxima pergunta do quizz

    // Timer para usuário ver as respostas
    setTimeout(function() {
        // Verifica se ainda há perguntas
        if (actualQuestion >= questions.length) {
            // Apresenta a mensagem de sucesso
            showSuccessmessage();
            return;
        }

        createQuestion(actualQuestion)
    }, 2000);
}

function showSuccessmessage() { //Exibe a tela final

    hideOrShowQuizz();

    // Trocar dados da tela de sucesso

    // Calcular o score
    const score = ((points / questions.length) * 100).toFixed(2);
 
    const displayScore = document.querySelector("#display-score span");

    displayScore.textContent = score.toString();

    const correctAnswer = document.querySelector("#correct-answer");
    correctAnswer.textContent = points;

    const quantidadeQuestions = document.querySelector("#questions-qty")
    quantidadeQuestions.textContent = questions.length;

}

function hideOrShowQuizz() { // Mostra ou exconde o score
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

// Reinicar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {

    // Zerar o jogo
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();
});


init();