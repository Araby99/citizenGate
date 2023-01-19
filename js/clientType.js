const select = document.getElementById("clientType");
const clientsInfo = document.getElementsByClassName("clients-info");

select.onclick = () => {
    if (select.value === "person") {
        for (let i = 0; i < clientsInfo.length; i++) {
            clientsInfo[i].style.display = "none"
        }
    } else {
        for (let i = 0; i < clientsInfo.length; i++) {
            clientsInfo[i].style.display = "block";
        }
    }
}