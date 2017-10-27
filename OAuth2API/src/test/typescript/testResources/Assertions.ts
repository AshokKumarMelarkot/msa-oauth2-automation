let chai = require('chai');
let expect = chai.expect;
import {protractor} from 'protractor';

export class Assertions {
	
	//Assertions
	
	public static testShouldEqual(expText, actualText) {
		
		//noinspection TypeScriptValidateTypes
		expect(expText,"The text " + expText + " should equal to "+actualText).to.equal(actualText);
	}
	
	public static arrayShouldContain(arr, val) {
		
		if (arr) {
			expect(val, "The array " + arr + " should contain the property " + val).to.be.oneOf(arr);
		} else {
			expect(val, "The array " + arr + " should contain the property " + val).to.be.oneOf(arr);
		}
	}
}
