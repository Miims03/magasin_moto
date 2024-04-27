const logo = document.querySelectorAll('.logo')

// console.log(logo.classList)
let i = 1
let y = 1
const inter = () => {
    
        if(i < 2 && y < 2){
            logo[1].classList.remove(`logoBg${i}`)
            logo[0].classList.remove(`logoBg${y}`)
            i++
            y++
            logo[1].classList.add(`logoBg${i}`)   
            logo[0].classList.add(`logoBg${y}`)     
        }
        if (i == 2 && y == 2) {
            setTimeout(()=>{
                logo[1].classList.remove(`logoBg2`)
                logo[0].classList.remove(`logoBg2`)
            },5000)
            i = 0
            y = 0
        }
}
setInterval(inter,5000)

// for (let i = 0; i < 4; i++) {
//     const element = array[i];
    
// }
