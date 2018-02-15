import React from 'react'

//FORMA ANTIGA

// // props param

// function Form(props) {
//     let form = document.createElement('form');

//     // destructuring

//     form.setAttribute('class', props.className);
    
//     // forEach

//     for (var i = 0; i < props.children.length; i++) {
//         form.appendChild(props.children[i]);
//     }

//     if (props.click) {
//         form.addEventListener("click", props.click);
//     }
    
//     return form;
// }

// export default Form;

//FORMA NOVA

export default (props, children) => React.createElement('form', props, children)