# API Talk Back
A simple yet sassy Express app that will talk back! Pass any query string params or raw JSON and it will return the request headers, body, or params in the response body.

### Installation
```sh
npm i
npm run dev
```

### Examples
**Request Type and Endpoint:**
`POST http://localhost:4444`

**Raw JSON Request Body:**
```json
{
    "hello": "world",
    "wordCount": 1,
    "isPositive": true,
    "anArrayOfObjects": [
        {
            "1": "one",
            "one": 1
        },
        {
            "2": "two",
            "two": 2
        }
    ],
    "aNestedObject": {
        "three": {
            "four": "five"
        }
    },
    "anObjectWithAnArray": [
        "six",
        7,
        "8"
    ]
}
```

**Raw JSON Response Body:**
```json
{
  "requestHeaders": {
    "user-agent": "vscode-restclient",
    "content-type": "application/json",
    "accept-encoding": "gzip, deflate",
    "content-length": "416",
    "host": "localhost:4444",
    "connection": "close"
  },
  "requestParams": {},
  "requestBody": {
    "hello": "world",
    "wordCount": 1,
    "isPositive": true,
    "anArrayOfObjects": [
      {
        "1": "one",
        "one": 1
      },
      {
        "2": "two",
        "two": 2
      }
    ],
    "aNestedObject": {
      "three": {
        "four": "five"
      }
    },
    "anObjectWithAnArray": [
      "six",
      7,
      "8"
    ]
  }
}
```

**Request Type and URL with Query String Params:**
`POST http://localhost:4444?name=Billy%20Bob&age=33`

**URL with Query String Params Response Body:**
```json
{
  "requestHeaders": {
    "user-agent": "vscode-restclient",
    "accept-encoding": "gzip, deflate",
    "host": "localhost:4444",
    "connection": "close",
    "content-length": "0"
  },
  "requestParams": {
    "name": "Billy Bob",
    "age": "33"
  },
  "requestBody": {}
}
```

**Raw JSON Request with URL Query String Params:**
`POST http://localhost:4444?name=Billy%20Bob&age=33`

```json
{
  "requestHeaders": {
    "user-agent": "vscode-restclient",
    "content-type": "application/json",
    "accept-encoding": "gzip, deflate",
    "content-length": "416",
    "host": "localhost:4444",
    "connection": "close"
  },
  "requestParams": {},
  "requestBody": {
    "hello": "world",
    "wordCount": 1,
    "isPositive": true,
    "anArrayOfObjects": [
      {
        "1": "one",
        "one": 1
      },
      {
        "2": "two",
        "two": 2
      }
    ],
    "aNestedObject": {
      "three": {
        "four": "five"
      }
    },
    "anObjectWithAnArray": [
      "six",
      7,
      "8"
    ]
  }
}
```

**Raw JSON Request with URL Query String Params Response Body:**
```json
{
  "requestHeaders": {
    "user-agent": "vscode-restclient",
    "content-type": "application/json",
    "accept-encoding": "gzip, deflate",
    "content-length": "416",
    "host": "localhost:4444",
    "connection": "close"
  },
  "requestParams": {
    "name": "Billy Bob",
    "age": "33"
  },
  "requestBody": {
    "hello": "world",
    "wordCount": 1,
    "isPositive": true,
    "anArrayOfObjects": [
      {
        "1": "one",
        "one": 1
      },
      {
        "2": "two",
        "two": 2
      }
    ],
    "aNestedObject": {
      "three": {
        "four": "five"
      }
    },
    "anObjectWithAnArray": [
      "six",
      7,
      "8"
    ]
  }
}
```

### Links
- [ExpressJS](https://expressjs.com)
- [Nodemon](https://nodemon.io)
