const controls = document.querySelectorAll(".control")
const galeries = document.querySelectorAll(".galery")
var counter = 0
controls.forEach (control => {
  control.addEventListener("click", (event) => {
    galeries[counter].classList.add("d-none")
    const isLeft = control.classList.contains("arrow-left")
    if (isLeft) {
      counter -= 1
    } else {
      counter += 1
    }
    if (counter >= galeries.length) {
      counter = 0
    }
    if (counter < 0){
      counter = galeries.length - 1
    }
    galeries[counter].classList.remove("d-none")
  })
})
