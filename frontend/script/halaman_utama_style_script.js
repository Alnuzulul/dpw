const navbar = document.getElementsByClassName("navbar")[0];
navbar.style.width = "85%";
navbar.style.margin = "20px";
navbar.style.padding = "35px";

const logo = document.getElementsByClassName("logo");
logo[0].style.width="120px";

const a = document.querySelectorAll("a");
for (let i=0; i<3; i++){
 a[i].style.color= "white";
 a[i].style.textDecoration= "none";
 a[i].style.textTransform= "uppercase";
}

var h1 = document.getElementsByTagName("h1");
h1[0].innerHTML="Welcome to AEROXY!"
h1[0].style.color= "white";

var p = document.getElementsByTagName("p");
p[0].innerHTML="Semua akan MODIF , dan akan AEROX pada waktunya ;)";
p[0].style.color="white";

let blog = document.getElementById("blog");
blog.style.display="flex";
blog.style.justifyContent="center";
blog.style.flexDirection="column";
blog.style.alignItems="center";
blog.style.padding="40px";

let h3 = document.getElementsByTagName("h3")[0];
h3.innerHTML="postingan saya";
h3.style.color="#3aa6ff";

let h6 = document.getElementsByTagName("h6");
for (let i=0; i<h6.length; i++){
    h6[i].style.color="#3aa6ff";
    h6[i].style.fontSize="12px";
    h6[i].style.fontSize="12px";
    h6[i].style.marginTop="-20px";
}

const footer = document.getElementsByTagName("footer")[0];
footer.style.textAlign="center";
footer.style.padding="3px";
footer.style.backgroundColor ="#3aa6ff";
footer.style.color="white";