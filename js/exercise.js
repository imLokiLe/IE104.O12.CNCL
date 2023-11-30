// scroll smooth
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
  
    if (section) {
      section.scrollIntoView({
        behavior: "smooth" // Để có hiệu ứng mượt mà, có thể sử dụng "auto" nếu không cần hiệu ứng
      });
    }
  }