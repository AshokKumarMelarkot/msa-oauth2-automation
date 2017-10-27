/// <reference path="../common.ts" />

import {Common}  from '../common';
import {Assertions}  from '../../testResources/Assertions';
import EventEmitter = NodeJS.EventEmitter;
const {defineSupportCode} = require('cucumber');
let cmn = new Common();

defineSupportCode(({Given, After, AfterAll}) => {
	
	
	Given(/^Call resources end point and it should contain (.*) name$/, function (expectedName, callback) {
		console.log('****** Test *******');
		cmn.getFriendsNames().then((friendNames) => {
			let obj = JSON.parse(friendNames);
			console.log('Friend Names ', obj);
			
			Assertions.arrayShouldContain(obj["friends"], expectedName);
			callback();
		});
	});
	
	After(function (testCase, callback) {
		console.log('****After****');
		callback();
	});
	
	
	AfterAll(function (callback) {
		console.log('****AfterFeatures****');
		callback();
	});
	
})
;