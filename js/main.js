document.addEventListener("DOMContentLoaded", function() {
  // Fade Out Body
  $(function() {
    $('body').removeClass('fade-out');
  });

  // Typing Effect
  var options = {
    strings: [
      "^800 crafting beautiful products.",
      "^800 telling the right story.",
      "^800 solving meaningful problems."],
    typeSpeed: 50
  };

  var typed = new Typed(".typed-element", options);
  console.log('Sup! I hope to chat with you soon. Email me at hello@christianalai.com!')
});
