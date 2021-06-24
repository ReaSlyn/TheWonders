const menu_element = document.querySelectorAll(".title-div")
const quotidien = document.querySelector(".quotidien")
const duo = document.querySelector(".duo")
const hebdo = document.querySelector(".hebdo")

menu_element.forEach(element => {
    element.addEventListener("click", (e) => {

        menu_element.forEach(element => {
            if(element.classList.contains("selected")) {

                element.classList.toggle("selected")
            }
        })

        element.classList.toggle("selected")

        if (element.outerText.toLowerCase() === "quotidien") {
            quotidien.classList.remove("hidden")
            duo.classList.add("hidden")
            hebdo.classList.add("hidden")
        }
        if (element.outerText.toLowerCase() === "duo") {
            duo.classList.remove("hidden")
            quotidien.classList.add("hidden")
            hebdo.classList.add("hidden")
        }

        if (element.outerText.toLowerCase() === "hebdo") {
            hebdo.classList.remove("hidden")

            quotidien.classList.add("hidden")
            duo.classList.add("hidden")
        }
    })
});