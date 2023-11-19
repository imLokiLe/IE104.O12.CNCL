window.addEventListener('scroll', () => {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Update the rotation of the image based on the scroll position
    const rotationValue = scrollPosition / 5; // Adjust the divisor for the rotation speed
    document.querySelector('.img_rotate').style.transform = `rotate(${rotationValue}deg)`;
  });