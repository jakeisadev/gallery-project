let searchBox = document.querySelector('#search');
let pictures = document.querySelectorAll('a');

searchBox.addEventListener("keyup", (event) => {
  for(let i = 0; i < pictures.length; i++) {
    if(searchBox.value.lenth == 0) {
        pictures[i].style.display = "inline";
    }
    else if(pictures[i].dataset.title.includes(searchBox.value.toLowerCase())) {
      pictures[i].style.display = "inline";
    } else {
      pictures[i].style.display = "none";
    }
  }
});
