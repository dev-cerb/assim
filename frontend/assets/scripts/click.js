const escondido1 = document.querySelector('.hidden:nth-child(1)');
const escondido2 = document.querySelector('.hidden:nth-child(2)');
const clique = document.querySelector('.click');

clique.addEventListener('click', function(e){
  if(escondido1.style.display === 'block' && escondido2.style.display === 'block'){
    escondido1.style.display = 'none';
    escondido2.style.display = 'none';
  }else{
    escondido1.style.display = 'block';
    escondido2.style.display = 'block';
  }
});

