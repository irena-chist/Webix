(()=>{const e=document.querySelector("#input"),t=document.querySelector(".wrapper_btn"),l=(document.querySelectorAll(".tag_close"),document.querySelector(".wrapper_tags")),c=(document.querySelectorAll(".tag_name"),document.querySelector("#chbox"));t.addEventListener("click",(()=>{let t=e.value;if(""===t)e.placeholder="Fill in this field";else{let d=[];d=t.split(","),console.log(d),d.forEach(((e,t)=>{!function(e){const t=document.createElement("div"),d=document.createElement("close");t.classList.add("tag"),t.textContent=e,d.classList.add("tag_close"),t.appendChild(d),d.addEventListener("click",(()=>{c.checked||l.removeChild(t)})),l.appendChild(t)}(e),localStorage.setItem(t,e)})),e.value=""}})),c.addEventListener("click",(()=>{c.checked?(t.disabled=!0,e.disabled=!0):(t.disabled=!1,e.disabled=!1)}))})();