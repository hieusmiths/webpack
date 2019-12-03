const _  = require('lodash');
import './style.css'
import Cat from './cat.jpg'

  function component() {
    const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const MyCat  = new Image()
    MyCat.src = Cat
    element.appendChild(MyCat)
    return element;
  }

  document.body.appendChild(component());