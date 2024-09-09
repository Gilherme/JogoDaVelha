function toggleTheme(){
    let body = document.getElementsByTagName('body')[0];
    if(body.classList.contains('dark-theme')){
        body.classList.remove('dark-theme')
    }else{
        body.classList.add('dark-theme')
    }
}