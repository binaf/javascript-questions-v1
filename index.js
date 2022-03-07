// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// console.log([1,2,3,4,5].at(3))

const dectectDeviceType = () =>
  /Andriod|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'mobile'
    : 'desktop';
// console.log(dectectDeviceType);
