// create a module with a dependency on ngResource
var angularMscrm = angular.module('angularMscrm', ['ngResource']);

// define the CrmService
angularMscrm.factory('CrmService', function ($resource) {
    var oDataUrl = Xrm.Page.context.getClientUrl() + '/XRMServices/2011/OrganizationData.svc/';

    var defaultParams = {};

    // describe our API actions
    var actions = {
        lookup: { 
            method: 'GET', 
            url: oDataUrl + ':entitySet?$filter=startswith(:field, \':search\')'
        }
    };

    // create the service
    return $resource(oDataUrl, defaultParams, actions);
});