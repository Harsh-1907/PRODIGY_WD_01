window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#444'; 
  } else {
    navbar.style.backgroundColor = '#333'; 
  }
});

document.querySelectorAll('#navbar a').forEach(anchor => {
  anchor.addEventListener('mouseover', function() {
    this.style.fontWeight = 'bold';
  });

  anchor.addEventListener('mouseout', function() {
    this.style.fontWeight = 'normal';
  });
});
