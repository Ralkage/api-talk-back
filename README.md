# API Talk Back
A simple Express app that will accept any JSON POST request and return the request headers and body in the response.

### Installation
```sh
npm i
npm run dev
```

### Example
Request Header and Body:
```json
POST http://localhost:4444/
content-type: application/json

{
    "hello": "world!"
}
```

Response Body:
```json
{
  "requestBody": {
    "hello": "world!"
  },
  "requestHeaders": {
    "user-agent": "vscode-restclient",
    "content-type": "application/json",
    "accept-encoding": "gzip, deflate",
    "content-length": "27",
    "host": "localhost:4444",
    "connection": "close"
  }
}
```

### Links
- [ExpressJS](https://expressjs.com)
- [Nodemon](https://nodemon.io)
