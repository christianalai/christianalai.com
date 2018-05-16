document.addEventListener("DOMContentLoaded", function() {
  console.log('Sup! I hope to chat with you soon. Email me at hello@christianalai.com!')
  // Fade Out Body
  $(function() {
    $('body').removeClass('fade-out');
  });

  // Typing Effect
  let options = {
    strings: [
      "^800 crafting beautiful products.",
      "^800 telling the right story.",
      "^800 solving meaningful problems."],
    typeSpeed: 50
  };

  let typedElementExists =  $('.typed-element').length === 1;
  let typed = typedElementExists ? new Typed(".typed-element", options) : null;
});
