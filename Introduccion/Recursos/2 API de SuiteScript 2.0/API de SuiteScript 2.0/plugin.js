/**
 * SuiteScript plugin module
 *
 * @module N/plugin
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace plugin
     */    
    var plugin = {};    
        
    /**
     * Returns the script IDs of implementations of the given custom plugin type. If there's no custom plugin
     * type with the given script ID available for the executing script, an empty list is returned.
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options  options object
     * @param {string} options.type  script ID of the custom plugin type
     * @param {boolean} [options.includeDefault]  true if default implementation is to be included in
     *     the list; default value is true
     * @return {Array<string>} list of scriptIDs of the custom plugin implementations
     *
     * @since 2016.1
     */    
    plugin.findImplementations = function(options) {};    
    
    /**
     * Instantiates an implementation of the given custom plugin type. If no implementation ID is explicitly
     * given then the implementation which is currently selected in the UI (Manage Plug-ins page) will be
     * returned.
     * @restriction Server SuiteScript only
     * @governance none
     * @param {Object} options  options object
     * @param {string} options.type  script ID of the custom plugin type
     * @param {string} options.implementation (optional)  script ID of the custom plugin implementation
     * @return {Object} an object implementing the custom plugin type
     *
     * @since 2016.1
     */    
    plugin.loadImplementation = function(options) {};    
    
    N.plugin = plugin;
    
    /**
     * @exports N/plugin
     */
    return plugin;
});