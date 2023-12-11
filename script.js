// Initialize users array from localStorage or create an empty array
var users = JSON.parse(localStorage.getItem('users')) || [];

let menu = document.querySelector('#hamburger');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  menulist.classList.toggle('open');
}




//login


function isValidEmail(email) {
  // Regular expression for a valid email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Regular expression for a valid phone number (assuming 10 digits)
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function login() {
  var emailOrPhone = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (!emailOrPhone || !password) {
    alert('Please enter both email/phone and password.');
    return;
  }


  // Find the user with the entered email/phone and password
  var user = users.find(u => (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password);

  if (user) {
    // Redirect to the items page
    window.location.href = 'items.html';
  } else {
    alert('Invalid credentials. Please try again or sign up.');
  }
}


//sign up 

function isValidPhoneNumber(phoneNumber) {
  // Regular expression for a valid phone number (assuming a simple structure)
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}
function signup() {
  // Simple validation 
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  
  if (!name) {
    alert('Please enter your name.');
    return;
  }
// Check if the email or phone number already exists
if (users.some(u => u.email === email || u.phone === email)) {
  alert('This email or phone number is already registered. Please use a different one.');
  return;
}
  if ((isValidEmail(email) || isValidPhoneNumber(email)) && password && password === confirmPassword) {
    // Store user information in the array (for simplicity, use localStorage)
    var newUser = { name, email, password };
    users.push(newUser);

    // Save updated user array to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    // Redirect to the items page
    window.location.href = 'login.html';
  } else {
    if (!isValidEmail(email) && !isValidPhoneNumber(email)) {
      alert('Please enter a valid email or phone number.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      alert('Please enter a valid email or phone number and matching passwords.');
    }
  }
}

