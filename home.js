const hamburger = document.getElementById('hamburger')
const nav = document.querySelector('.navbar-section')
count = 0
hamburger.addEventListener('click',() =>{
    if(count == 0){
        nav.classList += ' nav'
        count = 1
    }else{
        count = 0
        nav.classList = 'navbar-section'
    }
})

