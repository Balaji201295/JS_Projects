const generateQR = () => {
  const qrTextValue = qrText.value;

  if (qrTextValue.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrTextValue}`;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => qrText.classList.remove("error"), 1000);
  }
};

const imgBox = document.getElementById("img-box");
const qrImage = document.getElementById("qr-image");
const qrText = document.getElementById("qr-text");
