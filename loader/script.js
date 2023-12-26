let loader = document.querySelector("#loader")

window.addEventListener("load", () => {
    loader.style.display = "none"
})


window.addEventListener('DOMContentLoaded' , () => {
    let status = document.querySelector("#status-success")
    if(navigator.onLine)
    {
        status.textContent = "online"
    }
    else
    {
        status.textContent = "offline"
    }
})