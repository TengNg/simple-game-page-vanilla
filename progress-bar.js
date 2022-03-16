const progressBar = document.querySelector('.progress-bar')
const container = document.querySelector('.all-container')

const animateProgressBar = () => {
    let scrollDistance = -container.getBoundingClientRect().top
    let progressBar_width = (scrollDistance / (container.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100
    let width_value = Math.floor(progressBar_width)
    progressBar.style.width = width_value + "%"
    if (width_value <= 2)
        progressBar.style.width = 0 + "%"
    // if(width_value >= 100)
    //     progressBar.style.width = 100 + "%";

    console.log(width_value)
}
window.addEventListener('scroll', animateProgressBar)