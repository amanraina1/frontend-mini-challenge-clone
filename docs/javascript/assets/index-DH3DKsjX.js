var m=Object.defineProperty;var u=(i,t,s)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var e=(i,t,s)=>u(i,typeof t!="symbol"?t+"":t,s);import"./header-kAbiDnTG.js";import"./navbar-Cuba-tbp.js";const c=document.getElementById("display");document.getElementById("controls");class S{constructor(t,s,n,l,a,d,o,h){e(this,"msbRegex",/^[0-5]$/);e(this,"lsbRegex",/^[0-9]$/);e(this,"minutes",0);e(this,"seconds",0);e(this,"onClick",t=>{t.target.tagName==="INPUT"?t.target.select():t.target.id==="start"?this.onStart(t):t.target.id==="stop"?this.onStop(t):t.target.id==="reset"&&this.onReset(t)});e(this,"onInput",t=>{const s=Number(t.data);typeof s=="number"&&(t.target.id==="minMSB"||t.target.id==="secMSB"?this.onValueEntry(this.msbRegex,t.target,s):(t.target.id==="minLSB"||t.target.id==="secLSB")&&this.onValueEntry(this.lsbRegex,t.target,s))});this.minMSB=document.getElementById(t),this.minLSB=document.getElementById(s),this.secMSB=document.getElementById(n),this.secLSB=document.getElementById(l),this.start=document.getElementById(a),this.stop=document.getElementById(d),this.reset=document.getElementById(o),this.display=document.getElementById(h)}onStart(){this.setControls(!0,!1),this.display.classList.add("progress"),this.setInputsDisabledStatus(!0),this.setTime(),this.startTimer()}onStop(){this.setControls(!1,!0),this.display.classList.remove("progress"),this.setInputsDisabledStatus(!1),clearInterval(this.intervalId)}onReset(){this.setControls(!1,!0),this.resetControls(),this.resetTimerValue()}setControls(t=!1,s=!1){this.start.disabled=t,this.stop.disabled=s}onValueEntry(t,s,n){var l,a;t.test(n)?(s.value=n,(l=s.nextElementSibling)==null||l.focus(),(a=s.nextElementSibling)==null||a.select()):(s.value=0,s.select())}setInputsDisabledStatus(t=!1){this.minMSB.disabled=t,this.minLSB.disabled=t,this.secMSB.disabled=t,this.secLSB.disabled=t}resetControls(){clearInterval(this.intervalId),this.display.classList.remove("progress"),this.setInputsDisabledStatus(!1)}resetTimerValue(){this.minMSB.value=0,this.minLSB.value=0,this.secMSB.value=0,this.secLSB.value=0}setTime(){this.minutes=+(this.minMSB.value+this.minLSB.value),this.seconds=+(this.secMSB.value+this.secLSB.value)}startTimer(){if(this.minutes===0&&this.seconds===0){this.onReset();return}this.intervalId=setInterval(()=>{this.seconds-=1,this.seconds<0&&(this.seconds=59,this.minutes-=1),this.minutes===0&&this.seconds===0&&this.onReset(),this.setDisplay(this.minutes,this.seconds)},1e3)}setDisplay(t,s){[this.minMSB.value,this.minLSB.value]=String(t).padStart(2,0).split(""),[this.secMSB.value,this.secLSB.value]=String(s).padStart(2,0).split("")}}const r=new S("minMSB","minLSB","secMSB","secLSB","start","stop","reset","display");c.addEventListener("input",r.onInput);document.body.addEventListener("click",r.onClick);
