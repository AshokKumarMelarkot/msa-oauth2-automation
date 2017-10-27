
var path = require('path');


/*

We can implement our custome formatters here


*/



















// var Cucumber = require('cucumber');
// fs = require('fs-extra');
//
//
// const eventBroadcaster = new EventEmitter();
// const { defineSupportCode } = require('cucumber');
// // var JsonFormatter = require('cucumber').JsonFormatter;
// const JsonFormatter = require('cucumber').Listener.Fomatter({});
//
// class World {
//     meow() {
//         console.log(' **** Meow! ******');
//     }
// }
//
// defineSupportCode(({ setWorldConstructor }) => {
//     setWorldConstructor(World);
// });
//
//
// //noinspection JSUnresolvedFunction
// // var JsonFormatter = Cucumber.Listener.JsonFormatter();
//
// var reportFile = '.tmp/OAuth2API/cucumber-test-results.json';
//
// defineSupportCode(function({registerListener}) {
//    // var formatter = new JsonFormatter();
//
//     JsonFormatter.log = function (json) {
//     var destination = reportFile;
//     fs.open(destination, 'a+', function (err, fd) {
//       if (err) {
//         fs.mkdirsSync(destination);
//         fd = fs.openSync(destination, 'a+');
//       }
//
//       fs.writeSync(fd, json);
//
//       console.log('json file location: ' + destination);
//     });
//   };
//
//    registerListener(JsonFormatter);
// });



// ____________________________________________________________________________________________________________________________




// With latest cucumber 3.0, you have to pass node event emitter to your custom formatters. For details on how node events work please go through this link - https://nodejs.org/api/events.html
//
// Now to use this in your CucumberReportExtension.ts
//
// let fs = require('fs-extra');
// // import { mkdirp } from 'mkdirp';
// let report = require('cucumber-html-reporter');
//
// // import * as report from 'cucumber-html-reporter';
// let Cucumber = require('cucumber');
// // import {EventEmitter} from  'events';
// // const eventBroadcaster = new EventEmitter();
//
// class CucumberReportExtension {
//
//     private jsonDir = path.join(__dirname , "reports", "json");
//     private htmlDir = path.join(__dirname , "reports","html");
//     private jsonFile = this.jsonDir + "/cucumber_report.json";
//
//     private cucumberReporterOptions = {
//         theme: "bootstrap",
//         jsonFile: this.jsonFile,
//         output: this.htmlDir + "/cucumber_reporter.html",
//         reportSuiteAsScenarios: true,
//         metadata: {
//             "App Version":"0.0.1",
//             "Test Environment": "TestingMicroSheet",
//             "Browser": "Chrome  59.0.945",
//             "Platform": "Windows 10",
//             "Parallel": "Scenarios",
//             "Executed": "Local"
//         }
//     };
//
//     private CreateReportFile(dirName, fileName, fileContent) {
//         //Check if the directory exist
//         if (!fs.existsSync(dirName))
//             // mkdirp.sync(dirName);
//             fs.mkdirsSync(destination);
//
//         try {
//             fs.writeFileSync(fileName, fileContent);
//         }
//         catch (message) {
//             console.log("Failed to create File/Directory :" + message);
//         }
//     }
//
//     private GenerateCucumberReport(cucumberReportOption){
//         report.generate(cucumberReportOption);
//     }
//
//     myJsonFormatter = new Cucumber.JsonFormatter({
//         // eventBroadcaster: eventBroadcaster,
//         log: jLog => {
//             this.CreateReportFile(this.jsonDir, this.jsonFile, jLog);
//             this.GenerateCucumberReport(this.cucumberReporterOptions);
//         }
//     });
// }
// export let JsonFormatter = new CucumberReportExtension().myJsonFormatter;





//__________________________________________________________________________________






// class SimpleFormatter extends Formatter {
//     constructor(options) {
//         super(options);
//         options.eventBroadcaster
//             .on('test-case-started', ::this.logTestCaseName)
//             .on('test-step-finished', ::this.logTestStep)
//             .on('test-case-finished', ::this.logSeparator)
//             .on('test-run-finished', ::this.logTestRunResult)
//     }
//     logTestCaseName({sourceLocation}) {
//         const {gherkinDocument, pickle} = this.eventDataCollector.getTestCaseData(sourceLocation)
//         this.log(gherkinDocument.feature.name + ' / ' + pickle.name + '\n');
//     }
//     logTestStep({testCase, index, result}) {
//         const {gherkinKeyword, pickleStep, testStep} = this.eventDataCollector.getTestStepData({testCase, index})
//         if (pickleStep) {
//             this.log('  ' + gherkinKeyword + pickleStep.text + ' - ' + result.status + '\n');
//         } else {
//             this.log('  Hook - ' + result.status + '\n');
//         }
//     }
//     logSeparator() {
//         this.log('\n');
//     }
//     logTestRunResult({result}) {
//         this.log(result.success ? 'SUCCESS' : 'FAILURE');
//     }
// }
// module.exports = SimpleFormatter;


//__________________________________________________________________________________

