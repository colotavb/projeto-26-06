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
        enunciado: "",
        alternativas: [
            { texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.", pontuacao: 2 },
            { texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            { texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.", pontuacao: 1 },
            { texto: "Criar uma imagem utilizando um gerador de imagem de IA.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            { texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.", pontuacao: 1 },
            { texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.", pontuacao: 2 }
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


