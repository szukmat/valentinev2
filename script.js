document.addEventListener("DOMContentLoaded", () => {
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");

    no.addEventListener("mouseover", () => {
        no.style.left = Math.random() * 80 + "%";
        no.style.top = Math.random() * 80 + "%";
    });

    yes.addEventListener("click", () => {
        window.location.href = "mailto:szukmat@gmail.com?subject=TAK&body=Kliknęłam%20TAK";
    });
});
