let scroolx = document.querySelector(".scrollx");
let skills = document.querySelector(".skills")
let progress = document.querySelectorAll(".progress .progress-bar")
let sc = document.querySelector(".ss")

let he =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.onscroll = function () {
    let topHe = document.documentElement.scrollTop;
    scroolx.style.width = `${(topHe / he) * 100}%`
};
window.onscroll = function () {
    if (window.scrollY >= 600) {
        sc.style.opacity = 1;
    } else {
        sc.style.opacity = 0;
    }
}
sc.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// window.onscroll = function () {

//     if (window.scrollY >= skills.offsetTop) {
//         console.log("done")
//         progress.forEach((span) => {
//             span.style.width = span.dataset.width;
//         })
//     }
// }