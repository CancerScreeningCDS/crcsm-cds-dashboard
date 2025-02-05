// Use a custom logger application
const LOGGER_HOST = process.env?.REACT_APP_LOGGER_HOST || "https://localhost"
const LOGGER_PORT = process.env?.REACT_APP_LOGGER_PORT || "4040";
const logger_url = `${LOGGER_HOST}:${LOGGER_PORT}/log`;
console.log("Logging at", logger_url);

const certPath = 'server.cert';
const keyPath = 'server.key';

const cert = fs.readFileSync(certPath);
const key = fs.readFileSync(keyPath);
console.log("Loaded certificate: ", certPath);

export async function logMsg(msg) {
  try {
    const response = await fetch(logger_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': msg.length
      },
      mode:'cors',
      body: JSON.stringify(msg),
      cert: cert,
      key: key
    }).then(response => {
              let cachedPostData = response.json();
    });
  } catch (e) {
    console.log("No response from log service")
  }

}
