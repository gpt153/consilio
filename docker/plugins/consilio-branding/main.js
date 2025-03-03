// Consilio branding override
// This script replaces "FREE EDITION" with "CONSILIO" in the UI

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Function to replace the text
  function replaceBrandingText() {
    // Find all elements with text content "FREE EDITION"
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      if (element.childNodes && element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
        if (element.textContent === 'FREE EDITION') {
          element.textContent = 'CONSILIO';
        }
      }
    });
  }

  // Run initially
  replaceBrandingText();

  // Set up a MutationObserver to watch for DOM changes
  const observer = new MutationObserver(function(mutations) {
    replaceBrandingText();
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, { childList: true, subtree: true });
}); 