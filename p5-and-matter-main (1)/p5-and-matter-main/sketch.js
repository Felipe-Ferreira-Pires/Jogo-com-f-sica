var Motor = Matter.Engine; //Motor [serve para fazer o sistema funcionar]
var Mundo = Matter.World; // Mundo [é basicamente tudo que for colocar na tela]
var Corpos = Matter.Bodies; // Corpos [Ele cria os corpos usados no mundo]
var Corpo = Matter.Body; // Corpo [São os corpos com caracteristicas]
var chao // [Variavel do chão]
var bolinhas=[]
var limite_bolinhas=100

function setup() {
  createCanvas(600,600);

  motor = Motor.create () // [Ele é o motor definitivo]
  mundo = motor.world; // [Ele é o mundo definitivo com nome diferenciado]
  motor.world.gravity.y = 2;
  var opcao_chao={
    isStatic:true // Serve para deixar o chão estatico
  } 
  var opcoes_pedra= {

    restituition:0.05,
    frictionAir:0.0005

  }
  var opcoes_pena= {

    restituition:1,
    frictionAir:0.25

  }
  var opcoes_bola= {
    restitution:1,  // [Serve para definir elasticidade]
    frictionAir: 0.015 // [Serve para definir o ar, ou seja se vai cair rapido ou não]
  }

  var opcoes_tenis= {
    restitution:2,  // [Serve para definir elasticidade]
    frictionAir: 0.015 // [Serve para definir o ar, ou seja se vai cair rapido ou não]
  }
  chao = Corpos.rectangle(300,590,600,20, opcao_chao) // [É a criação de sprites de outro modo]
  plataforma = Corpos.rectangle(10,350,200,20, opcao_chao)
  plataforma2 = Corpos.rectangle(500,150,200,20, opcao_chao)
  pena = Corpos.circle(250,10,10, opcoes_pena)
  pedra = Corpos.circle(250,5,10, opcoes_pedra)
  tenis= Corpos.circle(250,25,10, opcoes_tenis)
  Mundo.add(mundo, chao) // [Serve para adcionar um "Sprite [corpo]" sob o mundo]
  bola= Corpos.circle(250,20,10, opcoes_bola) // [É a criação de um sprite de outro modo [dessa vez usamos o body para definir a caracteristica [bola]]]
  Mundo.add(mundo, bola) // [Serve para adcionar um "Sprite [corpo]" sob o mundo]
  Mundo.add(mundo, plataforma)
  Mundo.add(mundo, plataforma2)
  Mundo.add(mundo, pena)
  Mundo.add(mundo, pedra)
  Mundo.add(mundo, tenis)
  rectMode(CENTER) // [Serve para definir as coisas sempre puxando para o centro]
  ellipseMode(RADIUS)
  ellipseMode(RADIUS)  // [Ele muda para gerar o circulo em grau ao inves da forma inglesa [radiano]]
  

  for (var i=0;i<limite_bolinhas;i++){
    criar_bolinhas () 
  }
}

function draw() {
  background (0) //[ background comun, 0 = preto]
  Motor.update(motor); // [Para sempre mudar o motor quando quiser]
  fill("brown") // [Cor]
  rect(chao.position.x, chao.position.y,600,20) // [Serve para criar o corpo em uma posição, sempre deve especificar]
  rect(plataforma.position.x,plataforma.position.y,200 ,20)
  rect(plataforma2.position.x,plataforma2.position.y,200,20)
  fill("red")// [Cor]
  ellipse(bola.position.x, bola.position.y,25) //[Serve para criar o corpo em uma posição, sempre deve especificar]
  fill("white")
  ellipse(pena.position.x, pena.position.y,10)
  fill("grey")
  ellipse(pedra.position.x, pedra.position.y,10)
  fill("green")
  ellipse(tenis.position.x, tenis.position.y,10)

  for (var j=0;j<bolinhas.length;j++){
    console.log(j)
    var bolinha=bolinhas[j]
    fill(random(0,255),random(0,255),random(0,255))
    ellipse(bolinha.position.x, bolinha.position.y, bolinha.circleRadius)
    
  }
  if (keyIsDown(LEFT_ARROW)) {
  
  Corpo.applyForce(bola,{x:bola.position.x,y:bola.position.y},{x:-0.0005,y:0})
  

  }
  if (keyIsDown(RIGHT_ARROW)) {
  
  Corpo.applyForce(bola,{x:bola.position.x,y:bola.position.y},{x:0.0005,y:0})
  }

  if (keyIsDown (UP_ARROW)){

  Corpo.applyForce(bola,{x:bola.position.x,y:bola.position.y},{x:0,y:-0.0005})
  }

  if (keyIsDown (DOWN_ARROW)){

  Corpo.applyForce(bola,{x:bola.position.x,y:bola.position.y},{x:0,y:0.0005})
  }
}
 

function criar_bolinhas () {
  var opcao_bolinha= {

    frictionAir:random(0.5,2),
    restitution:random(2,0.10)

  }
  var bolinha= Corpos.circle(random(1,600),random(1,20),random(1,20),opcao_bolinha) 
  Mundo.add(mundo, bolinha)
  bolinhas.push(bolinha)
  
}