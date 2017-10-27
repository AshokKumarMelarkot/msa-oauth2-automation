let protractor = require('protractor');
let fs = require('fs-extra');
let request = require('request');

export class Common {
	
	private static baseServerURL: string = "http://brentertainment.com/oauth2/lockdin";
	
	constructor() {
	}
	
	// API Calls Goes Here
	
	public getFriendsNames():any{
		
		//noinspection TypeScriptUnresolvedFunction
		let deferred = protractor.promise.defer();
		
		//noinspection TypeScriptValidateJSTypes
		this.getAccessTokenFromAD().then(onTokenReceived);
		
		function onTokenReceived(token) {
			
			let options = {
				method: 'GET',
				url: Common.baseServerURL + '/resource',
				headers: {
					'Authorization': 'bearer '+token
				}
			};
			
			request(options, callback);
		}
		
		function callback(error, response, body) {
			console.log("\n response.statusCode : ",response.statusCode);
			deferred.fulfill(response.body);
		}
		
		
		return deferred.promise;
	};
	
	private getAccessTokenFromAD() {
		
		//noinspection TypeScriptUnresolvedFunction
		let deferred = protractor.promise.defer();
		
		// Request Access Token from AD
		
		request({
			url: Common.baseServerURL + '/token',
			method: 'POST',
			timeout: 1200000,
			form: {
				grant_type: 'password',
				client_id: 'demoapp',
				client_secret: 'demopass',
				username: 'demouser',
				password: 'testpass'
			}
		}, (error, response, body) => {
			
			if (response === undefined) {
				console.log('Server seems to be down');
				deferred.reject('Server seems to be down');
				
			} else if (!error && (response.statusCode == 200)) {
				
				let body = JSON.parse(response.body);
				console.log("Access Token Received", body.access_token);
				deferred.fulfill(body.access_token);
			} else {
				console.log('Error occurred while getting access token  :' + response.statusCode + " " + response.statusMessage);
				deferred.reject('Error occurred while getting access token :' + response.statusCode + " " + response.statusMessage);
				console.log(response);
			}
		});
		
		return deferred.promise;
	}
	
}
