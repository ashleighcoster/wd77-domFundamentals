//! QUERYING THE DOM 

// //! GET ELEMENTS BY....

// //! BY ID:
// const header = document.getElementById('header');
//'header' can be named whatever for the const variable - doesn't affect what is in the document.''
// console.log(header);

// document.getElementById('header').style.color = 'green';
//same as above - don't need the getelemenentID
// header.style.color = 'green'; 
// header.innerText = 'Hello World'; 

// const aboutMe = document.getElementById('about-me'); 


// //! BY CLASS: 
// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = 'I changed error 2'; 
//will change the second one in the class since there are two - creates an array for those  

//Example 1 Looping: 
// for (let i = 0; i < errorList.length; i++) {
//     errorList[i].style.color = "red";
// }

//Example 2 Looping: will loop through all of the 'errors' = items in array --> in the 'errorlist'
// for(error of errorList){
//     error.style.color = 'green'; 
// }

//Example 3 Looping forEach // CAN NOT DO - doesn't work 
// errorList.forEach((error) => (error.style.color = 'purple')); 

// //! BY TAG NAME 
//<p> div> <td> <li> <h1> and so on - will scrub entire document for the tag you want and will give it to you in LIST format = array like structure that we can get into 

// const tags = document.getElementsByTagName("p");
//the tag goes into the '___' = p, h1, div....
// console.log(tags);

// tags[0].innerText = "I changed the inner text.";

// const liTags = document.getElementsByTagName('li');
// console.log(liTags);

// liTags[0].style.color = 'pink';

//CAN DO IT THIS WAY:
// liTags[0].style.fontStyle = 'italic';
// liTags[1].style.fontStyle = 'italic';

//OR LOOP IT: 
// for (list of liTags) {
//     list.style.fontStyle = 'italic';
// }

//OR LOOP IT ANOTHER WAY:
// for (let i = 0; i < liTags.length; i++) {
//     liTags[i].style.fontStyle = 'italic';
// }

//! QUERYSELECTOR()
/*
CSS Selector examples 
- H1
- #header
- .error-list
- ul > li
- body > div > ul > li:nt-child(2)

* *only returns ONE thing that matches the selector - will scan the whole document -- once it finds the first thing that matches it will STOP scanning** 
*/

// const header = document.querySelector('h1');
const header = document.querySelector('#header');
//can also use the '#header'
console.log(header); 

const errorList = document.querySelector('.error-list');
console.log(errorList);

const errorList2 = document.querySelector('body > div > ul > li:nth-child(2)'); 
//clicked on the element in the live server -> right clicked -> inspect -> right click -> copy -> copy selector and then paste 
console.log(errorList2);

//! QUERYSELECTORALL()
//will go through entire document and give an array back 
//can iterate over it - for loop and forEach can be done with these 
//gives node list back - can do forEach loop 

const headerTags = document.querySelectorAll('h1');
console.log(headerTags);

console.log(headerTags[1]); 

headerTags.forEach(h => {
    h.style.color = 'blue';
}); 

const listItems = document.querySelectorAll('.error-list');

listItems.forEach(li => {
    li.style.fontStyle = 'italic';
}); 