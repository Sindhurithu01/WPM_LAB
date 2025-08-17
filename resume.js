// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Create a dark mode toggle button
  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Toggle Dark Mode';
  darkModeButton.style.position = 'fixed';
  darkModeButton.style.top = '10px';
  darkModeButton.style.right = '10px';
  darkModeButton.style.padding = '10px';
  darkModeButton.style.zIndex = '9999';
  document.body.appendChild(darkModeButton);

  // Toggle dark mode
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Create a print button
  const printButton = document.createElement('button');
  printButton.textContent = 'Print Resume';
  printButton.style.position = 'fixed';
  printButton.style.top = '50px';
  printButton.style.right = '10px';
  printButton.style.padding = '10px';
  printButton.style.zIndex = '9999';
  document.body.appendChild(printButton);

  // Print event
  printButton.addEventListener('click', () => {
    window.print();
  });

  // Create scroll-to-top button
  const scrollTopButton = document.createElement('button');
  scrollTopButton.textContent = '↑ Top';
  scrollTopButton.style.position = 'fixed';
  scrollTopButton.style.bottom = '20px';
  scrollTopButton.style.right = '20px';
  scrollTopButton.style.padding = '8px';
  scrollTopButton.style.display = 'none';
  scrollTopButton.style.zIndex = '9999';
  document.body.appendChild(scrollTopButton);

  // Scroll to top behavior
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show/hide scroll-to-top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
});
