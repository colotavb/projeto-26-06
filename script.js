const perguntas = [
    {
        enunciado: "Você sai da escola e entra na faculdade.Qual o primeiro pensamento?",
        alternativas: [
            { texto: "Isso é assustador!", pontuacao: 1 },
            { texto: "Isso é maravilhoso!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Com a a nova fase da sua vida, você tem que escolher qual materia fazer. Qual você escolhe?",
        alternativas: [
            { texto: "Medicína Veterinária", pontuacao: 3 },
            { texto: "Odontologia", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você prefere cursar uma faculdade tradicional presencial ou uma que ofereça ensino a distância?",
        alternativas: [
            { texto: "Tradicional,claro!", pontuacao: 2 },
            { texto: "A distância, com certeza!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "O que você acha sobre mudar de curso no meio da faculdade?",
        alternativas: [
            { texto: "Esta tudo bem, as vezes escolhemos o curso errado!", pontuacao: 3 },
            { texto: "Não apoio atitudes assim!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você gostaria de fazer faculdade pública ou privada?",
        alternativas: [
            { texto: "Pública, na Federal!", pontuacao: 4 },
            { texto: "Privada, claro!", pontuacao: 3 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta


