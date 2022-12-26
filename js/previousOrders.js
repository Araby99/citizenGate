const orderItem = document.getElementsByClassName("order-item");
const actions = document.getElementsByClassName("actions")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const orderInfo = document.getElementById("orderInfo");
const closeAction = document.getElementsByClassName("close-action");

const setCss = (selector, propery, value) => {
    selector.style.setProperty(propery, value, "important");
}

overlay.onclick = () => {
    actions.style.display = "none";
    document.body.style.overflow = "auto";
}
for (let i = 0; i < orderItem.length; i++) {
    orderItem[i].onclick = () => {
        actions.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}
for (let i = 0; i < closeAction.length; i++) {
    closeAction[i].onclick = () => {
        actions.style.display = "none";
        document.body.style.overflow = "auto";
    }
}