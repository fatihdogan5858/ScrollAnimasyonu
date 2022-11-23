const boxes = document.querySelectorAll('.box')
window.addEventListener("scroll", checkBoxes) /* window içindeki scrolla bir etkinlik atıyoruz bu scrola ekliyeceğimiz functions un ismi checkBoxes */

checkBoxes()
function checkBoxes() 
    const triggerBotom = (window.innerHeight /6) * 2
    // console.log(window.innerHeight/6)*4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBotom) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
