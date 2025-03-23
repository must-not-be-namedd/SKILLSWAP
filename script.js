document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let skills = document.querySelectorAll('.category-card');
  
    skills.forEach(skill => {
      let text = skill.textContent.toLowerCase();
      skill.style.display = text.includes(filter) ? 'block' : 'none';
   });
});
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

