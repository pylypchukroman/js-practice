// const body = document.body;

// console.log(body.childNodes);
// console.log(body.children[1].firstElementChild.nextElementSibling.parentElement);

// console.log(body.querySelector('#test-i'));
// console.log(body.querySelectorAll('.test-class'));
// console.log(body.querySelector('p [test-attr="15"]'));

// console.log(document.getElementById('test-i'));
// console.log(document.getElementsByClassName('test-class'));
// console.log(document.getElementsByTagName('p'));

// console.log(document.querySelector('p').textContent);
// console.log(document.querySelector('p').innerHTML);
// console.log(document.querySelector('p').outerHTML);

// const span = document.querySelector('span.test-15');

// console.log([...span.classList]);

// span.classList.add('hello');
// span.classList.remove('test-15');
// span.classList.toggle('test-15');
// span.classList.replace('test-class', 'new-test-class');

// console.log(span.classList.contains('test-class'));
// console.log(span.classList.contains('hello'));

// console.log([...span.classList]);

// const h1 = document.querySelector('h1');

// h1.style.fontFamily = "arial";
// h1.style.fontSize = "40px";
// h1.style.backgroundColor = "tomato";
// h1.style.padding = "10px";
// h1.style.textAlign = "center";

// const nowPadding = parseInt(h1.style.padding);

// h1.style.padding = `${nowPadding+5}px`;

// const b = document.querySelector('b.exapmle-class');

// console.log(b.hasAttribute('test-attr'));
// console.log(b.getAttribute('test-attr'));
// b.setAttribute('new-test-attr', '962');
// b.removeAttribute('test-attr');

// console.log(b.attributes);

// console.log(b);

// const a = document.querySelector('a');

// console.log(a.href);
// console.log(a.getAttribute('href'));
// a.setAttribute('href', 'link-test');
// console.log(a.href);

// const divNode = document.createElement('div');
// ​
// divNode.textContent = 'new Div element';
// ​
// divNode.classList.add('sipmle-class');
// ​
// divNode.setAttribute('align', 'center');
// ​
// divNode.style.backgroundColor = 'green';
// divNode.style.width = `100px`;
// divNode.style.height = `100px`;
// ​
// divNode.dataset.action = 'test-15';

// console.log(divNode.dataset.action);

// divNode.setAttribute('data-new-action', 'test-96');

// console.log(divNode.dataset.newAction);

// const divNodeClone = divNode.cloneNode(true);

// console.log(divNode);

// document.body.append(divNode); // Elem
// document.body.prepend(divNode); // Elem
// document.querySelector('h1').after(divNode); // Elem
// document.querySelector('h1').before(divNodeClone); // Elem
// ​
// divNode.remove();
// ​
// const pNode = document.querySelector('p');

// pNode.innerHTML = divNode.outerHTML; // Text
// pNode.innerHTML = pNode.innerHTML + divNode.outerHTML;
// pNode.innerHTML += divNode.outerHTML;
// pNode.innerHTML += divNode.outerHTML;
// pNode.innerHTML += divNode.outerHTML;
// pNode.outerHTML = '<span>test</span>';

// const markup = '<span>55</span>';
// ​
// pNode.textContent = 'TEST TEXT' // Text
// ​
// pNode.insertAdjacentHTML("beforeend", markup); // Text
// pNode.insertAdjacentText("beforeend", markup); // Text
// pNode.insertAdjacentElement("beforeend", divNode); // Elem