/**
 * SuiteScript https module (Client Side)
 * @private Ignore for JSDoc stub generation
 * @module N/https
 * @suiteScriptVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace https
     */    
    var https = {};    
        
    /**
     * Enum for HTTPS methods.
     * Holds the string values for supported HTTPS requests. This enum is used to set the value of
     * https.request(options) and ServerRequest.method.
     * @enum {string}
     * @readonly
     */    
    function httpsMethod() {
        this.GET = 'GET';
        this.POST = 'POST';
        this.PUT = 'PUT';
        this.DELETE = 'DELETE';
        this.HEAD = 'HEAD';
    }
    
    https.prototype.Method = new httpsMethod();    
    
    /**
     * Enum describing available Commerce API Cache Durations.
     * Holds the string values for supported cache durations. This enum is used to set the value of the
     * ServerResponse.setCdnCacheable(options) property.
     * @enum {string}
     * @readonly
     */    
    function httpsCacheDuration() {
        this.UNIQUE = 'UNIQUE';
        this.SHORT = 'SHORT';
        this.MEDIUM = 'MEDIUM';
        this.LONG = 'LONG';
    }
    
    https.prototype.CacheDuration = new httpsCacheDuration();    
    
    /**
     * Send a HTTPS GET request and return response from the server.
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {Object} [options.headers] The HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     * @throws {SuiteScriptError} SSS_REQUEST_LOOP_DETECTED This script executes a recursive function that has exceeded
     *     the limit for the number of times a script can call itself using an HTTPS request.
     *
     * @since 2015.2
     */    
    https['get'] = function(options) {};    
    https['get'].promise = function(options) {};    
    
    /**
     * Send a HTTPS POST request and return response from the server.
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} options.body The POST data
     * @param {Object} [options.headers] The HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     * @throws {SuiteScriptError} SSS_REQUEST_LOOP_DETECTED This script executes a recursive function that has exceeded
     *     the limit for the number of times a script can call itself using an HTTPS request.
     *
     * @since 2015.2
     */    
    https.post = function(options) {};    
    https.post.promise = function(options) {};    
    
    /**
     * Send a HTTPS PUT request and return response from the server.
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} options.body The PUT data
     * @param {Object} [options.headers] The HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     * @throws {SuiteScriptError} SSS_REQUEST_LOOP_DETECTED This script executes a recursive function that has exceeded
     *     the limit for the number of times a script can call itself using an HTTPS request.
     *
     * @since 2015.2
     */    
    https.put = function(options) {};    
    https.put.promise = function(options) {};    
    
    /**
     * Send a HTTPS DELETE request and return response from the server.
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string} options.url The HTTPS URL being requested
     * @param {Object} [options.headers] The HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     * @throws {SuiteScriptError} SSS_REQUEST_LOOP_DETECTED This script executes a recursive function that has exceeded
     *     the limit for the number of times a script can call itself using an HTTP request.
     *
     * @since 2015.2
     */    
    https['delete'] = function(options) {};    
    https['delete'].promise = function(options) {};    
    
    /**
     * Send a HTTPS request and return response from the server.
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string} options.method HTTPS method of the request
     * @param {string} options.url the HTTPS URL being requested
     * @param {string|Object} options.body POST data; must be present if and only if method is POST
     * @param {Object} [options.headers] The HTTPS headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     * @throws {SuiteScriptError} SSS_REQUEST_LOOP_DETECTED This script executes a recursive function that has exceeded
     *     the limit for the number of times a script can call itself using an HTTPS request.
     *
     * @since 2015.2
     */    
    https.request = function(options) {};    
    https.request.promise = function(options) {};    
    
    /**
     * Send a HTTPS request to a RESTlet and return the response. Authentication headers are automatically added.
     * The RESTlet will run with the same privileges as the calling script.
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string|number} options.scriptId The internal ID or script ID of the script record. Specify internal ID
     *     as a number. Specify script ID as a string. record
     * @param {string} options.deploymentId The script ID of the script deployment record
     * @param {string|Object} [options.body] POST data; ignored unless options.method is POST or PUT
     * @param {string} [options.method] HTTP method (GET, POST, PUT, DELETE, HEAD); defaults to POST if
     *     options.body is provided, to GET otherwise
     * @param {Object} [options.urlParams] parameters to be appeneded to the target URL as a query string
     * @param {Object} [options.headers] HTTP headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_SCRIPT_ID_1 if scriptId does not reference a RESTlet script
     * @throws {SuiteScriptError} INVALID_SCRIPT_DEPLOYMENT_ID_1 if deployment does not reference a valid deployment
     *     for the script
     * @throws {SuiteScriptError} SSS_INVALID_HEADER if options.headers is in an invalid format or contains an invalid
     *     header
     * @throws {SuiteScriptError} SSS_INVALID_URL_PARAMS if options.urlParams is in an invalid format
     * @throws {SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED if Authorization header is set
     * @throws {SuiteScriptError} SSS_REQUEST_LOOP_DETECTED This script executes a recursive function that has exceeded
     *     the limit for the number of times a script can call itself using an HTTPS request.
     *
     * @since 2020.2
     */    
    https.requestRestlet = function(options) {};    
    https.requestRestlet.promise = function(options) {};    
    
    /**
     * Send a HTTPS request to a REST Web Service endpoint and return the response. Authentication headers are
     * automatically added.
     *
     * Target URL may be fully qualified, relative, or relative with the /services/rest/ prefix omitted.
     * The following three URLs are equivalent for the account TESTDRV123:
     * - https://TESTDRV123.suitetalk.api.netsuite.com/services/rest/record/v1/salesOrder/101?fields=memo
     * - /services/rest/record/v1/salesOrder/101?fields=memo
     * - /record/v1/salesOrder/101?fields=memo
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string} options.url URL of a REST Web Service endpoint; fully qualified or relative; may contain query
     *     parameters
     * @param {string|Object} [options.body] POST data; ignored unless options.method is POST or PUT
     * @param {string} [options.method] HTTP method (GET, POST, PUT, DELETE, HEAD); defaults to POST if
     *     options.body is provided, to GET otherwise
     * @param {Object} [options.headers] HTTP headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if the URL is invalid or does not reference a REST Web Service
     *     endpoint
     * @throws {SuiteScriptError} SSS_INVALID_HEADER if options.headers is in an invalid format or contains an invalid
     *     header
     * @throws {SuiteScriptError} SSS_AUTHORIZATION_HEADER_NOT_ALLOWED if Authorization header is set
     * @throws {SuiteScriptError} SSS_REQUEST_LOOP_DETECTED This script executes a recursive function that has exceeded
     *     the limit for the number of times a script can call itself using an HTTPS request.
     *
     * @since 2020.2
     */    
    https.requestSuiteTalkRest = function(options) {};    
    https.requestSuiteTalkRest.promise = function(options) {};    
    
    /**
     * Creates and return a crypto.SecretKey Object. This method can take a GUID. Use Form.addCredentialField(options)
     * to generate a value. You can put the key in your secure string. SuiteScript decrypts the value (key) and sends
     * it to the server.
     * @governance none
     * @restriction Server SuiteScript only
     * @param {Object} options
     * @param {string} options.guid A GUID used to generate a secret key. The GUID can resolve to either data or
     *     metadata.
     * @param {string} options.secret Secret for the key
     * @param {string} [options.encoding] Specifies the encoding for the SecureKey. Accepts values from https.Encoding
     *     enum
     * @return {SecretKey}
     *
     * @since 2015.2
     */    
    https.createSecretKey = function(options) {};    
    
    /**
     * Creates and return a SecureString.
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options
     * @param {string} options.input The string to convert to a secure string
     * @param {string} [options.inputEncoding=UTF-8] Identifies the encoding that the input string uses.
     * @return {SecureString}
     *
     * @since 2015.2
     */    
    https.createSecureString = function(options) {};    
    
    /**
     * Holds the string values for supported encoding values.
     * @enum {string}
     * @readonly
     */    
    function httpsEncoding() {
        this.UTF_8 = 'UTF_8';
        this.BASE_16 = 'BASE_16';
        this.BASE_32 = 'BASE_32';
        this.BASE_64 = 'BASE_64';
        this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
        this.HEX = 'HEX';
    }
    
    https.prototype.Encoding = new httpsEncoding();    
    
    /**
     * Holds the string values for supported hashing algorithms.
     * @enum {string}
     * @readonly
     */    
    function httpsHashAlg() {
        this.SHA1 = 'SHA1';
        this.SHA256 = 'SHA256';
        this.SHA512 = 'SHA512';
        this.MD5 = 'MD5';
    }
    
    https.prototype.HashAlg = new httpsHashAlg();    
    
    /**
     * Holds the string values for supported NetSuite resources that you can redirect to.
     * @enum {string}
     * @readonly
     */    
    function httpsRedirectType() {
        this.RECORD = 'RECORD';
        this.SUITELET = 'SUITELET';
        this.RESTLET = 'RESTLET';
        this.MEDIA_ITEM = 'MEDIAITEM';
        this.TASK_LINK = 'TASKLINK';
    }
    
    https.prototype.RedirectType = new httpsRedirectType();    
    
    N.https = https;
    
    /**
     * @exports N/https
     */
    return https;
});