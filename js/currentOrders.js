const newOrder = document.getElementsByClassName("new-order");
const orderDone = document.getElementsByClassName("order-done");
const orderInCharge = document.getElementsByClassName("order-in-charge");
const actions = document.getElementsByClassName("actions")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const orderInfo = document.getElementById("orderInfo");
const newOrderC = document.getElementById("orderNew");
const orderInChargeC = document.getElementById("orderInCharge");
const closeAction = document.getElementsByClassName("close-action");

const setCss = (selector, propery, value) => {
    selector.style.setProperty(propery, value, "important");
}

overlay.onclick = () => {
    actions.style.display = "none";
    document.body.style.overflow = "auto";
    setCss(orderInfo, "display", "none")
    setCss(newOrderC, "display", "none")
    setCss(orderInChargeC, "display", "none")
}
for (let i = 0; i < newOrder.length; i++) {
    newOrder[i].onclick = () => {
        actions.style.display = "block";
        document.body.style.overflow = "hidden";
        setCss(newOrderC, "display", "flex")
    }
}
for (let i = 0; i < orderDone.length; i++) {
    orderDone[i].onclick = () => {
        actions.style.display = "block";
        document.body.style.overflow = "hidden";
        setCss(orderInfo, "display", "flex")
    }
}
for (let i = 0; i < orderInCharge.length; i++) {
    orderInCharge[i].onclick = () => {
        actions.style.display = "block";
        document.body.style.overflow = "hidden";
        setCss(orderInChargeC, "display", "flex")
    }
}
for (let i = 0; i < closeAction.length; i++) {
    closeAction[i].onclick = () => {
        actions.style.display = "none";
        document.body.style.overflow = "auto";
        setCss(orderInfo, "display", "none")
        setCss(newOrderC, "display", "none")
        setCss(orderInChargeC, "display", "none")
    }
}