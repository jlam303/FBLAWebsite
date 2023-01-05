const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  const firstName = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;
  const email = document.querySelector('#email').value;
  const phoneNumber = document.querySelector('#phonenumber').value;
  const groupSize = document.querySelector('#size').value;
  const specialRequest = document.querySelector('#specialrequest').value;
  const reservationDate = document.querySelector('#reservationdate').value;
  const reservationTime = document.querySelector('#reservedtime').value;

  console.log(firstName, lastName, email, phoneNumber, groupSize, specialRequest, reservationDate, reservationTime);

  alert(`Thank you for your reservation, ${firstName}! Your reservation details are as follows:\n\nGroup Size: ${groupSize}\nSpecial Request: ${specialRequest}\nReservation Date: ${reservationDate}\nReservation Time: ${reservationTime}`);
});