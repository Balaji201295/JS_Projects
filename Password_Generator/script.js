const passwordBox = document.getElementById("password");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%&*()_+{}[]><|/-=?";
const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  const getRandomChar = (chars) =>
    chars[Math.floor(Math.random() * chars.length)];

  let password = getRandomChar(upperCase);
  password += getRandomChar(lowerCase);
  password += getRandomChar(number);
  password += getRandomChar(symbol);

  while (length > password.length) {
    password += getRandomChar(allChars);
  }
  passwordBox.value = password;
};

const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
};
