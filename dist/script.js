"use strict";var d=document,$form=d.getElementById("form"),$loader=d.getElementById("loader"),$formMsg=d.getElementById("form-msg");d.addEventListener("submit",(function(e){e.preventDefault(),$loader.classList.add("active");var t=$form.name,o=$form.email,n=$form.subject,a=$form.comments;fetch("https://formsubmit.co/ajax/angeljpa95@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t.value,email:o.value,subject:n.value,comments:a.value})}).then((function(e){return e.json()})).then((function(e){if("false"==e.success){var t=d.createElement("h3");t.innerText="Ocurrio un error, por favor vuelve a intentar",$formMsg.appendChild(t),setTimeout((function(){$formMsg.removeChild(t)}),3e3)}if(e.success){var o=d.createElement("h3");o.innerText="Los datos han sido enviados con exito.",$formMsg.appendChild(o),setTimeout((function(){$formMsg.removeChild(o)}),3e3)}})).catch((function(e){console.log(e.msg)})),$loader.classList.remove("active"),$form.reset()}));
//# sourceMappingURL=script.js.map