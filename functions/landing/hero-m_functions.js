
let counter = 0

export default function (container, data) {
    container.current.children[0].style.transition = "none"
    container.current.children[1].style.transition = "none"
    container.current.children[0].style.opacity = "1"
    container.current.children[1].style.opacity = "0"

    if (counter === data.length - 1) {
        container.current.children[0].children[0].src = "/landing/hero/" + (counter - 1) + ".jpg"
        container.current.children[1].children[0].src = "/landing/hero/" + counter + ".jpg"
        counter = 0
    } else if (!counter) {
        container.current.children[0].children[0].src = "/landing/hero/" + (data.length - 1) + ".jpg"
        container.current.children[1].children[0].src = "/landing/hero/" + 0 + ".jpg"

        counter++

    } else {
        container.current.children[0].children[0].src = "/landing/hero/" + (counter - 1) + ".jpg"
        container.current.children[1].children[0].src = "/landing/hero/" + counter + ".jpg"


        counter++
    }
}