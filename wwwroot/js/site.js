window.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("btn");
    const toggle = document.querySelector('.toggle');

    button.addEventListener("click", () => {
        document.body.style.backgroundColor = "#171819";
        let a = document.createElement('button');
        a.innerHTML = "X";
        a.classList.add("toggle");
        document.querySelector('.upper_footer_text').appendChild(a);
        toggle.onclick = function () {
            document.body.style.backgroundColor = "#fff";
            document.querySelector('.upper_footer_text').removeChild(a);
        }
        
    });
});


