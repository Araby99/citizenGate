const closeAction = document.getElementsByClassName("close-action");
const actions = document.getElementsByClassName("actions")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const orderBtn = document.getElementsByClassName("order-btn");
const order = document.getElementById("order");


const setCss = (selector, propery, value) => {
    selector.style.setProperty(propery, value, "important");
}
for (let i = 0; i < orderBtn.length; i++) {
    orderBtn[i].onclick = () => {
        actions.style.display = "block";
        document.body.style.overflow = "hidden";
        setCss(order, "display", "flex")
    }
}

const closeAll = () => {
    actions.style.display = "none";
    document.body.style.overflow = "auto";
    setCss(order, "display", "none");
}

for (let i = 0; i < closeAction.length; i++) {
    closeAction[i].onclick = () => closeAll()
}
overlay.onclick = closeAll;