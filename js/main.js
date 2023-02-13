let secall = document.createElement("button");
document.body.appendChild(secall);
secall.innerText="Open My Task";
secall.setAttribute("onclick","full()");
secall.style.color="#fff";
secall.style.backgroundColor="purple";
secall.style.padding="10px";

function full(){
	
let sec = document.createElement("section");
document.body.appendChild(sec);
sec.style.width="700px";
sec.style.margin="0 auto";
sec.style.padding="20px 30px";
sec.style.boxShadow="0 0 8px #ccc";

let h = document.createElement("h1");
sec.appendChild(h);
h.innerText="Voluptatem dignissimos provident quarsi corporis voluptates sit assumenda.";
h.style.fontSize="xx-large"

let ita = document.createElement("i");
sec.appendChild(ita);
ita.innerText="Lorem ipsum dolor sit amet,consectetur adipiscing elit,ssed do eiusmod tempor incidident ut laore et dolore magna aliqua."
ita.style.fontSize="large "

let li_1 = document.createElement("p");
sec.appendChild(li_1);
li_1.innerText=" Ullamco laboris nisi ut aliquip ex ea commodo consequat."; 
li_1.style.fontSize="large "

let li_2 = document.createElement("p");
sec.appendChild(li_2);
li_2.innerText=" Duis aute irure dolor in reprehenderit in voluptate velit."; 
li_2.style.fontSize="large"

let li_3 = document.createElement("p");
sec.appendChild(li_3);
li_3.innerText="Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore en fugiat nulla pariatur."; 
li_3.style.fontSize="large "

let li_4 = document.createElement("p");
sec.appendChild(li_4);
li_4.innerText="Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate"; 
li_4.style.fontSize="large";
li_4.style.marginTop="50px";
console.log(sec);
}