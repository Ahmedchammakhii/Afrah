export let threeIsActive;
export function navbarHandler(isOpen, dark, pathname) {
    if (!isOpen) {
        if (innerWidth > 1200) {

            if (window.scrollY >= (innerHeight - (innerHeight * 0.08)) && document.querySelector('.header_nav').style.background === "transparent") {
                document.querySelector('.header_nav').style.zIndex = "100000"
                setTimeout(() => {
                    document.querySelector('.header_nav').style.background = "black"
                    document.querySelector('.header_nav').style.position = "fixed"
                    if (!dark) {
                        if (pathname.length < 2) {
                            document.querySelector('.three-container').style.display = "block"
                            threeIsActive = true
                        }
                    } else {
                        document.querySelector('.header_afrah').children[0].style.color = 'white'
                        document.querySelector('.header_connect').style.color = "white"
                        document.querySelector('.header_connect').children[0].style.color = "white"

                        for (let i = 0; document.querySelector('.header_links-container').children.length > i; i++) {
                            document.querySelector('.header_links-container').children[i].children[0].style.color = "white"
                        }
                    }
                }, 100);
            } else if (window.scrollY < (innerHeight - (innerHeight * 0.08)) && document.querySelector('.header_nav').style.background === "black") {
                if (!dark) {
                    if (pathname.length < 2) {
                        document.querySelector('.three-container').style.display = "none"
                        threeIsActive = false
                    }
                    document.querySelector('.header_nav').style.background = "transparent"
                    document.querySelector('.header_nav').style.position = "absolute"
                    document.querySelector('.header_nav').style.zIndex = "100002"

                } else {
                    document.querySelector('.header_afrah').children[0].style.color = 'black'
                    document.querySelector('.header_connect').style.color = "black"
                    document.querySelector('.header_connect').children[0].style.color = "black"
                    for (let i = 0; document.querySelector('.header_links-container').children.length > i; i++) {
                        document.querySelector('.header_links-container').children[i].children[0].style.color = "black"
                    }
                    document.querySelector('.header_nav').style.background = "transparent"
                    document.querySelector('.header_nav').style.opacity = "0"
                    setTimeout(() => {
                        document.querySelector('.header_nav').style.opacity = "1"
                        document.querySelector('.header_nav').style.position = "absolute"
                        document.querySelector('.header_nav').style.zIndex = "100002"
                    }, 400);
                }
            }
        } else {

            if (window.scrollY >= ((innerHeight * 0.75) - (innerHeight * 0.08)) && document.querySelector('.header_nav').style.background === "transparent") {
                document.querySelector('.header_nav').style.transition = 'none'
                document.querySelector('.header_nav').style.background = "black"
                document.querySelector('.header_nav').style.zIndex = "100000"
                document.querySelector('.header_nav').style.position = "fixed"
                if (!dark) {
                    if (pathname.length < 2) {
                        document.querySelector('.three-container').style.display = "block"
                        threeIsActive = true
                    }
                } else {
                    document.querySelector('.header_afrah').children[0].style.color = 'white'
                    for (let i = 0; document.querySelector('.header_menu-container').children.length > i; i++) {
                        document.querySelector('.header_menu-container').children[i].style.background = "hidden"
                    }
                }
            } else if (window.scrollY < ((innerHeight * 0.75) - (innerHeight * 0.08)) && document.querySelector('.header_nav').style.background === "black") {

                if (!dark) {
                    if (pathname.length < 2) {

                        document.querySelector('.three-container').style.display = "none"
                        threeIsActive = false
                    }
                    document.querySelector('.header_nav').style.background = "transparent"
                    document.querySelector('.header_nav').style.position = "absolute"
                    document.querySelector('.header_nav').style.zIndex = "100002"

                } else {
                    document.querySelector('.header_afrah').children[0].style.color = 'black'
                    for (let i = 0; document.querySelector('.header_menu-container').children.length > i; i++) {
                        document.querySelector('.header_menu-container').children[i].style.background = "black"
                    }

                    document.querySelector('.header_nav').style.background = "transparent"
                    document.querySelector('.header_nav').style.opacity = "0"
                    setTimeout(() => {
                        document.querySelector('.header_nav').style.opacity = "1"
                        document.querySelector('.header_nav').style.position = "absolute"
                        document.querySelector('.header_nav').style.zIndex = "100002"
                    }, 400);
                }
            }

        }
    }
}

export function menuHandler(isOpen, dark) {
    if (isOpen) {
        document.querySelector('.header_nav').style.transition = 'none'
        document.querySelector('.header_nav').style.background = "black"
        document.querySelector('.header_nav').style.zIndex = "100002"
        document.querySelector('.header_nav').style.position = "fixed"

        if (dark) {
            document.querySelector('.header_afrah').children[0].style.color = 'white'
            for (let i = 0; document.querySelector('.header_menu-container').children.length > i; i++) {
                document.querySelector('.header_menu-container').children[i].style.background = "hidden"
            }
        }

    } else {
        document.querySelector('.header_nav').style.transition = '0.4s ease 0s'

        if (window.scrollY >= ((innerHeight * 0.75) - (innerHeight * 0.08))) {
            document.querySelector('.header_nav').style.background = "black"
            document.querySelector('.header_nav').style.zIndex = "100000"
            document.querySelector('.header_nav').style.position = "fixed"
            if (dark) {
                document.querySelector('.header_afrah').children[0].style.color = 'white'
                for (let i = 0; document.querySelector('.header_menu-container').children.length > i; i++) {
                    document.querySelector('.header_menu-container').children[i].style.background = "hidden"
                }

            }
        } else {
            document.querySelector('.header_nav').style.background = "transparent"
            document.querySelector('.header_nav').style.position = "absolute"
            document.querySelector('.header_nav').style.zIndex = "100002"
            if (dark) {
                document.querySelector('.header_afrah').children[0].style.color = 'black'
                for (let i = 0; document.querySelector('.header_menu-container').children.length > i; i++) {
                    document.querySelector('.header_menu-container').children[i].style.background = "black"
                }
            }
        }

    }
}




export const scrollTrigger = (ref, f, values, customStart, customEnd) => {
    const targetDivPosition = ref.getBoundingClientRect();
    let start = customStart || targetDivPosition.top + window.pageYOffset - (innerHeight * 2);
    let end = customEnd || start + (window.innerHeight * 2) + ref.clientHeight;
    const percentages = []



    if (start > window.scrollY && ref.store) {
        for (let i = 0; values.length > i; i++) {
            percentages.push(values[i][0])
        }
        f(percentages, ref)
        ref.store = false
    } else if (window.scrollY > end && ref.store) {
        for (let i = 0; values.length > i; i++) {
            percentages.push(values[i][1])
        }
        f(percentages, ref);
        ref.store = false
    }
    if (window.scrollY <= end && start <= window.scrollY) {
        for (let i = 0; values.length > i; i++) {
            percentages.push((((window.scrollY - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
        }
        f(percentages, ref)
        if (!ref.store) {
            ref.store = true
        }
    }
};

export const scrollEvent = (f) => {

    return () => {
        window.addEventListener('scroll', () => {
            if (Array.isArray(f)) {
                for (let i = 0; f.length > i; i++) {
                    f[i]()
                }
            } else {
                f()
            }
        });
    }
}