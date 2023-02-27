const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button')
const rightSlide = document.querySelector('.main-slide')
const sidebar = document.querySelector('.sidebar')

let visibleSlide = 0;
let visibleSidebar = -300;


const move = (dir) => {
  console.log(visibleSidebar);
  if(dir === "up") {
    rightSlide.style.top = `-${visibleSlide += 100}vh`
    if(visibleSlide > 300) {
      visibleSlide = 0
      rightSlide.style.top = "0"
    }
    if(visibleSidebar === 0) {
      visibleSidebar = -400
      sidebar.style.top = visibleSidebar
    } 

    sidebar.style.top = `${visibleSidebar += 100}vh`
  
  } else if(dir === "down") {
    if(visibleSlide === 0) {
      visibleSlide = 400
      rightSlide.style.top = visibleSlide
    }
    rightSlide.style.top = `-${visibleSlide -= 100}vh`

    if(visibleSidebar === -300) {
      visibleSidebar = 0
      sidebar.style.top = visibleSidebar
    }else {
      visibleSidebar -= 100
      sidebar.style.top = `${visibleSidebar}vh`
    }
  }
}

upBtn.addEventListener('click', () => move('up'))
downBtn.addEventListener('click', () => move('down'))

document.addEventListener('keyup', (e)=>{
  e.key === "ArrowUp" && move('up')
  e.key === "ArrowDown" && move('down')
})