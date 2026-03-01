const taskbar = document.querySelector(".taskbar");
const startmenu = document.querySelector(".startmenu");

if (taskbar && startmenu) {
    taskbar.addEventListener('click', () => {
        const currentBottom = startmenu.style.bottom;
        startmenu.style.bottom = currentBottom === "50px" ? "-655px" : "50px";
    });
} else {
    console.warn("Taskbar or startmenu element not found");
}