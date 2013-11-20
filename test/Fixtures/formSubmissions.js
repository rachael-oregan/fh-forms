//Creating every field that is not a file to save.

module.exports = {
  "textFieldData":{
    "name":"textField",
    "helpText":"This is a text field",
    "type":"text",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "maxRepeat":5,
        "minRepeat":2
      },
      "validation":{
        "min":5,
        "max":20
      }
    }
  },
  "fileFieldData":{
    "name":"fileField",
    "helpText":"This is a file field",
    "type":"file",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "file_size": 100,
        "maxRepeat":5,
        "minRepeat":2
      }
    }
  },
  "photoFieldData":{
    "name":"photoField",
    "helpText":"This is a photo field",
    "type":"photo",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "photoHeight": 200,
        "photoWidth": 300,
        "photoQuality": 50,
        "maxRepeat":5,
        "minRepeat":2
      }
    }
  },
  "signatureFieldData":{
    "name":"signatureField",
    "helpText":"This is a signature field",
    "type":"signature",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "maxRepeat":5,
        "minRepeat":2
      }
    }
  },
  "textAreaFieldData":{
    "name":"textAreaField",
    "helpText":"This is a text area field",
    "type":"textarea",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "maxRepeat":5,
        "minRepeat":3
      },
      "validation":{
        "min":5,
        "max":20
      }
    }
  },
  "numberFieldData":{
    "name":"numberField",
    "helpText":"This is a number field",
    "type":"number",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "maxRepeat":5,
        "minRepeat":2
      },
      "validation":{
        "min":5,
        "max":100
      }
    }
  },
  "emailAddressFieldData":{
    "name":"emailField",
    "helpText":"This is a Email field",
    "type":"emailAddress",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "maxRepeat":5,
        "minRepeat":1
      },
      "validation":{}
    }
  },
  "radioFieldData":{
    "name":"radioField",
    "helpText":"This is a Radio field",
    "type":"radio",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "maxRepeat":2,
        "minRepeat":2,
        "options":[
          {
            "label": "radio1",
            "checked": false
          },
          {
            "label": "radio2",
            "checked": false
          },
          {
            "label": "radio3 checked",
            "checked": true
          },
          {
            "label": "radio4",
            "checked": false
          }
        ]
      }
    }
  },
  "dropdownFieldData":{
    "name":"dropdownField",
    "helpText":"This is a dropdown field",
    "type":"dropdown",
    "repeating":true,
    "required":false,
    "fieldOptions":{
      "definition":{
        "maxRepeat":3,
        "minRepeat":2,
        "options":[
          {
            "label": "dropdownVal1",
            "checked": false
          },
          {
            "label": "dropdownVal2",
            "checked": false
          },
          {
            "label": "dropdownVal3",
            "checked": true
          },
          {
            "label": "dropdownVal4",
            "checked": false
          }
        ]
      }
    }
  },
  "matrixFieldData":{
    "name":"matrixField",
    "helpText":"This is a Matrix field",
    "type":"matrix",
    "repeating":true,
    "required":false,
    "fieldOptions": {
      "definition": {
        "rows":[
          {
            "matRow1":3
          },
          {
            "matRow2":3
          },
          {
            "matRow3":3
          },
          {
            "matRow4":3
          },
          {
            "matRow5":3
          },
          {
            "matRow6":3
          }
        ],
        "columns":[
          {
            "matCol1":1
          },
          {
            "matCol2":2
          },
          {
            "matCol3":3
          },
          {
            "matCol4":4
          },
          {
            "matCol5":6
          }
        ],
        "maxRepeat":2,
        "minRepeat":2
      },
      "validation": {}
    }
  },
  "checkboxFieldData":{
    "name":"checkboxField",
    "helpText":"This is a Checkbox field",
    "type":"checkbox",
    "repeating":true,
    "required":false,
    "fieldOptions" : {
      "definition": {
        "checkboxChoices":[
          {
            "red":{
              "value":1,
              "checked":true
            }
          },
          {
            "blue":{
              "value":2,
              "checked":false
            }
          },
          {
            "green":{
              "value":3,
              "checked":false
            }
          },
          {
            "purple":{
              "value":4,
              "checked":false
            }
          },
          {
            "black":{
              "value":5,
              "checked":true
            }
          }
        ],
        "minRepeat":2,
        "maxRepeat":3

      },
      "validation": {
        "min":2,
        "max":3
      }
    }
  },
  "locationLatLongFieldData": {
    "name":"locationLatLongField",
    "helpText":"This is a locationLatLong field",
    "type":"location",
    "repeating":true,
    "required":false,
    "fieldOptions": {
      "locationUnit" : "latLong",
      "maxRepeat":4,
      "minRepeat":2
    },
    "validation" : {}
  },
  "locationNorthEastFieldData": {
    "name":"locationNorthEastField",
    "helpText":"This is a locationNorthEast field",
    "type":"location",
    "repeating":true,
    "required":false,
    "fieldOptions": {
      "locationUnit" : "northEast",
      "maxRepeat":4,
      "minRepeat":2
    },
    "validation" : {}
  },
  "locationMapFieldData":{
    "name":"locationMapField",
    "helpText":"This is a locationMap field",
    "type":"locationMap",
    "repeating":true,
    "required":false,
    "fieldOptions": {
      "definition" : {
        "maxRepeat":6,
        "minRepeat":1
      },
      "validation" : {}
    }
  },
  "dateFieldData":{
    "name":"dateField",
    "helpText":"This is a date field",
    "type":"dateTime",
    "repeating":true,
    "required":false,
    "fieldOptions": {
      "dateTimeUnit": "date",
      "definition" : {
        "timeAutopopulate":true,
        "maxRepeat":6,
        "minRepeat":1
      },
      "validation" : {}
    }
  },
  "timeFieldData":{
    "name":"timeField",
    "helpText":"This is a time field",
    "type":"dateTime",
    "repeating":true,
    "required":false,
    "fieldOptions": {
      "dateTimeUnit": "time",
      "definition" : {
        "timeAutopopulate":false,
        "maxRepeat":6,
        "minRepeat":2
      },
      "validation" : {}
    }
  },
  "dateTimeFieldData":{
    "name":"dateTimeField",
    "helpText":"This is a dateTime field",
    "type":"dateTime",
    "repeating":true,
    "required":false,
    "fieldOptions": {
      "dateTimeUnit": "dateTime",
      "definition" : {
        "timeAutopopulate":true,
        "maxRepeat":6,
        "minRepeat":1
      },
      "validation" : {}
    }
  },
  "sectionBreakFieldData":{
    "name":"sectionBreakField",
    "helpText":"This is a sectionBreak field",
    "type":"sectionBreak",
    "repeating":false,
    "required":false,
    "fieldOptions": {}
  },
  "sectionBreak2FieldData":{
    "name":"sectionBreak2Field",
    "helpText":"This is another sectionBreak field",
    "type":"sectionBreak",
    "repeating":false,
    "required":false,
    "fieldOptions": {}
  }
}