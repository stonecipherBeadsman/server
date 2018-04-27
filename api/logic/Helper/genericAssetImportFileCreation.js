;(function() {
    'use strict';
    var fs = require('fs');
    var path = require('path');
    var data = '';
    module.exports = createFile;

    function createAssetsFromList(listToCreate) {
        //for loop creating assets storing them in list then returning
        var listOfAssetImports = [];
        var meterNumber = '';
        var meterStatus = '';
        var multiplier = '';
        var nbrDials = '';
        var amiVendor = '';
        var consumptionRate = '';
        var connectDate = '';
        var disconnectDate = '';
        var externalMeterNumber = '';
        var serialNumber = '';
        var meterServicePhase = '';
        var substation = '';
        var meterDescription = '';
        var serviceAddress = '';
        var serviceCity = '';
        var serviceState = '';
        var serviceZipcode = '';
        var serviceDescription = '';
        var serviceMapLocation = '';
        var feeder = '';
        var taxDistrict = '';
        var franchiseDistrict = '';
        var schoolDistrict = '';
        var boardDistrict = '';
        var district = '';
        var county = '';
        var range = '';
        var linemanServiceArea = '';
        var owner = '';
        var latitude = '';
        var longitude = '';
        var serviceLocationOwner = '';
        var locationType = '';
        var customAttributes = '';
        var serviceLocationID = '';
        var marketPoint = '';
        var revenueClass = '';
        var comments = '';
        var accountNumber = '';
        var customerID = '';
        var customerOrganizationName = '';
        var customerFirstName = '';
        var customerLastName = '';
        var rateCode = '';
        var netMeter = '';
        var billingCycle = '';
        var demandMultiplier = '';
        var assetType = '';

        for(var x = 0; x < listToCreate.length; x++){

            meterNumber = listToCreate[x];
            meterStatus = 'ACTIVE';
            multiplier = '1';
            nbrDials = '9';
            amiVendor = 'aclara';
            consumptionRate = 'KWH';
            connectDate = '01/01/2014';
            disconnectDate = '';
            externalMeterNumber = listToCreate[x];
            serialNumber = '';
            meterServicePhase = '';
            substation = '';
            meterDescription = '';
            serviceAddress = '';
            serviceCity = '';
            serviceState = '';
            serviceZipcode = '63303';
            serviceDescription = '';
            serviceMapLocation = '';
            feeder = '';
            taxDistrict = '';
            franchiseDistrict = '';
            schoolDistrict = '';
            boardDistrict = '';
            district = '';
            county = '';
            range = '';
            linemanServiceArea = '';
            owner = 'jwetzel@nisc';
            latitude = '';
            longitude = '';
            serviceLocationOwner = 'jwetzel@nisc';
            locationType = 'SERVICE';
            customAttributes = '';
            serviceLocationID = 'sl' + listToCreate[x];
            marketPoint = '';
            revenueClass = '';
            comments = '';
            accountNumber = '';
            customerID = '';
            customerOrganizationName = '';
            customerFirstName = '';
            customerLastName = '';
            rateCode = '';
            netMeter = '';
            billingCycle = '';
            demandMultiplier = '1';
            assetType = 'ELECTRIC_METER';

            listOfAssetImports += meterNumber + ',' + meterStatus + ',' + multiplier + ',' + nbrDials + ',' + amiVendor + ',' + consumptionRate + ',' + connectDate + ',' + disconnectDate + ',' + externalMeterNumber + ',' + serialNumber + ',' + meterServicePhase + ',' + substation + ',' + meterDescription + ',' + serviceAddress + ',' + serviceCity + ',' + serviceState + ',' + serviceZipcode + ',' + serviceDescription + ',' + serviceMapLocation + ',' + feeder + ',' + taxDistrict + ',' + franchiseDistrict + ',' + schoolDistrict + ',' + boardDistrict + ',' + district + ',' + county + ',' + range + ',' + linemanServiceArea + ',' + owner + ',' + latitude + ',' + longitude + ',' + serviceLocationOwner + ',' + locationType + ',' + customAttributes + ',' + serviceLocationID + ',' + marketPoint + ',' + revenueClass + ',' + comments + ',' + accountNumber + ',' + customerID + ',' + customerOrganizationName + ',' + customerFirstName + ',' + customerLastName + ',' + rateCode + ',' + netMeter + ',' + billingCycle + ',' + demandMultiplier + ',' + assetType + '\n';
        }        
        
        return listOfAssetImports;        
    }

    function createFile(list, fileName) {
        var data = '';
            data += createAssetsFromList(list);
        return data;
    }

    //createFile(['a','b','c'], 'abc');
}());