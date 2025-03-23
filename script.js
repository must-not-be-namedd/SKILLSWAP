// Scroll to Top Functionality
const scrollTop = document.getElementById('scrollTop');

if (scrollTop) {
  window.onscroll = () => {
    if (window.scrollY > 200) {
      scrollTop.style.display = 'block';
    } else {
      scrollTop.style.display = 'none';
    }
  };

  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Form Submission Functionality
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const skillOffer = document.getElementById('skill-offer').value.trim();
    const skillLearn = document.getElementById('skill-learn').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && skillOffer && skillLearn) {
      alert(`Thank you for joining Skill Swap, ${name}! We'll connect you with suitable matches.`);
      form.reset(); // Reset form fields after submission
    } else {
      alert('Please fill out all required fields.');
    }
  });
}

// Chat Widget Functionality
const chatWidget = document.querySelector('.chat-widget');
if (chatWidget) {
  chatWidget.addEventListener('click', () => {
    alert('Chat functionality coming soon!');
  });
}

function sendFeedback() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var feedback = document.getElementById("feedback").value;

  var gmailLink = "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=kavanama185@gmail.com" +
      "&su=" + encodeURIComponent("Feedback from " + name) +
      "&body=" + encodeURIComponent(feedback + "\n\nFrom: " + name + " (" + email + ")");

  window.open(gmailLink, "_blank"); // Opens Gmail in a new tab
}
