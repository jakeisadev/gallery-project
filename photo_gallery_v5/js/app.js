baguetteBox.run('.gallery', {
    captions:true
});

let searchBox = document.querySelector('#search');
let pictures = document.querySelectorAll('a');

searchBox.addEventListener("keyup", (event) => {
  for(let i = 0; i < pictures.length; i++) {
    const caption = pictures[i].dataset.caption.toLowerCase();
    if(searchBox.value.lenth == 0) {
        pictures[i].style.display = "inline";
    }
    else if(caption.includes(searchBox.value.toLowerCase())) {
      pictures[i].style.display = "inline";
    } else {
      pictures[i].style.display = "none";
    }
  }
});
