// document.addEventListener("click", e => {
//   const isDropdownButton = e.target.matches("[data-dropdown-button]")
//   if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

//   let currentDropdown
//   if (isDropdownButton) {
//     currentDropdown = e.target.closest("[data-dropdown]")
//     currentDropdown.classList.toggle("active")
//   }

//   document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//     if (dropdown === currentDropdown) return
//     dropdown.classList.remove("active")
//   })
// })

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}