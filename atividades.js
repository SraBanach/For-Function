 
  function contagemRegressiva (){
  
    console.log ("1 - Implemente uma contagem regressiva 10 a 0 usando laços de repetição")
   
  for(cont= 10;cont >= 0;cont--){ 
  
      console.log (cont)
  
  }
  
  }
   
function tabuada (){
  
  console.log(" 2 - Escreva um programa que peça ao usuário para digitar um número e exiba sua tabuada de 1 a 10.")
   
  cont = 0
  
  numeroEscolhido = prompt ("Digite um numero")
   
  for(cont=0;cont<= 10;cont++) { 
  
  console.log (numeroEscolhido, "x" ,cont, "=", numeroEscolhido * cont)
   
  }
  
  }
  
function soma1a100 (){
  console.log ("3- Calcule a soma de todos os numero de 1 a 100 usando laço de repetição")
    
      resp = 0
  
      for(cont = 0;cont<= 100;cont++){ 
  
          resp = resp + cont
  
        console.log (resp)
  
      }
  }
  
    function numerosPares (){
  
    console.log (" 4 - Imprima todos os números pares de 1 a 20 utilizando um laço de repetição ")
   
  for(cont=0;cont<= 20;cont=cont+2) { 
  
  console.log (cont) 
  
  }
  
  }
   
  function fibonacci (){ 
  
  console.log ("5- Escreva um programa que peça ao usuário para digitar um número e exiba a sequência de Fibonacci até esse número.")
   
  ultimo = 1
  
  penultimo = 0
  
  atual = 0
  
  numeroEscolhido=prompt ("digite um numero")
  
  for(cont=0;cont<numeroEscolhido;cont++) {
  
  console.log (atual)
  
  penultimo = ultimo
  
  ultimo = atual 
  
  atual = penultimo + ultimo
  
  }
  
  }




while (true){ 
  numero = prompt("Qual atividade você quer ver?")
  
  if (numero == 0){
  
          break
  
        }
  
      else if (numero == 1){ 
  
      contagemRegressiva ()
  
        break
  
      }
  
        else if (numero == 2){
  
          tabuada()
  
          break
  
        }    
  
          else if (numero == 3){
  
            soma1a100()
  
            break
  
          }
  
            else if (numero == 4){ 
  
            numerosPares ()
  
              break
  
            }
  
            else if (numero == 5){ 
  
            fibonacci ()
  
              break
  
            }
}