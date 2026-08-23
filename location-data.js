```javascript
/*
==============================================================
 Bundelkhand Organic Farmer Producer Company Limited
 LOCATION MASTER
 State → District → Tehsil → Block → Village

 States currently enabled:
 1. Uttar Pradesh
 2. Madhya Pradesh

 Source hierarchy:
 Local Government Directory (LGD), Government of India

 IMPORTANT:
 This file is designed as the single location master.
 farmers.html should read locationMaster from this file.

 Future states can be added easily.
==============================================================
*/


const LOCATION_MASTER = {

    "Uttar Pradesh": {},

    "Madhya Pradesh": {}

};


/*
==============================================================
 STATE CODES
 LGD STATE CODES
==============================================================
*/

const LOCATION_STATE_CODES = {

    "Uttar Pradesh": 9,

    "Madhya Pradesh": 23

};


/*
==============================================================
 LOCATION DATA STATUS
==============================================================
*/

const LOCATION_DATA_STATUS = {

    loaded: false,

    source: "Local Government Directory (LGD)",

    states: [
        "Uttar Pradesh",
        "Madhya Pradesh"
    ]

};


/*
==============================================================
 HELPER
==============================================================
*/

function locationNormalize(value){

    return String(value || "")
        .trim()
        .replace(/\s+/g, " ");

}


/*
==============================================================
 ADD DISTRICT
==============================================================
*/

function addLocationDistrict(
    state,
    district
){

    district =
    locationNormalize(district);

    if(!district){
        return;
    }

    if(!LOCATION_MASTER[state]){
        LOCATION_MASTER[state] = {};
    }

    if(!LOCATION_MASTER[state][district]){
        LOCATION_MASTER[state][district] = {};
    }

}


/*
==============================================================
 ADD TEHSIL
==============================================================
*/

function addLocationTehsil(
    state,
    district,
    tehsil
){

    district =
    locationNormalize(district);

    tehsil =
    locationNormalize(tehsil);

    if(!district || !tehsil){
        return;
    }

    addLocationDistrict(
        state,
        district
    );

    if(
        !LOCATION_MASTER[state][district][tehsil]
    ){

        LOCATION_MASTER[state][district][tehsil] = {};

    }

}


/*
==============================================================
 ADD BLOCK
==============================================================
*/

function addLocationBlock(
    state,
    district,
    tehsil,
    block
){

    district =
    locationNormalize(district);

    tehsil =
    locationNormalize(tehsil);

    block =
    locationNormalize(block);

    if(
        !district ||
        !tehsil ||
        !block
    ){

        return;

    }

    addLocationTehsil(
        state,
        district,
        tehsil
    );


    if(
        !LOCATION_MASTER
        [state]
        [district]
        [tehsil]
        [block]
    ){

        LOCATION_MASTER
        [state]
        [district]
        [tehsil]
        [block] = [];

    }

}


/*
==============================================================
 ADD VILLAGE
==============================================================
*/

function addLocationVillage(
    state,
    district,
    tehsil,
    block,
    village,
    pincode = ""
){

    district =
    locationNormalize(district);

    tehsil =
    locationNormalize(tehsil);

    block =
    locationNormalize(block);

    village =
    locationNormalize(village);

    pincode =
    locationNormalize(pincode);


    if(
        !district ||
        !tehsil ||
        !block ||
        !village
    ){

        return;

    }


    addLocationBlock(
        state,
        district,
        tehsil,
        block
    );


    const villageList =
    LOCATION_MASTER
    [state]
    [district]
    [tehsil]
    [block];


    /*
    Prevent duplicate villages
    */

    const exists =
    villageList.some(
        item =>
        item.name === village
    );


    if(!exists){

        villageList.push({

            name: village,

            pincode: pincode

        });

    }

}


/*
==============================================================
 GET STATES
==============================================================
*/

function getLocationStates(){

    return Object.keys(
        LOCATION_MASTER
    );

}


/*
==============================================================
 GET DISTRICTS
==============================================================
*/

function getLocationDistricts(
    state
){

    if(
        !LOCATION_MASTER[state]
    ){

        return [];

    }

    return Object.keys(
        LOCATION_MASTER[state]
    ).sort();

}


/*
==============================================================
 GET TEHSILS
==============================================================
*/

function getLocationTehsils(
    state,
    district
){

    if(
        !LOCATION_MASTER[state] ||
        !LOCATION_MASTER[state][district]
    ){

        return [];

    }

    return Object.keys(
        LOCATION_MASTER[state][district]
    ).sort();

}


/*
==============================================================
 GET BLOCKS
==============================================================
*/

function getLocationBlocks(
    state,
    district,
    tehsil
){

    if(
        !LOCATION_MASTER[state] ||
        !LOCATION_MASTER[state][district] ||
        !LOCATION_MASTER[state][district][tehsil]
    ){

        return [];

    }


    return Object.keys(
        LOCATION_MASTER[state][district][tehsil]
    ).sort();

}


/*
==============================================================
 GET VILLAGES
==============================================================
*/

function getLocationVillages(
    state,
    district,
    tehsil,
    block
){

    if(
        !LOCATION_MASTER[state] ||
        !LOCATION_MASTER[state][district] ||
        !LOCATION_MASTER[state][district][tehsil] ||
        !LOCATION_MASTER[state][district][tehsil][block]
    ){

        return [];

    }


    return LOCATION_MASTER
        [state]
        [district]
        [tehsil]
        [block]
        .sort(
            (a,b) =>
            a.name.localeCompare(
                b.name,
                "en"
            )
        );

}


/*
==============================================================
 GET COMPLETE ADDRESS
==============================================================
*/

function buildFarmerAddress(
    village,
    block,
    tehsil,
    district,
    state,
    pincode = ""
){

    const parts = [];


    if(village){
        parts.push(village);
    }


    if(block){
        parts.push(block);
    }


    if(tehsil){
        parts.push(tehsil);
    }


    if(district){
        parts.push(district);
    }


    if(state){
        parts.push(state);
    }


    if(pincode){
        parts.push(pincode);
    }


    return parts.join(", ");

}


/*
==============================================================
 FIND VILLAGE
==============================================================
*/

function findLocationVillage(
    state,
    district,
    tehsil,
    block,
    village
){

    const villages =
    getLocationVillages(
        state,
        district,
        tehsil,
        block
    );


    return villages.find(
        item =>
        item.name === village
    ) || null;

}


/*
==============================================================
 ADD FUTURE STATE
==============================================================
*/

function enableFutureState(
    state,
    stateCode
){

    if(!LOCATION_MASTER[state]){

        LOCATION_MASTER[state] = {};

    }


    LOCATION_STATE_CODES[state] =
    stateCode;

}


/*
==============================================================
 DEBUG FUNCTION
==============================================================
*/

function getLocationSummary(){

    const result = {};


    Object.keys(
        LOCATION_MASTER
    ).forEach(
        state => {

            let districtCount = 0;
            let tehsilCount = 0;
            let blockCount = 0;
            let villageCount = 0;


            const districts =
            LOCATION_MASTER[state];


            Object.keys(
                districts
            ).forEach(
                district => {

                    districtCount++;


                    const tehsils =
                    districts[district];


                    Object.keys(
                        tehsils
                    ).forEach(
                        tehsil => {

                            tehsilCount++;


                            const blocks =
                            tehsils[tehsil];


                            Object.keys(
                                blocks
                            ).forEach(
                                block => {

                                    blockCount++;


                                    villageCount +=
                                    blocks[block].length;

                                }
                            );

                        }
                    );

                }
            );


            result[state] = {

                districts:
                districtCount,

                tehsils:
                tehsilCount,

                blocks:
                blockCount,

                villages:
                villageCount

            };

        }
    );


    return result;

}


/*
==============================================================
 MAHOBA VERIFIED STARTER MAPPING

 This is retained so your current testing continues to work.

 Mahoba:
 Mahoba Tehsil → Kabrai
 Charkhari Tehsil → Charkhari
 Kulpahar Tehsil → Jaitpur / Panwari

 Villages will be populated from the village master.
==============================================================
*/

addLocationBlock(
    "Uttar Pradesh",
    "Mahoba",
    "Mahoba",
    "Kabrai"
);


addLocationBlock(
    "Uttar Pradesh",
    "Mahoba",
    "Charkhari",
    "Charkhari"
);


addLocationBlock(
    "Uttar Pradesh",
    "Mahoba",
    "Kulpahar",
    "Jaitpur"
);


addLocationBlock(
    "Uttar Pradesh",
    "Mahoba",
    "Kulpahar",
    "Panwari"
);


/*
==============================================================
 CHHATARPUR VERIFIED STARTER MAPPING

 Your successful test:
 Madhya Pradesh
 → Chhatarpur
 → Maharajpur
 → Nowgong

 Retained for compatibility with current farmers.html.
==============================================================
*/

addLocationBlock(
    "Madhya Pradesh",
    "Chhatarpur",
    "Maharajpur",
    "Nowgong"
);


/*
==============================================================
 DATA READY EVENT
==============================================================
*/

window.dispatchEvent(
    new CustomEvent(
        "locationMasterReady",
        {
            detail: LOCATION_MASTER
        }
    )
);


/*
==============================================================
 GLOBAL ACCESS

 farmers.html can use:

 window.LOCATION_MASTER

==============================================================
*/

window.LOCATION_MASTER =
LOCATION_MASTER;

window.LOCATION_STATE_CODES =
LOCATION_STATE_CODES;

window.getLocationStates =
getLocationStates;

window.getLocationDistricts =
getLocationDistricts;

window.getLocationTehsils =
getLocationTehsils;

window.getLocationBlocks =
getLocationBlocks;

window.getLocationVillages =
getLocationVillages;

window.buildFarmerAddress =
buildFarmerAddress;

window.findLocationVillage =
findLocationVillage;

window.getLocationSummary =
getLocationSummary;


/*
==============================================================
 CONSOLE TEST

 Browser console:

 getLocationSummary()

==============================================================
*/

console.log(
    "Location Master Loaded:",
    LOCATION_MASTER
);

console.log(
    "Location Summary:",
    getLocationSummary()
);
```
