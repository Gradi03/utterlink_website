document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section id
        const targetSection = document.querySelector(targetId); // Find the target section
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
    });
});

// Toggle navbar for mobile view
document.getElementById('nav-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    this.classList.toggle('active');
});


function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
    questionElement.classList.toggle('open');
  }
  

