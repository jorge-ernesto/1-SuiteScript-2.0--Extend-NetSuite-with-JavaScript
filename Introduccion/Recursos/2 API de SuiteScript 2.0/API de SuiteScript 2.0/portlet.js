/**
 * SuiteScript portlet module
 *
 * @module N/portlet
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace portlet
     */    
    var portlet = {};    
        
    /**
     * Causes a FORM type portlet to immediately refresh.
     * @restriction Client SuiteScript only
     * @governance none
     * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if portlet is not FORM type
     *
     * @since 2016.1
     */    
    portlet.refresh = function() {};    
    
    /**
     * Causes a FORM type portlet to be immediately resized.
     * @restriction Client SuiteScript only
     * @governance none
     * @throws {SuiteScriptError} SSS_INVALID_UI_OBJECT_TYPE if portlet is not FORM type
     *
     * @since 2016.1
     */    
    portlet.resize = function() {};    
    
    N.portlet = portlet;
    
    /**
     * @exports N/portlet
     */
    return portlet;
});