const messages = Array.from(document.querySelectorAll('.message'));
const nextBtn = document.getElementById('next-btn');
let currentStep = 0;

function showStep(step) {
  messages.forEach((msg, idx) => {
    msg.classList.toggle('message-active', idx === step);
  });
  nextBtn.disabled = (step >= messages.length - 1);
}

nextBtn.addEventListener('click', () => {
  if (currentStep < messages.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

showStep(currentStep);