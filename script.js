document.getElementById('qr-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const input = document.getElementById('qr-input').value.trim(); // Get the input text
  const qrImage = document.getElementById('qr-image');
  const qrContainer = document.getElementById('qr-container');

  if (!input) {
    alert('Please enter text or a URL to generate a QR code.');
    return;
  }

  // Generate the QR code using the QR Code API
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(input)}`;

  qrImage.src = apiUrl; // Set the QR code image
  qrContainer.classList.remove('hidden'); // Show the QR code container
});

document.getElementById('back-btn').addEventListener('click', function () {
  document.getElementById('qr-container').classList.add('hidden'); // Hide QR code
  document.getElementById('qr-input').value = ''; // Clear the input field
});
