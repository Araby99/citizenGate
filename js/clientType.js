const select = document.getElementById("clientType");
const clientsInfo = document.getElementsByClassName("clients-info");

select.onchange = e => {
    if (e.target.value === "person") {
        for (let i = 0; i < clientsInfo.length; i++) {
            clientsInfo[i].style.display = "none";
            alert("Person is Checked");
        }
    } else {
        for (let i = 0; i < clientsInfo.length; i++) {
            clientsInfo[i].style.display = "block";
            alert("Company is Checked");
        }
    }
}