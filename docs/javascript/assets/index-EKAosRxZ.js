import"./header-dyviRXqg.js";import"./navbar-O338qhMf.js";const c=document.getElementById("grid"),i=document.getElementById("inputBox");let n=null;function d(e){const t=document.createElement("div");return t.className="grid-item",t.textContent=e,t.dataset.value=e,t}function a(e=3){const t=document.createDocumentFragment();for(let r=1;r<=e*e;r++)t.appendChild(d(r));return t}function m(e){e.preventDefault(),n&&o[n-1].classList.remove("active"),n=parseInt(i.value,10),o[n-1].classList.add("active"),i.value=""}c.appendChild(a());const o=c.querySelectorAll(".grid-item");document.getElementById("colorForm").addEventListener("submit",m);
