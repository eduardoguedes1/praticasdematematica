var nivel=1;
var escolhaFase = 0;
var xMinBotao=150
var larguraBotao =200
var xMaxBotao=xMinBotao+larguraBotao
var yMinBotao1=200
var alturaBotao = 60
var yMaxBotao1=yMinBotao1+alturaBotao

var yMinBotao2 = 280
var yMaxBotao2 = yMinBotao2+alturaBotao

var yMinBotao3 = 120
var yMaxBotao3 = yMinBotao3+alturaBotao

var imagemEducador;
var imagemProgramador;
var imagemFundo;

var tela = 0;

function acaboujogo(){
  background(220);
    textSize(28);
    fill(10);
  text('GAME OVER!!',20,50)
}


function mouseClicked(){
  //FASE1 
  if(tela==3 && nivel==1){
    if(escolhaFase==1 || escolhaFase==2){
      tela=4
    }
    if (escolhaFase == 3){
      nivel = 2;
    }    
  }
  //FASE2
  else{
  if(tela==3 && nivel==2){
    if(escolhaFase==2 || escolhaFase==3){
      tela=4
    }
    if (escolhaFase == 1){
      nivel = 3;
   }    
  }
    
  else{  
  if(tela==3 && nivel==3){
    if(escolhaFase==1 || escolhaFase==3){
      tela=4
    }
    if (escolhaFase == 2){
      nivel = 4;
   }    
  }
    
    else{  
  if(tela==3 && nivel==4){
    if(escolhaFase==2 || escolhaFase==3){
      tela=4
    }
    if (escolhaFase == 1){
      nivel = 5;
     }    
    }
      //FASE5
  else{  
   if(tela==3 && nivel==4){
    if(escolhaFase==2 || escolhaFase==3){
      tela=4
    }
    if (escolhaFase == 1){
      nivel = 5;
     }    
  }    
   // FASE 6 
   else{  
   if(tela==3 && nivel==5){
    if(escolhaFase==1 || escolhaFase==3){
      tela=4
    }
    if (escolhaFase == 2){
      nivel = 6;
    }    
  }
   // FASE 7         
    else{  
   if(tela==3 && nivel==6){
    if(escolhaFase==2 || escolhaFase==3){
      tela=4
    }
    if (escolhaFase == 1){
      nivel = 7;
    }    
   }
   // FASE 8   
     else{  
   if(tela==3 && nivel==7){
    if(escolhaFase==2 || escolhaFase==3){
      tela=4
    }
    if (escolhaFase == 1){
      nivel = 8;
         }    
       }
    // FASE 9
        else{  
   if(tela==3 && nivel==8){
    if(escolhaFase==2 || escolhaFase==3){
      tela=4
    }
    if (escolhaFase == 1){
      nivel = 9;
         }    
       }
    // FASE 10      
      else{  
   if(tela==3 && nivel==9){
    if(escolhaFase==1 || escolhaFase==2){
      tela=4
    }
    if (escolhaFase == 3){
      nivel = 10;
         }    
       }    
      }     
      
          
          
    } 
       
       
       
     }   
              
    }       
                   
   }     
                         
  }  
               
   }         
  }          
 }  
}



function opcaoBotao(xMin, xMax, yMin,yMax,largura,altura,opcao){
    yMax = yMin + altura
    xMax = xMin + largura  
    if (mouseX>xMin && mouseX < xMax && mouseY>yMin &&mouseY<yMax){
    fill(250); 
      escolhaFase=opcao
   
  }
    else{
      noFill();
    }
 
  rect(xMin,yMin,largura, altura,15);
  textSize(26);
  fill(0);
  
  
}


function fase10(){
     background(imagemFundo);
    textSize(45);
    fill(10);
    text('PARABÉNS!!', 120, 100)
  text('Você resolveu todos  os problemas matemáticos. ',30,200,450,400)
  
    
    
  }

function fase9(){
    background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 09',90,60)
    
    text(' 40+30-60+80-50=? ', 90, 140)
  
    escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('20',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('30',240,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('40',370,360)
    
    
  }

function fase8(){
    background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 08',90,60)
    
    text(' 20+30-25-15=? ', 90, 140)
  
    escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('10',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('20',240,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('30',370,360)
    
  }

function fase7(){
    background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 07',90,60)
    
    text(' 20/5+30/10+7X3=? ', 90, 140)
  
    escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('28',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('26',240,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('-25',370,360)
    
  }

function fase6(){
     background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 06',90,60)
    
    text(' 5X5+9X3-8/2=? ', 90, 140)
  
    escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('48',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('44',240,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('42',370,360)
    
    
  }

function fase5(){
     background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 05',90,60)
    
    text(' 3X(-4)X(-4)=? ', 90, 140)
  
    escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('46',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('48',240,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('42',370,360)
    
  }

 function fase4(){
    background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 04',90,60)
    
    text(' (12X3)+((-4)/2)=? ', 90, 140)
  
    escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('34',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('48',240,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('32',370,360)
    
    
  }

 function fase3(){
     background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 03',90,60)
    
    text(' (3X(-1))+(18/3)=? ', 90, 140)
  
    escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('-3',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('3',240,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('6',370,360)
    
    
  }

function fase2(){
    background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 02',90,60)
    
    text(' (2X4)+(6/2)=? ', 90, 140)
  
    escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('11',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('12',240,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('13',370,360)
    
    
  }

function fase1(){
    background(imagemFundo);
    textSize(45);
    fill(10);
    text('PROBLEMA 01',90,60)
    
    text(' (2X3)+(4/2)=? ', 90, 140)
  
  escolhaFase = 0
  opcaoBotao(100,200,320,370,70,50,1)
    textSize(40);
  text('10',110,360)
  
   opcaoBotao(230,330,320,370,70,50,2)
    textSize(40);
  text('9',250,360)
  
   opcaoBotao(360,460,320,370,70,50,3)
    textSize(40);
  text('8',380,360)
  
}

function menuBotao(texto, yMin, yMax, opcao){
  // botao inicial
    if (mouseX>xMinBotao && mouseX < xMaxBotao && mouseY>yMin &&mouseY<yMax){
    fill(250); 
    if(mouseIsPressed){
      tela = opcao;
    }
  }
    else{
      noFill();
    }
 
  rect(xMinBotao,yMin,larguraBotao,alturaBotao,15);
  textSize(26);
  fill(0);
  text(texto, xMinBotao+20, yMin+40); 
  
}

function telaMenu(){
  background(imagemFundo);
  textSize(32);
  fill(10);
  text('PRÁTICAS DE MATEMÁTICA',40,60);
  
 
  menuBotao('JOGAR',yMinBotao3, yMaxBotao3,3)
  menuBotao('INSTRUÇÕES', yMinBotao1, yMaxBotao1,1);  
  menuBotao('CRÉDITOS', yMinBotao2, yMaxBotao2, 2);
}

function telaInstrucoes(){
   background(220);
    fill(10);
    textSize(26);
    noStroke();
    textAlign(LEFT);
    text('Este jogo tem o objetivo fazer com que as crianças desenvolvar  abilidades básicas de matemática.Durante o jogo o usuário irá resolver problemas simples de matemática.Se o usuário acertar o problema,o jogo mostrará um novo problema para ele resolver.',50,50,400,450)
     fill(10)
    text('aperte esc para volta a tela inicial',70,430)
  
}

function telaCreditos(){
      background(230);
  textSize(36);
  fill(10);
  text('créditos',250,80);
  textSize(20);
  text('Cid Lima Costa',250,130);
  text('Eduardo Guedes de Moura',230,310);
  textSize(20);
  text('Função: Educador',250,150);
  text('Função: Programador',250,330);
  textSize(14);
  fill(80);
  text('Graduando de Matemática pela Universidade Federal do Rio Grande do Norte',180,180,290,450);
  text('Estudante da turma 3B de Lógica de Programação da Universidade Federal do Rio Grande do Norte misnistrada pelo professor Orivaldo Santana ',180,350,290,450);
    image(imagemEducador,40,110,80,80)
     image(imagemProgramador,40,280,80,80)
    text('aperte esc para voltar para a tela inicial',160,20)
    
  
  
}

function preload(){
 imagemEducador= loadImage('sid.jpeg')
  imagemProgramador=loadImage('edu.jpeg')
  
}


function setup(){
  
  createCanvas(500,500);
   imagemFundo=loadImage('house_01.jpg')
}

function draw(){
 
  
  if(tela==0){
    telaMenu();
    
  }
  
  if (tela==1){
    telaInstrucoes();
  }
  if (tela==2){
    telaCreditos();
  }
  if(tela==3){
    
    if(nivel==1){fase1();}
    
    if(nivel==2){fase2()}
    
    if(nivel==3){fase3()}
    
    if(nivel==4){fase4()}
    
     if(nivel==5){fase5()}
    
     if(nivel==6){fase6()}
    
     if(nivel==7){fase7()}
    
    if(nivel==8){fase8()}
    
    if(nivel==9){fase9()}
    
    if(nivel==10){fase10()}
    
    
    }
    
    
  
  if(tela==4){
    acaboujogo()
  }
  
  
}
