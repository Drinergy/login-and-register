/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

// Bouncing Letters

document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
    element.addEventListener("mouseover", (e) => bounce(e.target));
});

function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
        letter.classList.add("bounce");
        setTimeout(
            function () {
                letter.classList.remove("bounce");
            },
            1000
        );
    }
}


// bubble text animation 

// const text = "MEDSFINITY API";

// const targetEl = document.getElementById("bubble-hover");

// text.split("").map((char, idx) => {

//     const el = document.createElement("span");

//     el.innerText = char;
//     el.setAttribute("data-index", idx.toString());
//     el.classList.add("hover-char");

//     targetEl.appendChild(el);
// });

// const hoverChars = [...document.getElementsByClassName("hover-char")];

// const removeClasses = () => {
//     hoverChars.map((char) => {
//         char.classList.remove("hovered");
//         char.classList.remove("hovered-adjacent");
//     });
// };

// hoverChars.map((char) => {

//     char.addEventListener("mouseover", (e) => {
//         removeClasses();

//         const currentElement = e.target;
//         const index = parseInt(currentElement.getAttribute("data-index"), 10);

//         const prevIndex = index === 0 ? null : index - 1;
//         const nextIndex = text.length - 1 ? null : index + 1;

//         const prevEl = prevIndex !== null && document.querySelector(`[data-index="${prevIndex}]`);

//         const nextEl = nextIndex !== null && document.querySelector(`[data-index="${nextIndex}]`);

//         e.target.classList.add("hovered");

//         prevEl && prevEl.classList.add("hovered-adjacent");
//         nextEl && nextEl.classList.add("hovered-adjacent");

//     });
// });

// document.getElementById("bubble-hover").addEventListener("mouseleave", () => {
//     removeClasses();
// });