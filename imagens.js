// imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

// sons
let somTrilha;
let somPonto;
let somColisao;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somTrilha = loadSound("trilha.mp3")
  somPonto = loadSound("pontos.wav")
  somColisao = loadSound("colidiu.mp3")
}