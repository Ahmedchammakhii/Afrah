
let counter = 1

export default function (container, connect) {
    container.current.children[0].style.transition = "none"
    container.current.children[1].style.transition = "none"
    container.current.children[0].style.opacity = "1"
    container.current.children[1].style.opacity = "0"

    if (counter === connect.length - 1) {
        container.current.children[0].src = "/landing/connect/" + connect[counter - 1] + ".jpg"
        container.current.children[1].src = "/landing/connect/" + connect[counter] + ".jpg"
        counter = 0
    } else if (!counter) {
        container.current.children[0].src = "/landing/connect/" + connect[connect.length - 1] + ".jpg"
        container.current.children[1].src = "/landing/connect/" + connect[0] + ".jpg"

        counter++

    } else {
        container.current.children[0].src = "/landing/connect/" + connect[counter - 1] + ".jpg"
        container.current.children[1].src = "/landing/connect/" + connect[counter] + ".jpg"


        counter++
    }
}