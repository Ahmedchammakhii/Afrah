
export let counter = 1

export default function (container, testimony) {
    container.current.children[0].style.transition = "none"
    container.current.children[1].style.transition = "none"
    container.current.children[0].style.opacity = "1"
    container.current.children[1].style.opacity = "0"


    if (counter === testimony.length - 1) {

        container.current.children[0].children[2].children[1].children[0].textContent = testimony[counter - 1].name + "  /"
        container.current.children[0].children[2].children[1].children[2].textContent = " " + testimony[counter - 1].position
        container.current.children[1].children[2].children[1].children[0].textContent = testimony[counter].name + "  /"
        container.current.children[1].children[2].children[1].children[2].textContent = " " + testimony[counter].position

        container.current.children[0].children[1].textContent = testimony[counter - 1].testimony
        container.current.children[0].children[2].children[0].children[0].src = '/landing/testimony/' + (counter - 1) + '.jpg'
        container.current.children[1].children[2].children[0].children[0].src = '/landing/testimony/' + counter  + '.jpg'
        container.current.children[1].children[1].textContent = testimony[counter].testimony

        for (let i = 0; container.current.children[0].children[3].children.length > i; i++) {
            if (i === counter) {
                container.current.children[0].children[3].children[i].className = 'testimony_record-picked'
            } else {
                container.current.children[0].children[3].children[i].className = 'testimony_record-not-picked'
            }
        };
        for (let i = 0; container.current.children[1].children[3].children.length > i; i++) {
            if (i === 0) {
                container.current.children[1].children[3].children[i].className = 'testimony_record-picked'
            } else {
                container.current.children[1].children[3].children[i].className = 'testimony_record-not-picked'
            }
        };

        counter = 0
    } else if (!counter) {
        container.current.children[0].children[2].children[1].children[0].textContent = testimony[testimony.length - 1].name + "  /"
        container.current.children[0].children[2].children[1].children[2].textContent = " " + testimony[testimony.length - 1].position
        container.current.children[1].children[2].children[1].children[0].textContent = testimony[0].name + "  /"
        container.current.children[1].children[2].children[1].children[2].textContent = " " + testimony[0].position


        container.current.children[0].children[1].textContent = testimony[testimony.length - 1].testimony
        container.current.children[0].children[2].children[0].children[0].src = '/landing/testimony/' + (testimony.length - 1) + '.jpg'
        container.current.children[1].children[2].children[0].children[0].src = '/landing/testimony/' + 0  + '.jpg'
        container.current.children[1].children[1].textContent = testimony[0].testimony


        for (let i = 0; container.current.children[0].children[3].children.length > i; i++) {
            if (i === counter) {
                container.current.children[0].children[3].children[i].className = 'testimony_record-picked'
            } else {
                container.current.children[0].children[3].children[i].className = 'testimony_record-not-picked'
            }
        };
        for (let i = 0; container.current.children[1].children[3].children.length > i; i++) {
            if (i === counter + 1) {
                container.current.children[1].children[3].children[i].className = 'testimony_record-picked'
            } else {
                container.current.children[1].children[3].children[i].className = 'testimony_record-not-picked'
            }
        };
        counter++

    } else {
        container.current.children[0].children[2].children[1].children[0].textContent = testimony[counter - 1].name + "  /"
        container.current.children[0].children[2].children[1].children[2].textContent = " " + testimony[counter - 1].position
        container.current.children[1].children[2].children[1].children[0].textContent = testimony[counter].name + "  /"
        container.current.children[1].children[2].children[1].children[2].textContent = " " + testimony[counter].position


        container.current.children[0].children[1].textContent = testimony[counter - 1].testimony
        container.current.children[0].children[2].children[0].children[0].src = '/landing/testimony/' + (counter - 1) + '.jpg'
        container.current.children[1].children[2].children[0].children[0].src = '/landing/testimony/' + counter  + '.jpg'

        container.current.children[1].children[1].textContent = testimony[counter].testimony

        for (let i = 0; container.current.children[0].children[3].children.length > i; i++) {
            if (i === counter) {
                container.current.children[0].children[3].children[i].className = 'testimony_record-picked'
            } else {
                container.current.children[0].children[3].children[i].className = 'testimony_record-not-picked'
            }
        };
        for (let i = 0; container.current.children[1].children[3].children.length > i; i++) {
            if (i === counter + 1) {
                container.current.children[1].children[3].children[i].className = 'testimony_record-picked'
            } else {
                container.current.children[1].children[3].children[i].className = 'testimony_record-not-picked'
            }
        };
        counter++
    }
}