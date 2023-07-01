export let counter = 1

export function iteration(container, record) {
    container.current.children[1].style.background = "transparent";
    container.current.children[1].style.boxShadow = "none";

    container.current.children[0].style.backgroundPosition = "center"
    container.current.children[0].style.backgroundSize = "cover"

    container.current.children[0].style.boxShadow = "10px 10px 40px 0px rgba(0,0,0,0.7)";
    container.current.children[0].style.display = "block";
    container.current.children[0].style.animation = "scaler 1s";
    container.current.children[0].style.animationTimingFunction = "cubic-bezier(.99,.33,.21,.97)";


    for (let i = 1; container.current.children.length > i; i++) {
        container.current.children[i].style.transition = `transform 0.5s`
        setTimeout(() => {
            container.current.children[i].style.transform = "translatex(-119.3%)"
        }, Number((i - 1) + "00"));
    }
    // console.log(counter + 1);
    console.log(record.current.style.transform = "translateX(-50%)");
}

export function animEnd(wrapper, container, data) {
    wrapper.current.style.background = data[counter ? counter - 1 : data.length - 1].background
    wrapper.current.style.backgroundPosition = "center"
    wrapper.current.style.backgroundSize = "cover"


    container.current.children[0].style.background = data[counter].background;
    container.current.children[1].style.boxShadow = "10px 10px 40px 0px rgba(0,0,0,0.7)";
    container.current.children[0].style.boxShadow = "none";
    container.current.children[0].style.display = "none";
    container.current.children[0].style.animation = "";
    container.current.children[0].style.animationTimingFunction = "";




    const arr = []
    let i = counter

    if (!counter) {
        while (container.current.children.length > i) {
            if (i <= data.length - 1) {
                container.current.children[i].style.transition = "none";
                container.current.children[i].style.transform = "none";
                container.current.children[i + 1].style.background = data[i].background;
                container.current.children[i + 1].style.backgroundPosition = "center"
                container.current.children[i + 1].style.backgroundSize = "cover"
            }
            ; i++
        };
    }
    else if (counter === 1) {
        while (container.current.children.length > i) {
            if (i <= data.length - 1) {
                arr.push(data[i].background)
            }
            ; i++
        };
        for (let i = 0; i <= counter - 1; i++) {
            arr.push(data[i].background)
        }
    } else {
        while (container.current.children.length > i) {
            if (i <= data.length - 1) {
                arr.push(data[i].background)
            }
            ; i++
        }
        for (let i = 0; i <= counter - 1; i++) {
            arr.push(data[i].background)
        }
    }


    arr.forEach((element, index) => {
        container.current.children[index + 1].style.transition = "none";
        container.current.children[index + 1].style.transform = "none";
        container.current.children[index + 1].style.background = element;
        container.current.children[index + 1].style.backgroundPosition = "center"
        container.current.children[index + 1].style.backgroundSize = "cover"

    });


    if (counter === data.length - 1) {
        counter = 0
    } else {
        counter++
    }

}
