document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let skills = document.querySelectorAll('.category-card');
  
    skills.forEach(skill => {
      let text = skill.textContent.toLowerCase();
      skill.style.display = text.includes(filter) ? 'block' : 'none';
    });
  });