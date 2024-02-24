document.addEventListener("DOMContentLoaded", function() {
    var generateButton = document.getElementById('generateButton');
    var inputText = document.getElementById('inputText');
    var qrCodeDiv = document.getElementById('qrcode');
  
    generateButton.addEventListener('click', function() {
      var text = inputText.value.trim();
      if (!text) {
        alert('Por favor, insira um texto para gerar o QR code.');
        return;
      }
      qrCodeDiv.innerHTML = '';
      new QRCode(qrCodeDiv, {
        text: text,
        width: 200,
        height: 200
      });
    });
  });
  