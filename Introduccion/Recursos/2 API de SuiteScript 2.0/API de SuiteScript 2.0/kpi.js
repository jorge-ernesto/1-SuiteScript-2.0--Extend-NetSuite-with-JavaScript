/**
 * SuiteScript KPI api
 *
 * @module N/kpi
 * @NApiVersion 2.x
 *
 */
define([], function(){        
    /**
     * @namespace kpi
     */    
    var kpi = {};    
            
    /**
     * Calculate the current value of the specified KPI. The date range for which the KPI is calculated may be specifified as
     * either a dateRangeId, periodRangeId, or a DateRange object describing an interval of time.
     *
     * Result of the KPI lookup.
     * @typedef {Object} api~KpiResult
     * @property {number} value - The raw numeric value of the KPI.
     * @property {string} formatted - The formatted value of the KPI.
     * @property {string} dataType - The data type of the value.
     * @property {string} fieldType - The NetSuite field type of the value.
     */    
    function KpiResultTypedef() {    
    }    
        
    /**
     * An arbitrary date range.
     * @typedef {Object} kpi~DateRange
     * @property {Date} start - Start date of the date interval.
     * @property {Date} end - End date of the date interval.
     */    
    function DateRangeTypedef() {    
    }    
        
    /**
     * @restriction Server SuiteScript only
     * @governance 10 units
     * @param {Object} options
     * @param {string} options.kpiId Standard KPI Id (standard values provided by kpi.Type). Saved Search-driven KPIs may use
     *     the value kpi.CUSTOM (or 'CUSTOM')
     * @param {string} [options.dateRangeId] Standard date range id (values provided by kpi.DateRangeId).
     * @param {DateRange} [options.dateRange] Object specifying the search interval.
     * @param {string} [options.periodRangeId] Standard date range id (values provided by kpi.PeriodRangeId).
     * @param {string|number} [options.searchId] Script Id or Internal Id of the Saved Search which drives the KPI. Only
     *     applicable when options.kpiId is kpi.Type.Custom.
     * @returns {KpiResult}
     * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if options is missing or one of mandatory options properties not
     *     set
     *
     * @since 2019.1
     */    
    function calculate() {    
    }    
        
    /**
     * View the data and column id and label metadata for a given KPI Scorecard.
     *
     * @restriction Server SuiteScript only
     * @governance 100 units
     * @param {Object} options
     * @param {string} options.scorecardId A valid KPI Scorecard Id, either standard (Internal ID) or custom (Script ID).
     * @returns {Scorecard}
     * @throws {error.SuiteScriptError} REQUIRED_PARAM_MISSING if options is missing or one of mandatory options properties not set
     *
     * @since 2019.1
     */    
    function calculateScorecard() {    
    }    
    
    N.kpi = kpi;
    
    /**
     * @exports N/kpi
     */
    return kpi;
});