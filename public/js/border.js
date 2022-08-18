let enable = false;

borderCheck.addEventListener("change", () => {
  if(borderCheck.classList.contains("showGroup")) {
    enable = false;
    borderCheck.classList.remove("showGroup");
  } else {
    enable = true;
    borderCheck.classList.add("showGroup");
    result.style.borderWidth = borderWidth.value+'px';
    result.style.borderRadius = borderRadius.value+'px';
    result.style.borderColor = borderColor.value;
    result.style.borderStyle = borderStyle.value;
  }
});
borderWidth.addEventListener("change", () => {
  if(enable) {
    result.style.borderWidth = borderWidth.value+'px';
  }
});
borderRadius.addEventListener("change", () => {
  if(enable) {
    result.style.borderRadius = borderRadius.value+'px';
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

// Text style change
textSize.addEventListener("change", () => {
  result.style.fontSize = textSize.value+'px';
});
textStyle.addEventListener("change", () => {
  result.style.fontFamily = textStyle.value;
});
textColor.addEventListener("change", () => {
  result.style.color = textColor.value;
});

getRes.addEventListener("click", () => {
  code.innerText = "";
  code.innerText = "button {\n";
  code.innerText += "border-width: "+borderWidth.value+'px;\n';
  code.innerText += "border-radius: " +borderRadius.value+'px;\n';
  code.innerText += "color: " +borderColor.value+";\n";
  code.innerText += "border-style: " +borderStyle.value+";\n";
  code.innerText += "font-size: " +textSize.value+";\n";
  code.innerText += "font-family: " +textStyle.value+";\n";
  code.innerText += "color: " +textColor.value+";\n";
  code.innerText += "}\n";
});

// Копирование стилей в буфер обмена
copy.addEventListener("click", () => {
  copyToClipboard(code);
});

// Функция копирования из буфера обмена
function copyToClipboard(elem) {
  // create hidden text element, if it doesn't already exist
var targetId = "_hiddenCopyText_";
var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
var origSelectionStart, origSelectionEnd;
if (isInput) {
    // can just use the original source element for the selection and copy
    target = elem;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
} else {
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId);
    if (!target) {
        var target = document.createElement("textarea");
        target.style.position = "absolute";
        target.style.left = "-9999px";
        target.style.top = "0";
        target.id = targetId;
        document.body.appendChild(target);
    }
    target.textContent = elem.textContent;
}
// select the content
var currentFocus = document.activeElement;
target.focus();
target.setSelectionRange(0, target.value.length);
 
// copy the selection
var succeed;
try {
      succeed = document.execCommand("copy");
} catch(e) {
    succeed = false;
}
// restore original focus
if (currentFocus && typeof currentFocus.focus === "function") {
    currentFocus.focus();
}
 
if (isInput) {
    // restore prior selection
    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
} else {
    // clear temporary content
    target.textContent = "";
}
return succeed;
}
