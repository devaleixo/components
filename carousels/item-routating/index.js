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

// For stimulus.js

// export default class extends Controller {
//   static targets = ["gallery", "button"]
//    static values = {
//     interval: { type: Number, default: 0 },

//   }
//   connect() {
//   }

//   nextSlide() {
//     this.galleryTargets[this.intervalValue].classList.add("d-none")
//     const isLeft = event.currentTarget.classList.contains("arrow-left")
//     if (isLeft) {
//       this.intervalValue -= 1
//     } else {
//       this.intervalValue += 1
//     }
//     if (this.intervalValue >= this.galleryTargets.length) {
//       this.intervalValue = 0
//     }
//     if (this.intervalValue < 0){
//       this.intervalValue = this.galleryTargets.length - 1
//     }
//     this.galleryTargets[this.intervalValue].classList.remove("d-none")
//   }
// }
