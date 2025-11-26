// script.js
const filmes = {
  Romance: [
    { nome: '10 Coisas que Eu Odeio em Você', imagem: 'imagens/10 Coisas que Eu Odeio em Você.jpg', classificacao: '10', ano: 1999, duracao: '1h 37min', sinopse: 'Cameron deseja namorar Bianca, mas ela só pode sair se sua irmã mais velha, Kat — que detesta namoros — também tiver um encontro. Para resolver o problema, ele convence Patrick, o “bad boy” da escola, a tentar conquistar Kat. O que começa como um acordo acaba virando um romance real e inesperado.', trailer: 'tD76OqlJRwQ' },
    { nome: 'Diário de uma Paixão', imagem: 'imagens/Diário de uma Paixão.jpg', classificacao: '10', ano: 2004, duracao: '2h 03min', sinopse: 'Na década de 1940, Allie e Noah vivem um amor proibido pelas diferenças sociais. Apesar da forte paixão, o destino os separa, até que anos depois eles se reencontram e precisam enfrentar velhos sentimentos e escolhas difíceis. Uma história intensa sobre amor verdadeiro e memória.', trailer: '9FRllA0YP3Y' },
    { nome: 'Questão de Tempo', imagem: 'imagens/Questão de Tempo.jpg', classificacao: '12', ano: 2013, duracao: '2h 03min', sinopse: 'Aos 21 anos, Tim descobre que os homens de sua família podem viajar no tempo. Ele decide usar esse dom para melhorar sua vida amorosa e conquistar Mary. Mas logo percebe que nem mesmo o poder de voltar no tempo impede perdas, desafios e os momentos inevitáveis da vida.', trailer: 'yAomxDUmiNM&list=RDyAomxDUmiNM&start_radio=1' },
    { nome: 'Como Perder um Homem em 10 Dias.jpg', imagem: 'imagens/Como Perder um Homem em 10 Dias.jpg', classificacao: '14', ano: 2003, duracao: '1h 56min', sinopse: 'Andie, jornalista, escreve uma matéria sobre “como afastar um homem em 10 dias”. Ao mesmo tempo, Ben aposta que consegue fazer qualquer mulher se apaixonar por ele no mesmo período. Sem saber das intenções um do outro, eles entram em um jogo hilário que acaba despertando sentimentos reais.', trailer: 'linkfilme4' },
    { nome: 'Orgulho e Preconceito.jpg', imagem: 'imagens/Orgulho e Preconceito.jpg', classificacao: '16', ano: 2005, duracao: '2h 09min', sinopse: 'Elizabeth Bennet é inteligente e determinada, enquanto Mr. Darcy é reservado e orgulhoso. Quando seus mundos se cruzam, mal-entendidos, diferenças sociais e julgamentos precipitados colocam o romance em risco. Uma história clássica sobre amadurecimento, orgulho, perdão e amor.', trailer: 'linkfilme5' }
  ],
  Animação: [
    { nome: 'Filme 6', imagem: 'imagem6.jpg', classificacao: 'Livre', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 6', trailer: 'linkfilme6' },
    { nome: 'Filme 7', imagem: 'imagem7.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 7', trailer: 'linkfilme7' },
    { nome: 'Filme 8', imagem: 'imagem8.jpg', classificacao: '12', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 8', trailer: 'linkfilme8' },
    { nome: 'Filme 9', imagem: 'imagem9.jpg', classificacao: '14', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 9', trailer: 'linkfilme9' },
    { nome: 'Filme 10', imagem: 'imagem10.jpg', classificacao: '16', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 10', trailer: 'linkfilme10' }
  ],
  Comédia: [
    { nome: 'Filme 11', imagem: 'imagem11.jpg', classificacao: 'Livre', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 11', trailer: 'linkfilme11' },
    { nome: 'Filme 12', imagem: 'imagem12.jpg', classificacao: '10', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 12', trailer: 'linkfilme12' },
    { nome: 'Filme 13', imagem: 'imagem13.jpg', classificacao: '12', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 13', trailer: 'linkfilme13' },
    { nome: 'Filme 14', imagem: 'imagem14.jpg', classificacao: '14', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 14', trailer: 'linkfilme14' },
    { nome: 'Filme 15', imagem: 'imagem15.jpg', classificacao: '16', ano: 0, duracao: '0', sinopse: 'Sinopse do Filme 15', trailer: 'linkfilme15' }
  ]
};

let idadeUsuario = 0;

function inserirNome() {
  let nomeUsuario = prompt("Qual o seu nome?");
  let elemento = document.querySelector("#nome-usuario");
  elemento.textContent = `Olá, ${nomeUsuario}! Espero te ajudar a escolher um filme!`;
}

function validarIdade() {
  const input = document.getElementById('idade');
  idadeUsuario = parseInt(input.value);
  if (!isNaN(idadeUsuario) && idadeUsuario >= 0) {
    document.getElementById('menu-generos').classList.remove('oculto');
  } else {
    alert('Por favor, digite uma idade válida.');
  }
}

function mostrarFilmes(genero) {
  const container = document.getElementById('conteudo-filmes');
  container.innerHTML = '';

  filmes[genero].forEach(filme => {
    if (verificarClassificacao(filme.classificacao)) {
      const div = document.createElement('div');
      div.classList.add('filme');

      div.innerHTML = `
        <h2>${filme.nome}</h2>
        <img src="${filme.imagem}" alt="${filme.nome}" />
        <p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
        <p><strong>Ano:</strong> ${filme.ano}</p>
       <p><strong>Duração:</strong> ${filme.duracao}</p>
       <p><strong>Sinopse:</strong> ${filme.sinopse}</p>

       <iframe 
        src="https://www.youtube.com/embed/${filme.trailer}"
         allowfullscreen>
       </iframe>
`;
      container.appendChild(div);
    }
  });
}

function verificarClassificacao(classificacao) {
  if (classificacao === 'Livre') return true;
  return idadeUsuario >= parseInt(classificacao);
}

inserirNome();
