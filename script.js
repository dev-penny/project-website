const hamburger= document.getElementById('hamburger');
const mainMENU= document.getElementById('main-menu');
const dropMENU= document.getElementById('dropdown');

hamburger.addEventListener('click', () => {
    mainMENU.classList.toggle('show');
});

mainMENU.addEventListener('click', () => {
    dropMENU.classList.toggle('show');
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}