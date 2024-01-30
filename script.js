document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".menu").addEventListener("click",()=>(
        document.querySelector(".nav-bar").classList.add("active")
    ))
    document.querySelector(".close").addEventListener("click",()=>(
        document.querySelector(".nav-bar").classList.remove("active")
    ))
    document.querySelectorAll(".element").forEach((element) =>{
        element.addEventListener("click",()=>(
            document.querySelector(".nav-bar").classList.remove("active")
        ))
    })

    document.querySelectorAll(".element").forEach((element, index) => {
        element.addEventListener("click", () => {
            if (index === 0) {
                window.scrollTo(0, 0);
            } else if (index === 1) {
                window.scrollTo(0, window.innerHeight)
            } else if (index === 2) {
                window.scrollTo(0, window.innerHeight * 2)
            } else if (index === 3) {
                window.scrollTo(0, window.innerHeight * 3)
            }
        })
    })

});