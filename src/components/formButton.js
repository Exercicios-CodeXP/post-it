import React from 'react'

// FORMA ANTIGA

// props param

// function FormButton(props) {
//     let formButton = document.createElement('button');
    
//     // destructuring

//     formButton.setAttribute('class', props.className);
//     formButton.setAttribute('type', props.type);
    
//     formButton.addEventListener('click', props.click);

//     formButton.innerHTML = props.children;

//     return formButton;
// }

// export default FormButton;

// FORMA NOVA

export default (props, children) => React.createElement('button', props, children)