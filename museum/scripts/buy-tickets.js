const BASIC_TICKET_AMOUNT = 20,
      SENIOR_TICKET_AMOUNT = 10,
      TYPE_COEFFS = [1, 1.5, 2];

const rippleButtons = document.querySelectorAll('.ripple');

const reducerButtons = document.querySelectorAll('.ticket-reducer-button');
const increaserButtons = document.querySelectorAll('.ticket-increaser-button');
const ticketTypeInputs = Array.from(document.querySelectorAll('.ticket-type input'));
const ticketCountInputs = Array.from(document.querySelectorAll('.count-tickets input'));
const totalAmountElems = Array.from(document.querySelectorAll('.amount-value'));
const buyTicketsButton = document.querySelector('.buy-tickets-button');

const popupContainer = document.querySelector('.container-form-popup');
const popupForm = document.querySelector('.buy-tickets-form-popup');
const popupCloseButton = document.querySelector('.close-button');
const popupTicketInfoReducerButtons = document.querySelectorAll('.card-date-reducer-button');
const popupTicketInfoIncreaserButtons = document.querySelectorAll('.card-date-increaser-button');
const popupTicketTypeOptions = Array.from(document.querySelectorAll('.ticket-type-option-item'));
const popupTicketTypeSelectTitle = document.querySelector('.ticket-type-option-title');
const popupTicketTypeSelect = document.querySelector('.ticket-type-select');
popupTicketTypeSelect.setAttribute('isopen', 0);

popupTicketTypeSelect.addEventListener('click', function(e) {
  const isOpen = parseInt(this.getAttribute('isopen'));
  this.setAttribute('isopen', 1 - isOpen);
})

popupTicketTypeOptions.forEach(option => {
  option.addEventListener('click', function(e) {
    popupTicketTypeSelectTitle.textContent = this.textContent;
  })
})

rippleButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    const xCoord = e.clientX - this.getBoundingClientRect().left;
    const yCoord = e.clientY - this.getBoundingClientRect().top;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.left = `${xCoord}px`;
    circle.style.top = `${yCoord}px`;

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 1000);
  })
})

popupTicketInfoReducerButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    const input = this.closest('div').previousElementSibling;
    if (parseInt(input.value) > parseInt(input.min)) {
      const resultValue = parseInt(input.value) - 1;
      input.value = ( resultValue > 0 && resultValue < 10 ) ? '0' + resultValue : resultValue;
    };
  })
});

popupTicketInfoIncreaserButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    const input = this.closest('div').previousElementSibling;
    if (parseInt(input.value) < parseInt(input.max)) {
      const resultValue = input.value = parseInt(input.value) + 1;
      input.value = ( resultValue > 0 && resultValue < 10 ) ? '0' + resultValue : resultValue;
    }
  })
});

reducerButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    const input = this.closest('div').querySelector('input');
    if (parseInt(input.value) > parseInt(input.min)) input.value = parseInt(input.value) - 1;
  })
});

increaserButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    const input = this.closest('div').querySelector('input');
    if (parseInt(input.value) < parseInt(input.max)) input.value = parseInt(input.value) + 1;
  })
});

ticketTypeInputs.forEach(input => {
  input.addEventListener('click', function() {
    const inputClassName = input.className;
    const sameInputs = Array.from(document.querySelectorAll(`.${inputClassName}`));
    ticketTypeInputs.forEach(input => input.removeAttribute('checked'));
    sameInputs.forEach(input => input.setAttribute('checked', 'checked'));
    totalAmountElems.forEach(elem => elem.textContent = countActualSum());
  })
})

buyTicketsButton.addEventListener('click', function(e) {
  popupContainer.classList.remove('hidden-popup-form');
})

popupCloseButton.addEventListener('click', function(e) {
  popupContainer.classList.add('hidden-popup-form');
})