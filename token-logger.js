let token = "your token"; // PUT YOUR TOKEN HERE
// SET FUNCTION FOR LOGIN WITH TOKEN
function login(token) {
    setInterval(() => {
      document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }
// TOKEN LOGGER MAKED BY NOCTADETP
login(token);
// GITHUB https://github.com/noctadetp
