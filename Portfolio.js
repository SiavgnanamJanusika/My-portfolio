
  let roleIndex = 0;
  let charIndex = 0;
  
  const typingElement = document.getElementById("typing");
  
  function typeEffect() {
  
    if (charIndex < roles[roleIndex].length) {
  
      typingElement.innerHTML += roles[roleIndex].charAt(charIndex);
  
      charIndex++;
  
      setTimeout(typeEffect, 100);
  
    } else {
  
      setTimeout(deleteEffect, 1500);
  
    }
  
  }
  
  function deleteEffect() {
  
    if (charIndex > 0) {
  
      typingElement.innerHTML =
        roles[roleIndex].substring(0, charIndex - 1);
  
      charIndex--;
  
      setTimeout(deleteEffect, 50);
  
    } else {
  
      roleIndex++;
  
      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
  
      setTimeout(typeEffect, 300);
  
    }
  
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
  });
  
 
  function openCVModal() {
  
    document.getElementById("cvModal")
      .classList.add("show");
  
  }
  
  function closeCVModal() {
  
    document.getElementById("cvModal")
      .classList.remove("show");
  
  }
  
  function closeCVModalOutside(event) {
  
    if (event.target.id === "cvModal") {
  
      closeCVModal();
  
    }
  
  }
  
  
 
  
  const sections = document.querySelectorAll("section");
  
  window.addEventListener("scroll", () => {
  
    sections.forEach(section => {
  
      const top = section.getBoundingClientRect().top;
  
      if (top < window.innerHeight - 100) {
  
        section.classList.add("show-section");
  
      }
  
    });
  
  });
  
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
    anchor.addEventListener("click", function (e) {
  
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
          behavior: "smooth"
        });
  
    });
  
  });
  
 
  window.addEventListener("scroll", () => {
  
    const navbar = document.getElementById("navbar");
  
    if (window.scrollY > 50) {
  
      navbar.classList.add("navbar-scroll");
  
    } else {
  
      navbar.classList.remove("navbar-scroll");
  
    }
  
  });
  
  document.querySelector(".primary-btn")
  .addEventListener("click", () => {
  
    document.querySelector("#projects")
      .scrollIntoView({
        behavior: "smooth"
      });
  
  });
  
  document.querySelector(".secondary-btn")
  .addEventListener("click", () => {
  
    document.querySelector("#contact")
      .scrollIntoView({
        behavior: "smooth"
      });
  
  });