//get elements using id, class, tag name, querySelector, querySelectorAll,images,links,forms,forms elements
// let myDiv = document.getElementById('myDiv');
// console.log(myDiv);
// let myDivs = document.getElementsByClassName('myDiv');
// console.log(myDivs);
// let myDivs2 = document.getElementsByTagName('div');
// console.log(myDivs2);
// let myDivs3 = document.querySelectorAll('.myDiv');
// console.log(myDivs3);
// let myDivs4 = document.querySelector('.myDiv');
// console.log(myDivs4);
// let myImages = document.images;
// console.log(myImages);
// let myLinks = document.links;
// console.log(myLinks);
// let myForms = document.forms;
// console.log(myForms);
// let myForm = document.forms[0];
// console.log(myForm);

//get element attributes, set element attributes, remove element attributes
// let myDiv = document.getElementById('myDiv');
// console.log(myDiv.getAttribute('id'));
// console.log(myDiv.getAttribute('class'));
// console.log(myDiv.getAttribute('data-name'));
// console.log(myDiv.getAttribute('data-job'));
// console.log(myDiv.getAttribute('data-lang'));
// myDiv.setAttribute('data-lang','php');
// console.log(myDiv.getAttribute('data-lang'));
// myDiv.removeAttribute('data-lang');
// console.log(myDiv.getAttribute('data-lang'));

//practice of siblings, children, parent, firstChild, lastChild, firstElementChild, lastElementChild, nextSibling, previousSibling, nextElementSibling, previousElementSibling
// let myDiv = document.getElementById('myDiv');
// console.log(myDiv);
// console.log(myDiv.children);
// console.log(myDiv.children[0]);

// console.log(myDiv.firstElementChild);
// console.log(myDiv.lastElementChild);
// console.log(myDiv.nextElementSibling);
// console.log(myDiv.previousElementSibling);

// console.log(myDiv.firstChild);
// console.log(myDiv.lastChild);
// console.log(myDiv.nextSibling);
// console.log(myDiv.previousSibling);

//practice of innerText, innerHTML, textContent properties
// let myDiv = document.getElementById('myDiv');
// console.log(myDiv.innerText);
// console.log(myDiv.innerHTML);
// console.log(myDiv.textContent);

// myDiv.innerText = 'Hello World';
// myDiv.innerHTML = '<h1>Hello World</h1>';
// myDiv.textContent = 'Hello World';

//practice of css properties using style property
// let myDiv = document.getElementById('myDiv');
// myDiv.style.color = 'red';
// myDiv.style.backgroundColor = 'black';
// myDiv.style.fontSize = '50px';
// myDiv.style.padding = '20px';
// myDiv.style.margin = '20px';
// myDiv.style.border = '5px solid #000';

//practice of css properties using cssText property
// let myDiv = document.getElementById('myDiv');
// myDiv.style.cssText = 'color:red;background-color:black;font-size:50px;padding:20px;margin:20px;border:5px solid #000;';
// myDiv.style.cssText += 'color:red;background-color:black;font-size:50px;padding:20px;margin:20px;border:5px solid #000;';

//practice of create element, create text node, append child, remove child, replace child, insert before, clone node
// let myDiv = document.getElementById('myDiv');
// let myElement = document.createElement('h1');
// let myText = document.createTextNode('Hello World');
// myElement.appendChild(myText);
// myDiv.appendChild(myElement);
// myDiv.removeChild(myElement);
// myDiv.replaceChild(myElement,myDiv.children[0]);
// myDiv.insertBefore(myElement,myDiv.children[0]);
// let myElement2 = myElement.cloneNode(true);
// myDiv.appendChild(myElement2);

//converter to convert usd to egp and egp to usd
// let usd = document.getElementById('usd');
// let egp = document.getElementById('egp');
// let usdToEgp = document.getElementById('usdToEgp');
// let egpToUsd = document.getElementById('egpToUsd');
// usd.addEventListener('input',function(){
//     egp.value = usd.value * 15.7;
// })
// egp.addEventListener('input',function(){
//     usd.value = egp.value / 15.7;
// })
// usdToEgp.addEventListener('click',function(){
//     egp.value = usd.value * 15.7;
// })
// egpToUsd.addEventListener('click',function(){
//     usd.value = egp.value / 15.7;
// })

//practice of after , before, append, prepend, remove, empty, wrap, unwrap, wrapAll, wrapInner, unwrap
// let myDiv = document.getElementById('myDiv');
// let myElement = document.createElement('h1');
// let myText = document.createTextNode('Hello World');
// myElement.appendChild(myText);
// myDiv.after(myElement);
// myDiv.before(myElement);
// myDiv.append(myElement);
// myDiv.prepend(myElement);
// myDiv.remove();
// myDiv.empty();
// myDiv.wrap(myElement);
// myDiv.unwrap();
// myDiv.wrapAll(myElement);
// myDiv.wrapInner(myElement);
// myDiv.unwrap();

//practice of addClass, removeClass, toggleClass, hasClass

// let myDiv = document.getElementById('myDiv');
// myDiv.classList.add('text-center');
// myDiv.classList.remove('text-center');
// myDiv.classList.toggle('text-center');
// console.log(myDiv.classList.contains('text-center'));
