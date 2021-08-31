const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const btns = document.querySelector("#xyz");
const list = document.querySelector("#list");
var el = document.getElementsByTagName("li");

// add elements when we click the button
btn.onclick = function () {
  var txt = input.value;
  if (txt == "") {
    alert("you must write something");
  } 
  else {
    let li = document.createElement("li");
    const ele = document.createElement("i");
    ele.classList.add("fas");
    ele.classList.add("fa-trash-alt");
    ele.setAttribute("id", "del");
  

    li.innerText = txt;
    li.append(ele);

    list.insertBefore(li, list.childNodes[0]);
    input.value = "";
    ele.onclick = function () {
      ele.parentElement.remove();
    };
  }
};
//check the clicked elements
list.onclick = function (ev) {
  if (ev.target.tagName == "LI") {
    ev.target.classList.toggle("checked");
  }
};

