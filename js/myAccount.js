const changePassBtn = document.getElementById("changePassBtn");
const oldPassShow = document.getElementById("oldPassShow");
const oldPass = document.getElementById("oldPass");
const closeAction = document.getElementsByClassName("close-action");
const changePass = document.getElementById("changePass");
const changePassAcc = document.getElementById("changePassAcc");
const actions = document.getElementById("account");
const overlay = document.getElementsByClassName("overlay");
const changePassForm = document.getElementById("changePassForm");

const loginRegisterBtn = document.getElementById("loginRegisterBtn");
const login = document.getElementById("login");
const loginPassword = document.getElementById("loginPassword");
const showPassword = document.getElementById("showPassword");
const forgetPassBtn = document.getElementById("forgetPassBtn");
const forgetPass = document.getElementById("forgetPass");
const registerPassShow = document.getElementById("registerPassShow");
const registerPass = document.getElementById("registerPass");
const enterCodeBtn = document.getElementById("enterCodeBtn");
const enterCode = document.getElementById("enterCode");
const resetPassBtn = document.getElementById("resetPassBtn");
const resetPass = document.getElementById("resetPass");
const registerBtn = document.getElementById("registerBtn");
const register = document.getElementById("register");
const loginNav = document.getElementById("loginNav");
const registerNav = document.getElementById("registerNav");
const LoginForm = document.getElementsByClassName("login-account")[0];
const loginIssue = document.getElementById("loginIssue");
const loginContainer = document.getElementById("loginContainer");
const loggedContainer = document.getElementById("loggedContainer");
const logout = document.getElementById("logout");
const orderBtn = document.getElementsByClassName("order-btn");
const cantDo = document.getElementById("cantDo");
const loginBtn = document.getElementById("loginBtn");
const order = document.getElementById("order");

const newPassShow = document.getElementsByClassName("newPassShow");
const newPass = document.getElementsByClassName("newPass");
const confirmPassShow = document.getElementsByClassName("confirmPassShow");
const confirmPass = document.getElementsByClassName("confirmPass");

oldPassShow.onclick = () => oldPass.type === "password" ? oldPass.type = "text" : oldPass.type = "password";

for (let i = 0; i < newPassShow.length; i++) newPassShow[i].onclick = () => newPass[i].type === "password" ? newPass[i].type = "text" : newPass[i].type = "password";
for (let i = 0; i < confirmPassShow.length; i++) confirmPassShow[i].onclick = () => confirmPass[i].type === "password" ? confirmPass[i].type = "text" : confirmPass[i].type = "password";

const setCss = (selector, propery, value) => {
    selector.style.setProperty(propery, value, "important");
}

const closeAll = () => {
    actions.style.display = "none";
    changePassAcc.style.display = "none";
    document.body.style.overflow = "auto";
    setCss(forgetPass, "display", "none");
    setCss(cantDo, "display", "none");
    setCss(enterCode, "display", "none");
    setCss(login, "display", "none");
    setCss(register, "display", "none");
    setCss(resetPass, "display", "none");
    setCss(order, "display", "none");
    setCss(changePass, "display", "none")
}
let isLogin = true;
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
for (let i = 0; i < overlay.length; i++) {
    overlay[i].onclick = closeAll;
}
for (let i = 0; i < orderBtn.length; i++) {
    orderBtn[i].onclick = () => {
        actions.style.display = "block";
        document.body.style.overflow = "hidden";
        if (isLogin) {
            setCss(order, "display", "flex")
        } else {
            setCss(cantDo, "display", "flex")
        }
    }
}

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

for (let i = 0; i < closeAction.length; i++) {
    closeAction[i].onclick = () => closeAll()
}
loginBtn.onclick = () => {
    setCss(cantDo, "display", "none");
    setCss(login, "display", "flex");
}
forgetPassBtn.onclick = () => {
    setCss(login, "display", "none");
    setCss(forgetPass, "display", "flex");
}
enterCodeBtn.onclick = () => {
    setCss(forgetPass, "display", "none");
    setCss(enterCode, "display", "flex");
}
resetPassBtn.onclick = () => {
    setCss(enterCode, "display", "none");
    setCss(resetPass, "display", "flex");
}
registerBtn.onclick = () => {
    setCss(login, "display", "none");
    setCss(register, "display", "flex");
}
loginRegisterBtn.onclick = () => {
    setCss(register, "display", "none");
    setCss(login, "display", "flex");
}
showPassword.onclick = () => loginPassword.type === "password" ? loginPassword.type = "text" : loginPassword.type = "password";
registerPassShow.onclick = () => registerPass.type === "password" ? registerPass.type = "text" : registerPass.type = "password";
LoginForm.onsubmit = e => {
    if (e.target.tel.value == "00000" && e.target.password.value == "00000") {
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



/* OTC Code */
let in1 = document.getElementById('otc-1'),
    ins = document.querySelectorAll('input[type="number"]'),
    splitNumber = function (e) {
        let data = e.data || e.target.value;
        if (!data) return;
        if (data.length === 1) return;
        popuNext(e.target, data);
    },
    popuNext = function (el, data) {
        el.value = data[0];
        data = data.substring(1);
        if (el.nextElementSibling && data.length) {
            popuNext(el.nextElementSibling, data);
        }
    };
ins.forEach(function (input) {
    input.addEventListener('keyup', function (e) {
        if (e.keyCode === 16 || e.keyCode == 9 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17) {
            return;
        }
        if ((e.keyCode === 8 || e.keyCode === 37) && this.previousElementSibling && this.previousElementSibling.tagName === "INPUT") {
            this.previousElementSibling.select();
        } else if (e.keyCode !== 8 && this.nextElementSibling) {
            this.nextElementSibling.select();
        }
        if (e.target.value.length > 1) {
            splitNumber(e);
        }
    });
    input.addEventListener('focus', function (e) {
        if (this === in1) return;
        if (in1.value == '') {
            in1.focus();
        }
        if (this.previousElementSibling.value == '') {
            this.previousElementSibling.focus();
        }
    });
});
in1.addEventListener('input', splitNumber);


changePassBtn.onclick = () => {
    changePassAcc.style.display = "block";
    document.body.style.overflow = "hidden";
    setCss(changePass, "display", "flex");
}
for (let i = 0; i < closeAction.length; i++) {
    closeAction[i].onclick = () => {
        closeAll();
    }
}

changePassForm.onsubmit = e => {
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
