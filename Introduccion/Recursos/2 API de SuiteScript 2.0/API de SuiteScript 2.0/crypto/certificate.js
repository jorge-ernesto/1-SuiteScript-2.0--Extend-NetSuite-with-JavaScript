/**
 * SuiteScript module
 *
 * @module N/crypto/certificate
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace certificate
     */    
    var certificate = {};    
            
    /**
     * @class SignedXml
     * @classdesc Result of xml signing
     * @protected
     * @constructor
     */    
    function SignedXml() {    
        
        /**
         * Returns signed xml as string
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2019.2
         */        
        this.asString = function() {};        
        
        /**
         * Returns signed xml as file
         * @restriction Server SuiteScript only
         * @governance none
         * @return {File}
         *
         * @since 2019.2
         */        
        this.asFile = function() {};        
        
        /**
         * Returns signed xml as Document
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Document}
         *
         * @since 2019.2
         */        
        this.asXml = function() {};        
        
        /**
         * Return the object type name (certificate.SignedXml).
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2019.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2019.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * Signs inputXml string using certId.
     * @restriction Server SuiteScript only
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string} options.xmlString input xml string
     * @param {string} options.certId certificate id
     * @param {string} options.algorithm hash algorithm
     * @param {string} options.rootTag root xml tag to sign
     * @param {string} [options.insertionTag] where to put signature
     * @return {SignedXml} signed xml string
     *
     * @since 2019.2
     */    
    function signXml() {    
    }    
        
    /**
     * Verifies signature in the signedXml file.
     * @restriction Server SuiteScript only
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string|SignedXml} options.signedXml signed xml
     * @param {string} options.rootTag signed root xml tag
     * @param {string} [options.certId] certificate id
     * @return {void}
     * @throws {SuiteScriptError} INVALID_SIGNATURE when signature is not valid
     *
     * @since 2019.2
     */    
    function verifyXmlSignature() {    
    }    
        
    /**
     * @class Verifier
     * @classdesc Class for verifying string signatures
     * @protected
     * @constructor
     */    
    function Verifier() {    
        
        /**
         * Updates string to be verified against specified certificate
         * @restriction Server SuiteScript only
         * @governance none
         *
         * @param {Object} options
         * @param {string} options.input string to verify
         * @param {string} [options.inputEncoding] encoding of string to verify - default is UTF-8
         * @return {void}
         *
         * @since 2019.2
         */        
        this.update = function(options) {};        
        
        /**
         * Verifies string against provided signature using specified certificate
         * @restriction Server SuiteScript only
         * @governance none
         *
         * @param {Object} options
         * @param {string} options.signature signature to be verified
         * @param {string} [options.signatureEncoding] signature's encoding - default is Base64
         * @return {void}
         * @throws {SuiteScriptError} INVALID_SIGNATURE when signature is invalid
         *
         * @since 2019.2
         */        
        this.verify = function(options) {};        
        
        /**
         * Return the object type name (certificate.Verifier).
         * @restriction Server SuiteScript only
         * @governance none
         * @return {string}
         *
         * @since 2020.2
         */        
        this.toString = function() {};        
        
        /**
         * get JSON format of the object
         * @restriction Server SuiteScript only
         * @governance none
         * @return {Object}
         *
         * @since 2020.2
         */        
        this.toJSON = function() {};        
    }    
        
    /**
     * Creates signer object for signing plain strings
     * @restriction Server SuiteScript only
     * @governance 10 units
     *
     * @param {object} options
     * @param {String} options.certId certificate identification
     * @param {String} options.algorithm hash algorithm
     * @return {Signer} object for string signing
     *
     * @since 2019.2
     */    
    function createSigner() {    
    }    
        
    /**
     * Creates verifier object for verifying signatures of plain strings
     * @restriction Server SuiteScript only
     * @governance 10 units
     *
     * @param {Object} options
     * @param {string} options.certId certificate identification
     * @param {string} options.algorithm hash algorithm
     * @return {Verifier} object for string verification
     *
     * @since 2019.2
     */    
    function createVerifier() {    
    }    
    
    var crypto = {};
N.crypto = crypto;
    crypto.certificate = certificate;
    
    /**
     * @exports N/crypto/certificate
     */
    return certificate;
});