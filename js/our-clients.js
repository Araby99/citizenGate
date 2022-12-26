const next = document.getElementById("nav-next");
const prev = document.getElementById("nav-prev");
const navItem = document.getElementsByClassName("navigate-item");
let active = 0;
next.onclick = () => {
    if (active + 1 < navItem.length) {
        navItem[active].classList.remove("active");
        navItem[active + 1].classList.add("active");
        active++;
    }
}
prev.onclick = () => {
    if (active !== 0) {
        navItem[active].classList.remove("active");
        navItem[active - 1].classList.add("active");
        active--;
    }
}