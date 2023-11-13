
document.addEventListener('DOMContentLoaded', () => {
  const contactLink = document.getElementById('contact-Link');
  const aboutLink = document.getElementById('about-Link');
  const servicesLink = document.getElementById('services-Link');

  contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    const contactSection = document.querySelector('.section-biodata-1');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });

  aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    const aboutSection = document.querySelector('.section-biodata');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  servicesLink.addEventListener('click', (event) => {
    event.preventDefault();
    const servicesSection = document.querySelector('.services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  });
});


//back to top button //
const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}); 



// form validation section //
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form fields
    if (validateForm()) {
      // If the form is valid, you can submit it or perform other actions
      alert('Form submitted successfully!');
    } else {
      // If the form is not valid, you can display an error message or take other actions
      alert('Please fill out all required fields.');
    }
  });

  function validateForm() {
    // Add your specific form validation logic here
    const name = contactForm.elements['name'].value;
    const address = contactForm.elements['address'].value;
    const email = contactForm.elements['email'].value;

    // Example: Check if required fields are filled
    if (!name || !address || !email) {
      return false;
    }

    // You can add more validation rules as needed

    return true;
  }
});

