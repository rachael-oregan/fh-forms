var assert = require('assert');
var util = require('util');

//Some test data
var mockSubmissions = require('../../Fixtures/mockSubmissions.js');

var complexSubmission1 = mockSubmissions.complexSubmission1;
var complexSubmissionOrder = mockSubmissions.complexSubmissionOrder;

var exportHelper = require('../../../lib/impl/submissionExportHelper/submissionsToCSV.js');

module.exports = {
  "it_should_export_csv_for_basic_submission" : function(finish) {
    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "test, entry"
        ]
      }],
      "formSubmittedAgainst":{
        "name" : "testForm",
        "_id": "simple1",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": false
            }]
        }]
      }
    }];


    exportHelper.submissionsToCSV({
      fieldHeader: "name",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,single text field', "Expected header to be formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp, single text field, not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),"test, entry"', "Expected first line to be testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),test entry, not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_for_basic_submission_using_field_codes":  function(finish) {
    var sub = [{
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "test, entry"
        ]
      }],
      "formSubmittedAgainst":{
        "name" : "testForm",
        "_id": "simple1",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "fieldCode": "fieldCodeText",
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": false
            }]
        }]
      }
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "fieldCode",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,fieldCodeText', "Expected header to be 'fieldCodeText', not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),"test, entry"', "Expected first line to be 'test entry', not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_for_basic_submission_no_field_code": function(finish) {
    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "test, entry"
        ]
      }],
      "formSubmittedAgainst":{
        "name" : "testForm",
        "_id": "simple1",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": false
            }]
        }]
      }
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "fieldCode",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,single text field', "Expected header to be '\"single \"\"text\"\" field', not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),"test, entry"', "Expected first line to be 'test entry', not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_file_url_and_file_name": function(finish){

    var formSubmittedAgainst = {
      "name" : "testForm",
      "_id": "simple1",
      "pages":[{
        "fields":[
          {
            "name": 'textField1',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000003",
            "repeating": false
          },
          {
            "name": 'fileField1',
            "required": false,
            "type": "file",
            "_id": "52a65af9a43843f938000004",
            "repeating": false
          },{
            "name": 'textField2',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000005",
            "repeating": false
          }]
      }]
    };

    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "testEntry1"
        ]
      },  {
        "fieldId": "52a65af9a43843f938000004",
        "fieldValues": [
          {
            contentType: "binary",
            downloadUrl: "/api/v2/forms/submission/file/5448c0119004f04514000001",
            fieldId: "5448bf330f6a34bd449f2713",
            fileName: "file1.png",
            fileSize: 567941,
            fileType: "image/png",
            fileUpdateTime: 1414000943000,
            groupId: "5448c0119004f04514000001",
            hashName: "filePlaceHolder72e9d039ff0afec1d0a6a4be797c4402"
          }
        ]
      },{
        "fieldId": "52a65af9a43843f938000005",
        "fieldValues": [
          "testEntry2"
        ]
      }],
      "formSubmittedAgainst": formSubmittedAgainst
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "fieldCode",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,fileField1-name,fileField1-url,textField2', "Expected header to be 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,fileField1-name,fileField1-url,textField2, not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,file1.png,dummyurl5448c0119004f04514000001,testEntry2', "Expected first line to be 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),, not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_file_url_and_file_name_repeating_file": function(finish){

    var formSubmittedAgainst = {
      "name" : "testForm",
      "_id": "simple1",
      "pages":[{
        "fields":[
          {
            "name": 'textField1',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000003",
            "repeating": false
          },
          {
            "name": 'fileField1',
            "required": false,
            "type": "file",
            "_id": "52a65af9a43843f938000004",
            "repeating": true,
            "fieldOptions":{
              "definition":{
                "maxRepeat":2,
                "minRepeat":1
              }
            }
          },{
            "name": 'textField2',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000005",
            "repeating": false
          }]
      }]
    };

    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "testEntry1"
        ]
      },  {
        "fieldId": "52a65af9a43843f938000004",
        "fieldValues": [
          {
            contentType: "binary",
            downloadUrl: "/api/v2/forms/submission/file/5448c0119004f04514000001",
            fieldId: "5448bf330f6a34bd449f2713",
            fileName: "file1.png",
            fileSize: 567941,
            fileType: "image/png",
            fileUpdateTime: 1414000943000,
            groupId: "5448c0119004f04514000001",
            hashName: "filePlaceHolder72e9d039ff0afec1d0a6a4be797c4402"
          },{
            contentType: "binary",
            downloadUrl: "/api/v2/forms/submission/file/5448c0119004f04514000002",
            fieldId: "5448bf330f6a34bd449f2713",
            fileName: "file2.png",
            fileSize: 567941,
            fileType: "image/png",
            fileUpdateTime: 1414000943000,
            groupId: "5448c0119004f04514000002",
            hashName: "filePlaceHolder72e9d039ff0afec1d0a6a4be797c4403"
          }
        ]
      },{
        "fieldId": "52a65af9a43843f938000005",
        "fieldValues": [
          "testEntry2"
        ]
      }],
      "formSubmittedAgainst": formSubmittedAgainst
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "fieldCode",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,fileField1-1-name,fileField1-1-url,fileField1-2-name,fileField1-2-url,textField2', "Expected header to be formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,fileField1-1-name,fileField1-1-url,fileField1-2-name,fileField1-2-url,textField2, not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,file1.png,dummyurl5448c0119004f04514000001,file2.png,dummyurl5448c0119004f04514000002,testEntry2', "Expected first line to be 'testEntry1,file1.png,dummyurl5448c0119004f04514000001,file2.png,dummyurl5448c0119004f04514000002,testEntry2', not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_file_url_and_file_name_repeating_file_no_entry": function(finish){

    var formSubmittedAgainst = {
      "name" : "testForm",
      "_id": "simple1",
      "pages":[{
        "fields":[
          {
            "name": 'textField1',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000003",
            "repeating": false
          },
          {
            "name": 'fileField1',
            "required": false,
            "type": "file",
            "_id": "52a65af9a43843f938000004",
            "repeating": true,
            "fieldOptions":{
              "definition":{
                "maxRepeat":2,
                "minRepeat":1
              }
            }
          },{
            "name": 'textField2',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000005",
            "repeating": false
          }]
      }]
    };

    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "testEntry1"
        ]
      },  {
        "fieldId": "52a65af9a43843f938000004",
        "fieldValues": [
          {
            contentType: "binary",
            downloadUrl: "/api/v2/forms/submission/file/5448c0119004f04514000001",
            fieldId: "5448bf330f6a34bd449f2713",
            fileName: "file1.png",
            fileSize: 567941,
            fileType: "image/png",
            fileUpdateTime: 1414000943000,
            groupId: "5448c0119004f04514000001",
            hashName: "filePlaceHolder72e9d039ff0afec1d0a6a4be797c4402"
          }
        ]
      },{
        "fieldId": "52a65af9a43843f938000005",
        "fieldValues": [
          "testEntry2"
        ]
      }],
      "formSubmittedAgainst": formSubmittedAgainst
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "fieldCode",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,fileField1-1-name,fileField1-1-url,fileField1-2-name,fileField1-2-url,textField2', "Expected header to be formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,fileField1-1-name,fileField1-1-url,fileField1-2-name,fileField1-2-url,textField2, not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,file1.png,dummyurl5448c0119004f04514000001,,,testEntry2', "Expected first line to be testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,file1.png,dummyurl5448c0119004f04514000001,,,testEntry2, not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_barcode_format_and_text": function(finish){

    var formSubmittedAgainst = {
      "name" : "testForm",
      "_id": "simple1",
      "pages":[{
        "fields":[
          {
            "name": 'textField1',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000003",
            "repeating": false
          },
          {
            "name": 'barcodeField1',
            "required": false,
            "type": "barcode",
            "_id": "52a65af9a43843f938000004",
            "repeating": false
          },{
            "name": 'textField2',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000005",
            "repeating": false
          }]
      }]
    };

    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "testEntry1"
        ]
      },  {
        "fieldId": "52a65af9a43843f938000004",
        "fieldValues": [
          {
            text:"barcodeValue",
            format: "barcodeFormat"
          }
        ]
      },{
        "fieldId": "52a65af9a43843f938000005",
        "fieldValues": [
          "testEntry2"
        ]
      }],
      "formSubmittedAgainst": formSubmittedAgainst
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "fieldCode",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,barcodeField1-format,barcodeField1-text,textField2', "Expected header to be formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,barcodeField1-format,barcodeField1-text,textField2, not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,barcodeFormat,barcodeValue,testEntry2', "Expected first line to be testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,file1.png,dummyurl5448c0119004f04514000001,testEntry2, not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_barcode_format_and_text_name_repeating_barcode": function(finish){

    var formSubmittedAgainst = {
      "name" : "testForm",
      "_id": "simple1",
      "pages":[{
        "fields":[
          {
            "name": 'textField1',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000003",
            "repeating": false
          },
          {
            "name": 'barcodeField1',
            "required": false,
            "type": "barcode",
            "_id": "52a65af9a43843f938000004",
            "repeating": true,
            "fieldOptions":{
              "definition":{
                "maxRepeat":2,
                "minRepeat":1
              }
            }
          },{
            "name": 'textField2',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000005",
            "repeating": false
          }]
      }]
    };

    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "testEntry1"
        ]
      },  {
        "fieldId": "52a65af9a43843f938000004",
        "fieldValues": [
          {
            format: "barcodeFormat1",
            text: "barcodeValue1"
          },{
            format: "barcodeFormat2",
            text: "barcodeValue2"
          }
        ]
      },{
        "fieldId": "52a65af9a43843f938000005",
        "fieldValues": [
          "testEntry2"
        ]
      }],
      "formSubmittedAgainst": formSubmittedAgainst
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "fieldCode",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,barcodeField1-1-format,barcodeField1-1-text,barcodeField1-2-format,barcodeField1-2-text,textField2', "Expected header to be formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,barcodeField1-1-format,barcodeField1-1-text,barcodeField1-2-format,barcodeField1-2-text,textField2, not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,barcodeFormat1,barcodeValue1,barcodeFormat2,barcodeValue2,testEntry2', "Expected first line to be testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,barcodeFormat1,barcodeValue1,barcodeFormat2,barcodeValue2,testEntry2, not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_barcode_format_and_text_repeating_barcode_no_entry": function(finish){

    var formSubmittedAgainst = {
      "name" : "testForm",
      "_id": "simple1",
      "pages":[{
        "fields":[
          {
            "name": 'textField1',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000003",
            "repeating": false
          },
          {
            "name": 'barcodeField1',
            "required": false,
            "type": "barcode",
            "_id": "52a65af9a43843f938000004",
            "repeating": true,
            "fieldOptions":{
              "definition":{
                "maxRepeat":2,
                "minRepeat":1
              }
            }
          },{
            "name": 'textField2',
            "required": false,
            "type": "text",
            "_id": "52a65af9a43843f938000005",
            "repeating": false
          }]
      }]
    };

    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "testEntry1"
        ]
      },  {
        "fieldId": "52a65af9a43843f938000004",
        "fieldValues": [
          {
            format: "barcodeFormat",
            text: "barcodeValue"
          }
        ]
      },{
        "fieldId": "52a65af9a43843f938000005",
        "fieldValues": [
          "testEntry2"
        ]
      }],
      "formSubmittedAgainst": formSubmittedAgainst
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "fieldCode",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,barcodeField1-1-format,barcodeField1-1-text,barcodeField1-2-format,barcodeField1-2-text,textField2', "Expected header to be formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,textField1,barcodeField1-1-format,barcodeField1-1-text,barcodeField1-2-format,barcodeField1-2-text,textField2, not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),testEntry1,barcodeFormat,barcodeValue,,,testEntry2', "Expected first line to be 'testEntry1,barcodeFormat,barcodeValue,,,testEntry2', not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_csv_with_null_value_in_submission": function(finish) {
    var sub = [{
      "formName": "testForm",
      "formId": "simple1withnull",
      "_id" : "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          null
        ]
      }],
      "formSubmittedAgainst":{
        "name" : "testForm",
        "_id": "simple1withnull",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": false
            }]
        }]
      }
    }];

/*
 * I think we might need to rethink this test as the headers will ALWAYS return....
 */
    exportHelper.submissionsToCSV({
      fieldHeader: "name",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,single text field', "Expected header to be 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,single text field', not: " + util.inspect(lines[0]));
      assert.equal(lines[1], 'testForm,simple1withnull,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),', "Expected single value to be '' (empty string), not: " + lines[1]);
      finish();
    });
  },
  "it_should_export_multiple_submissions_with_different_levels_of_repitition": function(finish){
    var sub = [{
      "formName": "testForm",
      "formId": "simple1withchangingrepitition",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "text1Sub1"
        ]
      }],
      "formSubmittedAgainst":{
        "name" : "testForm",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": false
            }]
        }]
      }
    }, {
      "formName": "testForm2",
      "formId": "simple1withchangingrepitition",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "text1Sub2",
          "text2Sub2",
          "text3Sub2",
          "text4Sub2"
        ]
      }],
      "formSubmittedAgainst":{
        "name" : "testForm2",
        "_id": "simple1withchangingrepitition",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": true,
              "fieldOptions":{
                "definition":{
                  "maxRepeat":4,
                  "minRepeat":2
                }
              }
            }]
        }]
      }
    }, {
      "formName": "testForm3",
      "formId": "simple1withchangingrepitition",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "text1Sub3",
          "text2Sub3"
        ]
      }],
      "formSubmittedAgainst":{
        "name" : "testForm3",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": true,
              "fieldOptions":{
                "definition":{
                  "maxRepeat":3,
                  "minRepeat":1
                }
              }
            }]
        }]
      }
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "name",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');

      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,single text field-1,single text field-2,single text field-3,single text field-4');
      assert.equal(lines[1], 'testForm,simple1withchangingrepitition,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),text1Sub1,,,');
      assert.equal(lines[2], 'testForm2,simple1withchangingrepitition,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),text1Sub2,text2Sub2,text3Sub2,text4Sub2');
      assert.equal(lines[3], 'testForm3,simple1withchangingrepitition,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),text1Sub3,text2Sub3,,');

      finish();
    });
  },
  "it_should_export_multiple_forms": function(finish) {
    var sub = [{
      "formName": "testForm",
      "formId": "simple1",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "name":"simple1",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "test entry"
        ]
      }],
      "formSubmittedAgainst":{
        "name":"simple1",
        "_id": "simple1",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": false
            }]
        }]
      }
    }, {
      "_id": "56a8d23043ae4f64324cdcc6",
      "name":"simple2",
      "formId": "simple2",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": [
          "test entry"
        ]
      }],
      "formSubmittedAgainst":{
        "name":"simple2",
        "_id": "simple2",
        "pages":[{
          "fields":[
            {
              "name": 'single text field',
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": false
            }]
        }]
      }
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "name",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var keys = Object.keys(csvs);

      assert.ok(keys.length, 2);
      assert.ok(keys[0].indexOf('simple1') !== -1, keys[0]);
      assert.ok(keys[1].indexOf('simple2') !== -1, keys[0]);
      finish();
    });
  },
  "it_should_export_csv_for_repeating_submission": function(finish) {
    var sub = [{
      "formName": "testForm",
      "formId": "simple2",
      "_id": "56a8d23043ae4f64324cdcc5",
      "submissionCompletedTimestamp" : "Wed Jan 27 2016 14:20:32 GMT+0000 (UTC)",
      "appCloudName" : "sampleCloudAppName",
      "deviceId"  : "985FD579305D4D8EB4168641813806A5",
      "deviceIPAddress" : "127.0.0.1",
      "updatedTimestamp" : "Wed Jan 27 2016 14:22:41 GMT+0000 (UTC)",
      "formFields": [{
        "fieldId": "52a65af9a43843f938000003",
        "fieldValues": ["test entry1", "test entry2"]
      }],
      "formSubmittedAgainst":{
        "name" : "testForm",
        "_id": "simple2",
        "pages":[{
          "fields":[
            {
              "name": "repeating",
              "required": false,
              "type": "text",
              "_id": "52a65af9a43843f938000003",
              "repeating": true,
              "fieldOptions":{
                "definition":{
                  "maxRepeat":5,
                  "minRepeat":2
                }
              }
            }]
        }]
      }
    }];

    exportHelper.submissionsToCSV({
      fieldHeader: "name",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var keys = Object.keys(csvs);
      var lines = csvs[keys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,repeating-1,repeating-2,repeating-3,repeating-4,repeating-5', 'Unexpected headers!');
      assert.equal(lines[1], 'testForm,simple2,56a8d23043ae4f64324cdcc5,Wed Jan 27 2016 14:20:32 GMT+0000 (UTC),sampleCloudAppName,985FD579305D4D8EB4168641813806A5,127.0.0.1,Wed Jan 27 2016 14:22:41 GMT+0000 (UTC),test entry1,test entry2,,,', 'Unexpected first line!');
      finish();
    });
  },
  "it_should_export_complex_submissions":  function(finish){
    var sub = [complexSubmissionOrder, complexSubmission1];

    exportHelper.submissionsToCSV({
      fieldHeader: "name",
      submissions: sub,
      downloadUrl: 'dummyurl:fileId'
    }, function(err, csvs){
      assert.ok(!err);
      var csvKeys = Object.keys(csvs);
      var lines = csvs[csvKeys[0]].split('\r\n');
      assert.equal(lines[0], 'formName,formId,_id,submissionCompletedTimestamp,appCloudName,deviceId,deviceIPAddress,updatedTimestamp,Order,Notification Type,Description,Equipment,Serial Number,Material,Planner Group,Main Work Ctr,Reported by,Coding,Description,Required Start,Priority,Object Part,Damage,Text,Cause Code,Cause Text,Photo-name,Photo-url,Photo 2 ?,Photo 2-name,Photo 2-url,Photo 3 ?,Photo 3-name,Photo 3-url,Required End');
      assert.equal(lines[1], 'Technical Inspection Notification,53a44886d55d83f96dad6ca8,53c3adfdbd66275c654355d9,2014-07-14T10:16:42.606Z,irishrail-t-ogf52urb7qpc400dv90ndm1p-dev,3c4f6fa4160b1cd168414f1bbb5083db,"213.233.148.4,10.189.254.5,10.35.1.7",2014-07-14T10:16:42.618Z,530132297,TI,Vegetation,30003713,UBS542A,BRIDGE,ATH,ATH-STSE,Nmc,Adjust,,,Medium,Abuttments,Debris,,Build-up of debris,,filePlaceHolderd36a25f7b613c3608a25c017202f48f0.png,dummyurl53c3ae081b70525c65000006,Yes,,,No,,,');
      assert.equal(lines[2], 'Technical Inspection Notification,53a44886d55d83f96dad6ca8,53ac7108b8f15d51516d14b0,2014-06-26T19:14:29.409Z,test-t-ogf521234dv90ndm1p-dev,3C5ECCB9-3ABE-4DEC-AD7E-35B11454F366,"213.233.150.90,10.189.254.5",2014-06-26T19:14:29.415Z,,TI,Test text,30002144,OBL126,Stone some new line,LMK,LMK-STSE,Egan_C,Adjust,,2014-07-26,High,Abuttments,Bent,,Authorised Work,,filePlaceHolder10a0bd6f827beb3bc39c5f51d7daa0ea.png,dummyurl53ac7112859dcc5151000001,,,,,,,2014-08-26');
      finish();
    });
  }
};
