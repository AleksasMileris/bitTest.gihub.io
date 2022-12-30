const burger = document.querySelector('.burger')
const show = document.querySelector('.gone')


burger.addEventListener('click', open);


function open(event){
    show.classList.toggle('gone')
    event.preventDefault()
}


const cookie = document.querySelector('.press')

const off = document.querySelector('.hide')

cookie.addEventListener('click', byeCookie);

function byeCookie(event) {
    
    off.classList.toggle('off')
    event.preventDefault()


    
    
  
        
        
}