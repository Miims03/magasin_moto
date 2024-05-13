// const logo = document.querySelectorAll('.logo')

// // console.log(logo.classList)
// let i = 1
// let y = 1
// const inter = () => {

//     if (i < 2 && y < 2) {
//         logo[1].classList.remove(`logoBg${i}`)
//         logo[0].classList.remove(`logoBg${y}`)
//         i++
//         y++
//         logo[1].classList.add(`logoBg${i}`)
//         logo[0].classList.add(`logoBg${y}`)
//     }
//     if (i == 2 && y == 2) {
//         setTimeout(() => {
//             logo[1].classList.remove(`logoBg2`)
//             logo[0].classList.remove(`logoBg2`)
//         }, 5000)
//         i = 0
//         y = 0
//     }
// }
// setInterval(inter, 5000)

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 0
    const pages = document.querySelectorAll('.cata')
    const btnNext = document.querySelector(".btnNext")
    const btnPaNext = document.querySelector(".btnPaNext")
    const totalPages = pages.length

    pages[currentPage].classList.add('active')
    console.log(pages[currentPage])

    btnNext.addEventListener('click', () => {
        pages[currentPage].classList.remove('active')
        currentPage = (currentPage + 1) % totalPages
        pages[currentPage].classList.add('active')
    })

    btnPaNext.addEventListener('click', () => {
        pages[currentPage].classList.remove('active')
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        pages[currentPage].classList.add('active')
    })
})

    
    // window.location.reload() 


// const ref = document.querySelector('.ref')
// btnNext.addEventListener('click', function(event) {
//     event.preventDefault(); // Empêche le comportement par défaut du lien (redirection)
//     location.reload(); // Recharge la page
// })
