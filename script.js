function toggleTheme(){
    let body = document.getElementsByTagName('body')[0];
    if(body.classList.contains('dark-theme')){
        body.classList.remove('dark-theme')
    }else{
        body.classList.add('dark-theme')
    }
}

const box = document.getElementsByClassName('box')
for (let e of box) {
    e.addEventListener('click', () => pushXorO(e))
}

function pushXorO(e){
    e.textContent = 'x'
}
