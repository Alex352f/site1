window.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("btn");
    

    button.addEventListener("click", () => {
        document.body.style.backgroundColor = "#171819";
        let new_element=document.createElement("button");
        new_element.innerHTML="X";
        button.after(new_element);

        new_element.addEventListener("click",()=>{
            document.body.style.backgroundColor = "#fff";
            new_element.remove();
        })
    });
});
