
let counter = 1

export default function (container, portfolio) {
    container.current.children[0].style.transition = "none"
    container.current.children[1].style.transition = "none"
    container.current.children[0].style.opacity = "1"
    container.current.children[1].style.opacity = "0"

    if (counter === portfolio.length - 1) {
        container.current.children[0].src =  "/landing/portfolio/" + portfolio[counter - 1] + ".jpg"
        container.current.children[1].src =  "/landing/portfolio/" + portfolio[counter] + ".jpg"
        console.log(portfolio[counter - 1], portfolio[counter])
        counter = 0
    } else if (!counter) {
        container.current.children[0].src =  "/landing/portfolio/" + portfolio[portfolio.length - 1] + ".jpg"
        container.current.children[1].src =  "/landing/portfolio/" + portfolio[0] + ".jpg"
        console.log(portfolio[portfolio.length - 1], portfolio[0])

        counter++

    } else {
        container.current.children[0].src =  "/landing/portfolio/" + portfolio[counter - 1] + ".jpg"
        container.current.children[1].src =  "/landing/portfolio/" + portfolio[counter] + ".jpg"

        console.log(portfolio[counter - 1], portfolio[counter])

        counter++
    }
}