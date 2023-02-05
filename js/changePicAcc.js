const profilePicAcc = document.getElementById("profilePicAcc");
const profilePicCheck = document.getElementById("profilePicCheck");

profilePicAcc.onchange = e => {
    profilePicCheck.src = URL.createObjectURL(e.target.files[0]);
} 