const changePassBtn = document.getElementById("changePassBtn");
const oldPassShow = document.getElementById("oldPassShow");
const oldPass = document.getElementById("oldPass");
const newPassShow = document.getElementById("newPassShow");
const newPass = document.getElementById("newPass");
const confirmPassShow = document.getElementById("confirmPassShow");
const confirmPass = document.getElementById("confirmPass");
const closeAction = document.getElementsByClassName("close-action");
const changePass = document.getElementById("changePass");
const form = document.getElementsByTagName("form");
const actions = document.getElementsByClassName("actions")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const changePassForm = document.getElementById("changePassForm");

/* 1 */
const login = document.getElementById("login");
const register = document.getElementById("register");
const loginNav = document.getElementById("loginNav");
const registerNav = document.getElementById("registerNav");
const LoginForm = document.getElementsByClassName("login-account")[0];
const loginIssue = document.getElementById("loginIssue");
const loginContainer = document.getElementById("loginContainer");
const loggedContainer = document.getElementById("loggedContainer");
const logout = document.getElementById("logout");
const loginPassword = document.getElementById("loginPassword");
const showPassword = document.getElementById("showPassword");
const registerPassShow = document.getElementById("registerPassShow");
const registerPass = document.getElementById("registerPass");
const changeIssue = document.getElementById("changeIssue");

let isLogin = false;
showPassword.onclick = () => loginPassword.type === "password" ? loginPassword.type = "text" : loginPassword.type = "password";
registerPassShow.onclick = () => registerPass.type === "password" ? registerPass.type = "text" : registerPass.type = "password";
/* End 1 */


oldPassShow.onclick = () => oldPass.type === "password" ? oldPass.type = "text" : oldPass.type = "password";
newPassShow.onclick = () => newPass.type === "password" ? newPass.type = "text" : newPass.type = "password";
confirmPassShow.onclick = () => confirmPass.type === "password" ? confirmPass.type = "text" : confirmPass.type = "password";

const setCss = (selector, propery, value) => {
    selector.style.setProperty(propery, value, "important");
}

/* Prevent All Forms from submit */
for (let i = 0; i < form.length; i++) {
    form[i].onsubmit = e => {
        e.preventDefault();
    }
}
/* 2 */

const closeAll = () => {
    actions.style.display = "none";
    document.body.style.overflow = "auto";
    setCss(changePass, "display", "none");
    setCss(login, "display", "none");
    setCss(register, "display", "none");
}

const checkLogged = () => {
    if (isLogin) {
        setCss(loggedContainer, "display", "block");
        setCss(loginContainer, "display", "none");
    } else {
        setCss(loginContainer, "display", "block");
        setCss(loggedContainer, "display", "none");
    }
}
checkLogged();

loginNav.onclick = () => {
    actions.style.display = "block";
    document.body.style.overflow = "hidden";
    setCss(login, "display", "flex");
}

registerNav.onclick = () => {
    actions.style.display = "block";
    document.body.style.overflow = "hidden";
    setCss(register, "display", "flex");
}
LoginForm.onsubmit = e => {
    e.preventDefault()
    if (e.target.tel.value == "00000" && e.target.password.value == "00000") {
        LoginForm.reset();
        closeAll();
        isLogin = true;
        checkLogged();
        setCss(loginIssue, "display", "none");
    } else {
        setCss(loginIssue, "display", "flex");
    }
}
logout.onclick = () => {
    isLogin = false;
    checkLogged();
}

/* End 2 */

changePassBtn.onclick = () => {
    actions.style.display = "block";
    document.body.style.overflow = "hidden";
    setCss(changePass, "display", "flex");
}
overlay.onclick = () => {
    closeAll();
}
for (let i = 0; i < closeAction.length; i++) {
    closeAction[i].onclick = () => {
        closeAll();
    }
}

changePassForm.onsubmit = e => {
    e.preventDefault();
    if (e.target.newPass.value == e.target.confirmPass.value && e.target.newPass.value.trim() !== "") {
        closeAll();
        setCss(changeIssue, "display", "none");
    } else {
        setCss(changeIssue, "display", "block");
    }
}
/* Owl Carousel */
$(document).ready(function () {
    const owl1 = $("#owl-3");
    owl1.owlCarousel({
        margin: 40,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $('#owl-3-next').click(() => {
        owl1.trigger('next.owl.carousel');
    })
    $('#owl-3-prev').click(() => {
        owl1.trigger('prev.owl.carousel');
    })
});
