let random = Math.floor(Math.random() * 2)
export function onMouseEnter(event, clicked) {
    if (!clicked) {
        event.currentTarget.children[1].style.borderRadius = '0'
        event.currentTarget.children[1].style.top = '0'
        event.currentTarget.children[2].style.transform = 'translatey(-50%)'
    }
}
export function onMouseLeave(event, clicked) {
    if (!clicked) {
        if (random) {
            event.currentTarget.children[1].style.top = '50%'
            event.currentTarget.children[1].style.borderRadius = '50%'
        } else {
            event.currentTarget.children[1].style.top = '-50%'
            event.currentTarget.children[1].style.borderRadius = '50%'
        }
        event.currentTarget.children[2].style.transform = 'none'
        random = Math.floor(Math.random() * 2)
    }
}