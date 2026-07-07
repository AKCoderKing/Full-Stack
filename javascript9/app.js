// getElementById 
// console.log(document.getElementById("mainImg"));
// let imgObj = document.getElementById("mainImg");
// console.log(imgObj);
// console.dir(imgObj);
// console.log(imgObj.src);
// console.log(imgObj.tagName);
// console.log(imgObj.id);
// imgObj.src = "creation_1.png";
// console.log(document.getElementById("description"));
// console.dir(document.getElementById("description"));



//elemenByClassName

// console.log(document.getElementsByClassName("oldImg"));
// console.log(document.getElementsByClassName("oldImg")[0]);

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i =0;i<smallImages.length;i++)
// {
//     smallImages[i].src = "spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }



// element_tag

//console.log(document.getElementsByTagName("p"))
//console.log(document.getElementsByTagName("p"))[1].innerText = "abc";
// document.getElementsByTagName("p")[1].innerText = "abc"; // change the text 



// Query_selectors

// console.log(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.log(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a"));

// inner text content

// let para = document.querySelector('p');
// // console.log(para.innerText);
// // console.log(para.textContent);
// para.innertext = "hii ankit"; // ye kewal output screen par joh text show hota h usko dega
// para.innerHTML = "<b> hii ankit<b>";
// let heading = document.querySelector('h1');
// console.log(heading);
// heading.innerHTML = `<u> ${heading.innerText} </u>`;  // ye humare html main changes kar deta h 

// Manipulating Attributes
// let img = document.querySelector('img');
// console.log(img);
// img.getAttribute('id');
// img.setAttribute('id','creation_3.jpeg');  // ydi hum joh id change kar denge toh joh h css bigad jayegi 
// img.setAttribute('src','creation_3.jpeg'); // by this we can change the image kyuki src update ho jta h isse

//Manipulating Style
// STYLE PROPERTY

// let heading = document.querySelector('h1');
// heading.style;
// heading.style.color = 'purple';
// heading.style.backgroundColor = 'yellow';

// let links = document.querySelectorAll(".box  a");
// for(let i = 0;i<links.length;i++){
//     links[i].style.color = "green";
// }
// for of ka use kar le
// for(link of links)
// {
//     link.style.color = "purple";
// }

// USING CLASSLIST

// let heading = document.querySelector('h1');
// console.log(heading.classList);
// heading.classList.add("green");
// heading.classList.remove('green');
// heading.classList.add('underline');
// console.log(heading.classList.contains('green'));
// heading.setAttribute('class','green');// setattribute keval single class value ko add karta h aur remove kar deta h other classvalues ko
// let box = document.querySelector(".box");
// console.log(box.classList);
// box.classList.add("yellowBg");
// console.log(box.classList);

// NAVIGATION

// let h4 = document.querySelector('h4');
// console.log(h4.parentElement);
// console.log(h4.children);
// let box = document.querySelector('.box');
// console.log(box.children);
// console.log(box.childElementCount);

// let ul = document.querySelector('ul');
// console.log(ul.parentElement);
// console.log(ul.childElementCount);
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);

// console.log(ul.children[2].previousElementSibling);
// let img = document.querySelector('img');
// img.previousElementSibling;
// console.log(img.previousElementSibling.style);
// img.previousElementSibling.style.color = 'green';

// ADDING ELEMENT
// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "hi kaise ho sabhi log mauj main";
// // appending p into body 
// let body = document.querySelector('body');
// body.appendChild(newP);
// let box = document.querySelector('.box');
// box.appendChild(newP);
// let btn = document.createElement('button');
// btn.innerText = "click me"
// box.appendChild(btn);
// newP.append("this is new text");
// newP.append(btn);
// newP.append("do not click this button");


// insertAdjacent
let btn = document.createElement('button');
btn.innerHTML = "NEW BUTTON!!!";
let p = document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn);
p.insertAdjacentElement('Afterbegin',btn);
p.insertAdjacentElement('beforeend',btn);
p.insertAdjacentElement('afterend',btn);