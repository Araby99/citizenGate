const input = document.getElementById("profilePic");
const image = document.getElementById("formPic");
input.onchange = e => {
    image.src = URL.createObjectURL(e.target.files[0]);
}