# xml-json-format

![XML](http://zerico007.github.io/xml-json/images/xml-example.jpg)

![JSON](http://zerico007.github.io/xml-json/images/json-example.jpg)

# Installation
# USAGE

Run `npm install --save xml-json-format`

```javascript
const toJSON = require('xml-json-format')

const xml = 
'<?xml version="1.0" encoding="utf-8"?>' +
'<note importance="high" logged="true">' +
'    <title>Happy</title>' +
'    <todo>Work</todo>' +
'    <todo>Play</todo>' +
'</note>';

const jsonResult = toJSON(xml);

console.log(jsonResult);

/* expected: {
    "_declaration": {
        "_attributes": {
            "version": "1.0",
            "encoding": "utf-8"
        }
    },
    "note": {
        "_attributes": {
            "importance": "high",
            "logged": "true"
        },
        "title": "Happy",
        "todo": [
            "Work",
            "Play"
        ]
    }
} */
```



