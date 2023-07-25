export let counter = 1

export function iteration(container, record, wrapper) {
    container.current.children[1].style.background = "transparent";
    container.current.children[1].style.boxShadow = "none";

    // url('path/to/your-image.jpg'), linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
    container.current.children[0].style.background = container.current.children[0].style.background + ", linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"
    container.current.children[0].style.zIndex = "3"
    container.current.children[0].style.backgroundPosition = "center"
    container.current.children[0].style.backgroundSize = "cover"

    container.current.children[0].style.boxShadow = "10px 10px 40px 0px rgba(0,0,0,0.7)";
    container.current.children[0].style.display = "block";
    container.current.children[0].style.animation = "scaler 1s";
    container.current.children[0].style.animationTimingFunction = "cubic-bezier(.69,.26,0,1)";
    container.current.children[1].children[0].style.display = "none"



    container.current.children[0].children[0].style.opacity = 0


    for (let i = 1; container.current.children.length > i; i++) {
        container.current.children[i].style.transition = `transform 0.5s`
        setTimeout(() => {
            container.current.children[i].style.transform = "translatex(-12.5vw)"
        }, Number((i - 1) + "00"));
    }

    wrapper.current.style.transition = "scale 1s cubic-bezier(.69,.26,0,1), filter 1s, background-position 1s";
    wrapper.current.style.scale = 2
    wrapper.current.style.backgroundPosition = (-innerWidth * 0.1) + 'px'
    wrapper.current.style.filter = "brightness(10%)"
    document.querySelector('.left-wrapper').style.transition = "transform 1s cubic-bezier(.69,.26,0,1), filter 1s, opacity 1s cubic-bezier(.69,.26,0,1)";
    document.querySelector('.left-wrapper').style.textShadow = "none";
    document.querySelector('.left-wrapper').style.filter = "brightness(10%)"
    document.querySelector('.left-wrapper').style.opacity = 0.1
    document.querySelector('.left-wrapper').style.transform = `scale(2) translateX(${(-innerWidth * 0.2) + 'px'})`

    record.current.style.transition = "1s cubic-bezier(.69,.26,0,1)"
    record.current.style.transform = "translateX(-50%)"
    record.current.children[1].style.transition = "1s cubic-bezier(.69,.26,0,1)"
    record.current.children[1].style.transform = "none";


    for (let i = 0; document.querySelector('#tracker').children.length > i; i++) {
        if (counter >= i) {
            document.querySelector('#tracker').children[i].children[0].style.width = "100%"
        } else if (counter < i && document.querySelector('#tracker').children[i].children[0].style.width === "100%") {
            setTimeout(() => {
                document.querySelector('#tracker').children[i].children[0].style.width = "0"
            }, Number((((container.current.children.length - 1) - i) - 1) + "50"));
        }
    }

}

export function animEnd(wrapper, container, data, record, titles, subtitle, matta) {

    container.current.children[1].children[0].style.display = "block"
    record.current.children[0].textContent = "0" + (counter + 1) + ""
    if (counter === container.current.children.length - 2) {
        record.current.children[1].textContent = "01"
    } else {
        record.current.children[1].textContent = "0" + (counter + 2) + ""
    };

    record.current.style.transition = "none"
    record.current.style.transform = "none"
    record.current.children[1].style.transition = "none"
    record.current.children[1].style.transform = "translateX(100%)"


    document.querySelector('.left-wrapper').style.transition = "none";
    document.querySelector('.left-wrapper').style.textShadow = "0px 0px 15px rgba(0,0,0,0.5)";
    document.querySelector('.left-wrapper').style.scale = 1
    document.querySelector('.left-wrapper').style.opacity = 1
    document.querySelector('.left-wrapper').style.filter = "none"
    document.querySelector('.left-wrapper').style.transform = "none"


    subtitle.current.children[0].style.transition = "none";
    subtitle.current.children[0].style.transform = "translateY(100%)";
    matta.current.children[0].style.transition = "none";
    matta.current.children[0].style.transform = "translateY(100%)";
    setTimeout(() => {
        subtitle.current.children[0].style.transition = "transform 0.6s cubic-bezier(.69,.26,0,1)"
        subtitle.current.children[0].style.transform = "none";
        matta.current.children[0].style.transition = "transform 0.6s cubic-bezier(.69,.26,0,1)"
        matta.current.children[0].style.transform = "none";
    }, 0);



    for (let i = 0; titles.current.children.length > i; i++) {

        if (titles.current.children.length - 1 > i) {
            titles.current.children[i].children[0].style.transition = "none";
            titles.current.children[i].children[0].style.transform = "translateY(100%)";
        } else if (titles.current.children.length - 1 === i) {
            titles.current.children[i].children[0].style.transition = "none";
            titles.current.children[i].children[0].style.transform = "translateY(300%)";
            titles.current.children[i].children[0].style.opacity = "0";
        }

        if (titles.current.children.length - 2 === i) {
            titles.current.children[i].children[0].style.opacity = "0";
        }
        setTimeout(() => {
            if (titles.current.children.length - 1 > i) {
                titles.current.children[i].children[0].style.transition = "transform 0.6s cubic-bezier(.69,.26,0,1), opacity 1s "
                titles.current.children[i].children[0].style.transform = "none"
            } else if (titles.current.children.length - 1 === i) {
                titles.current.children[i].children[0].style.transition = "transform 1s cubic-bezier(.69,.26,0,1), opacity 1.5s "
                titles.current.children[i].children[0].style.transform = "none"
                titles.current.children[i].children[0].style.opacity = "1";
            }
            if (titles.current.children.length - 2 === i) {
                titles.current.children[i].children[0].style.opacity = "1";
            }
        }, Number(i + 1 + "00"));
    }



    wrapper.current.style.background = data[counter ? counter - 1 : data.length - 1].background
    wrapper.current.style.backgroundPosition = "center"
    wrapper.current.style.backgroundSize = "cover"
    wrapper.current.style.transition = "none";
    wrapper.current.style.scale = 1
    wrapper.current.style.filter = "none"
    wrapper.current.style.backgroundRepeat = "no-repeat"
    // wrapper.current.style.transform = "scaleX(-1)"



    container.current.children[0].style.background = data[counter].background;
    container.current.children[1].style.boxShadow = "10px 10px 40px 0px rgba(0,0,0,0.7)";
    container.current.children[0].style.boxShadow = "none";
    container.current.children[0].style.display = "none";
    container.current.children[0].style.animation = "";
    container.current.children[0].style.animationTimingFunction = "";


    container.current.children[0].children[0].style.opacity = 1

    const arr = []
    let i = counter

    if (!counter) {
        while (container.current.children.length > i) {
            if (i <= data.length - 1) {
                container.current.children[i].style.transition = "none";
                container.current.children[i].style.transform = "none";
                container.current.children[i + 1].style.background = data[i].background;
                container.current.children[i + 1].style.backgroundPosition = "30% center"
                container.current.children[i + 1].style.backgroundSize = "cover"


                container.current.children[i + 1].children[0].children[0].children[1].textContent = data[i].location
                container.current.children[i + 1].children[0].children[0].children[2].textContent = data[i].first_title
                container.current.children[i + 1].children[0].children[0].children[3].textContent = data[i].second_title

            }
            ; i++
        };
    }
    else if (counter === 1) {
        while (container.current.children.length > i) {
            if (i <= data.length - 1) {
                arr.push(data[i])
            }
            ; i++
        };
        for (let i = 0; i <= counter - 1; i++) {
            arr.push(data[i])
        }
    } else {
        while (container.current.children.length > i) {
            if (i <= data.length - 1) {
                arr.push(data[i])
            }
            ; i++
        }
        for (let i = 0; i <= counter - 1; i++) {
            arr.push(data[i])
        }
    }


    arr.forEach((element, index) => {
        container.current.children[index + 1].style.transition = "none";
        container.current.children[index + 1].style.transform = "none";
        container.current.children[index + 1].style.background = element.background;
        container.current.children[index + 1].style.backgroundPosition = "30% center";
        container.current.children[index + 1].style.backgroundSize = "cover";

        container.current.children[index + 1].children[0].children[0].children[1].textContent = element.location
        container.current.children[index + 1].children[0].children[0].children[2].textContent = element.first_title
        container.current.children[index + 1].children[0].children[0].children[3].textContent = element.second_title

    });


    if (counter === data.length - 1) {
        counter = 0
    } else {
        counter++
    }

}
