const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(elem => {
  elem.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  })
})