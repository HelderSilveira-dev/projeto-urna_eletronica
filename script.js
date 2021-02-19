const teclado = document.querySelector('.teclado');
const posicao1 = document.querySelector('#posicao1');
const posicao2 = document.querySelector('#posicao2');

teclado.addEventListener('click',(el)=>{
   let tecla = el.target.innerText;

   if(tecla ==='BRANCO'){
        handleBranco();
   }else if(tecla === 'CORRIGE'){
        handleCorrige()
   }else if(tecla === 'CONFIRMA'){
        handleConfirma()
   }else{
        numeroCandidato(tecla);
   }
})

function numeroCandidato(numero){
    if(posicao1.innerText){
        if(posicao2.innerText){
            alert('Para mudar o candidato, aperte em corrige')
        }else{
            posicao2.innerText = numero; 
        }
    }else{
        posicao1.innerText = numero;
    }
}

function handleBranco(){
    alert("tem certeza que deseja votar em branco?");
}

function handleConfirma(){
    alert("confirma seu voto?");
}

function handleCorrige(){
    if(posicao2.innerText){
        posicao2.innerText = '';
    }else{
        if(posicao1.innerText){
            posicao1.innerText = '';
        }
    }
}