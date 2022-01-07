const themeDots = document.getElementsByClassName('themeDots')
const scrollBtn = document.querySelector('.scrollUpBtn')
const navId = document.querySelector('.navi-toggle')
const allLinks = document.querySelectorAll('.menuLinks')

console.log(allLinks)

window.onscroll = function() {showScrollBtn()}
scrollBtn.addEventListener('click', scrollToTop)

// BC 'allLinks' is a nodelist, needed to use Array.from to be able to loop through it
Array.from(allLinks).forEach(closeNavigation)

function closeNavigation(element){
    element.addEventListener('click', () => {
        document.getElementById("navi-toggle").checked = false;
    })
}

for(let i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('themePick').href='css/style.css'
    }
    if(mode == 'red'){
        document.getElementById('themePick').href='css/red.css'
    }
    if(mode == 'dark'){
        document.getElementById('themePick').href='css/dark.css'
    }
}

function showScrollBtn() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = 'block'
    }else{
        scrollBtn.style.display = 'none'
    }
}

function scrollToTop() {
    document.body.scrollTo({top: 0, behavior: 'smooth'})
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'})
}