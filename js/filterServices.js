const allServicesBtn = document.getElementsByClassName("all-services-item");
const serviceContainer = document.getElementsByClassName("service-container");
const moreServices = document.getElementById("moreServices");
let type = "allServices";
const maxItems = 7;

for (let i = 0; i < allServicesBtn.length; i++) {
    allServicesBtn[i].onclick = () => {
        moreServices.innerHTML = "المزيد";
        type = allServicesBtn[i].getAttribute("id");
        if (type == "allServices") {
            for (let j = 0; j < serviceContainer.length; j++) {
                serviceContainer[j].classList.add("d-none");
            }
            for (let j = 0; j < serviceContainer.length; j++) {
                if (moreServices.innerHTML == "المزيد" && j > maxItems) {
                    break;
                }
                serviceContainer[j].classList.remove("d-none");
            }
        } else {
            for (let j = 0; j < serviceContainer.length; j++) {
                serviceContainer[j].classList.add("d-none");
            }
            const arr = Array.from(serviceContainer)
            const filtered = arr.filter(e => e.classList.contains(type))
            for (let j = 0; j < filtered.length; j++) {
                if (j > maxItems) {
                    break;
                }
                filtered[j].classList.remove("d-none");
            }
        }
    }
}
for (let i = 0; i < serviceContainer.length; i++) {
    if (i > maxItems) {
        serviceContainer[i].classList.add("d-none")
    }
}
moreServices.onclick = () => {
    if (type == "allServices") {
        if (moreServices.innerHTML == "المزيد") {
            for (let i = 0; i < serviceContainer.length; i++) {
                serviceContainer[i].classList.remove("d-none");
            }
            moreServices.innerHTML = "عرض الأقل";
        } else {
            for (let i = 0; i < serviceContainer.length; i++) {
                if (i > maxItems) {
                    serviceContainer[i].classList.add("d-none");
                }
            }
            moreServices.innerHTML = "المزيد";
        }
    } else {
        const arr = Array.from(serviceContainer)
        const filtered = arr.filter(e => e.classList.contains(type))
        for (let j = 0; j < filtered.length; j++) {
            filtered[j].classList.remove("d-none");
        }
        if (moreServices.innerHTML == "المزيد") {
            for (let i = 0; i < filtered.length; i++) {
                filtered[i].classList.remove("d-none");
            }
            moreServices.innerHTML = "عرض الأقل";
        } else {
            for (let i = 0; i < filtered.length; i++) {
                if (i > maxItems) {
                    filtered[i].classList.add("d-none");
                }
            }
            moreServices.innerHTML = "المزيد";
        }
    }
}