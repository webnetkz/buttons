let result = document.querySelector('#result');
let enable = false;
let borderCheck = document.querySelector('#borderCheck');
let borderWidth = document.querySelector('#borderWidth');
let borderColor = document.querySelector('#borderColor');
let borderStyle = document.querySelector('#borderStyle');
      
borderCheck.addEventListener("change", () => {
  if(borderCheck.classList.contains("showGroup")) {
    enable = false;
    borderCheck.classList.remove("showGroup");
  } else {
    enable = true;
    borderCheck.classList.add("showGroup");
  }
});
borderWidth.addEventListener("change", () => {
  if(enable) {
    result.style.borderWidth = borderWidth.value+'px';
  }
});
borderColor.addEventListener("change", () => {
  if(enable) {
    result.style.borderColor = borderColor.value;
  }
});
borderStyle.addEventListener("change", () => {
  if(enable) {
    result.style.borderStyle = borderStyle.value;
  }    
});