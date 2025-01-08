document.getElementById('qr-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('qr-input').value;
  const qrImage = document.getElementById('qr-image');
  const qrContainer = document.getElementById('qr-container');

  if (!input) return alert('Please enter text or a URL to generate a QR code.');

  // Generate QR code using Google Chart API
  const apiUrl = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(input)}&choe=UTF-8`;

  qrImage.src = apiUrl;
  qrContainer.classList.remove('hidden');
});

document.getElementById('back-btn').addEventListener('click', function () {
  document.getElementById('qr-container').classList.add('hidden');
  document.getElementById('qr-input').value = '';
});
