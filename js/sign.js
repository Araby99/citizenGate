const closeAction = document.getElementsByClassName("close-action");
const actions = document.getElementsByClassName("actions")[0];
const overlay = document.getElementsByClassName("overlay")[0];
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
const newPassShow = document.getElementById("newPassShow");
const newPass = document.getElementById("newPass");
const confirmPassShow = document.getElementById("confirmPassShow");
const confirmPass = document.getElementById("confirmPass");
const savePass = document.getElementById("savePass");
const registerBtn = document.getElementById("registerBtn");
const register = document.getElementById("register");
const loginNav = document.getElementById("loginNav");
const registerNav = document.getElementById("registerNav");
const LoginForm = document.getElementsByClassName("login-account")[0];
const loginIssue = document.getElementById("loginIssue");
const loginContainer = document.getElementById("loginContainer");
const loggedContainer = document.getElementById("loggedContainer");
const logout = document.getElementById("logout");

const form = document.getElementsByTagName("form");
/* Prevent All Forms from submit */
for (let i = 0; i < form.length; i++) {
    form[i].onsubmit = e => {
        e.preventDefault();
    }
}

let isLogin = false;

const setCss = (selector, propery, value) => {
    selector.style.setProperty(propery, value, "important");
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

const closeAll = () => {
    actions.style.display = "none";
    document.body.style.overflow = "auto";
    setCss(forgetPass, "display", "none");
    setCss(enterCode, "display", "none");
    setCss(login, "display", "none");
    setCss(register, "display", "none");
    setCss(resetPass, "display", "none");
}

for (let i = 0; i < closeAction.length; i++) {
    closeAction[i].onclick = () => closeAll()
}
overlay.onclick = closeAll;
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
newPassShow.onclick = () => newPass.type === "password" ? newPass.type = "text" : newPass.type = "password";
confirmPassShow.onclick = () => confirmPass.type === "password" ? confirmPass.type = "text" : confirmPass.type = "password";
registerPassShow.onclick = () => registerPass.type === "password" ? registerPass.type = "text" : registerPass.type = "password";
LoginForm.onsubmit = e => {
    e.preventDefault()
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