/*
============================================================
LOCATION DATA
Bundelkhand Organic Farmer Producer Company Limited
============================================================

FLOW:

State
  ↓
District
  ↓
Tehsil
  ↓
Block
  ↓
Village
  ↓
PIN
  ↓
Automatic Address

Current verified district data:
Uttar Pradesh → Mahoba

Mahoba:
Tehsil:
1. Mahoba
2. Charkhari
3. Kulpahar

Blocks:
1. Kabrai
2. Charkhari
3. Jaitpur
4. Panwari

Source:
District Mahoba, Government of Uttar Pradesh
Village & Panchayats
============================================================
*/


const LOCATION_MASTER = {

    "Uttar Pradesh": {

        "Mahoba": {

            /*
            ==================================================
            TEHSIL: MAHOBA
            BLOCK: KABRAI
            ==================================================
            */

            "Mahoba": {

                "Kabrai": [

                    "Gyonda",
                    "Banni",
                    "Khanna",
                    "Ataghar",
                    "Akawaii",
                    "Pura",
                    "Mawai Khurd",
                    "Tamaura",
                    "Chichara",
                    "Baramhauli",
                    "Sirsi Khurd",
                    "Bahiga",
                    "Khamhariya",
                    "Khiruhi",
                    "Kulkuwan",
                    "Kahra",
                    "Sirsi Kalan",
                    "Ghondauwa",
                    "Tinduhai",
                    "Pachpahara",
                    "Nur Pur",
                    "Kauhari",
                    "Babedai",
                    "Suraha",
                    "Bhaista Maf",
                    "Parsaha",
                    "Pidari",
                    "Singhanpur Baghari",
                    "Gahra",
                    "Lilwahi",
                    "Chhani Kala",
                    "Barbai",
                    "Sichaura",
                    "Mahewa",
                    "Gauh ari",
                    "Kabrai",
                    "Marhathi",
                    "Baghwa",
                    "Mochipura",
                    "Beela Dakshin",
                    "Amilahi",
                    "Kaimaha",
                    "Riwai Sunecha",
                    "Sukaura",
                    "Beela Uttar",
                    "Nahdaura Maf",
                    "Raivara",
                    "Balakaura",
                    "Hardua",
                    "Kharaka",
                    "Pahra",
                    "Bamhouri Kazi",
                    "Utiyan",
                    "Dharoun",
                    "Baree",
                    "Raipura Khurd",
                    "Jujhar",
                    "Ganj",
                    "Jhir Saheba",
                    "Baraat Pahadi",
                    "Bilbai",
                    "Chhikahara",
                    "Nathupura",
                    "Karahara Kalan",
                    "Pachpahara",
                    "Chodau",
                    "Chandpura",
                    "Gugura",
                    "Makarbai",
                    "Naigaon",
                    "Daharara",
                    "Tikamau",
                    "Ratauli",
                    "Kali Pahadi",
                    "Barepura",
                    "Dadahat Maf",
                    "Kidaari",
                    "Thana",
                    "Paswara",
                    "Bijanagar",
                    "Shahpahadi",
                    "Churwara",
                    "Ghutwai",
                    "Damaura",
                    "Pachhara",
                    "Chak Maraila",
                    "Kumhadaura Maf",
                    "Fatehpur Bajariya",
                    "Dariba",
                    "Mahoba",
                    "Bhateepura",
                    "Rahiliya",
                    "Bamhouri Gusain",
                    "Baniya Tala Mahnapura",
                    "Eraipura Kala",
                    "Pawa",
                    "Majhalwara",
                    "Palka",
                    "Miratala",
                    "Mudhahara",
                    "Mamana",
                    "Basaura",
                    "Sijahari",
                    "Selamaf",
                    "Nanaura",
                    "Urawara",
                    "Kar Pahadiya",
                    "Luhedi",
                    "Hilua",
                    "Pipra Maf",
                    "Shamsher Afutera",
                    "Atarara Maf",
                    "Muraani",
                    "Bilakhi",
                    "Tautiya Bara",
                    "Srinagar",
                    "Dhudaiya",
                    "Chitaiya",
                    "Bilarahi",
                    "Imiliya",
                    "Tindouli",
                    "Salarpur",
                    "Bara",
                    "Gopalpura",
                    "Bhadra",
                    "Dhikvaha",
                    "Mabai",
                    "Khyoraia Jyoraia",
                    "Sijwaha",
                    "Digariya",
                    "Sijariya",
                    "Kabrai Andar Town",
                    "Gauh ari Andar Town",
                    "Baghwa Andar Town",
                    "Marhathi Andar Town",
                    "Mochipura Andar"
                ]

            },


            /*
            ==================================================
            TEHSIL: CHARKHARI
            BLOCK: CHARKHARI
            ==================================================
            */

            "Charkhari": {

                "Charkhari": [

                    "Bareda",
                    "Barenda",
                    "Dhawaree",
                    "Basauth",
                    "Punniyan",
                    "Kharela",
                    "Kuwa",
                    "Barayan",
                    "Aichana",
                    "Pada Ora",
                    "Paharetha",
                    "Pupwara",
                    "Bari",
                    "Gadhhari",
                    "Rihuniya",
                    "Sijaura",
                    "Atarauli",
                    "Patha",
                    "Kaneri",
                    "Salua",
                    "Kamal Kheda",
                    "Bamhouri Kalan",
                    "Shivahar",
                    "Brijapur",
                    "Imiliya Dang",
                    "Maharajpura",
                    "Rivai",
                    "Lataura",
                    "Markui",
                    "Kumharai",
                    "Jaswari",
                    "Santoshpura",
                    "Nibuwari",
                    "Kiratpura",
                    "Kuraura Bajpai",
                    "Kaakun",
                    "Baihari",
                    "Natarara",
                    "Bamhouriya",
                    "Jataura",
                    "Panchampura",
                    "Rajaura",
                    "Kanera",
                    "Chhani Khurd",
                    "Sudamapuri",
                    "Kudaar",
                    "Chandauli",
                    "Ballayan",
                    "Tisauni",
                    "Jarauli",
                    "Ujendai",
                    "Kusarma",
                    "Damadama",
                    "Anaghaura",
                    "Pratishtha",
                    "Bamhouri Khurd",
                    "Khiria",
                    "Sabua",
                    "Kauhari",
                    "Guptamau",
                    "Ragaul",
                    "Beejalpura",
                    "Ghutwai",
                    "Udaipura",
                    "Luhapuri",
                    "Suhajana",
                    "Rayanpur",
                    "Karahara Khurd",
                    "Garoutha",
                    "Jaraula",
                    "Bhetevar Kalan",
                    "Singhain",
                    "Tola Chaharum",
                    "Gaurahari",
                    "Dhanawan",
                    "Lidhaura Soyam",
                    "Luhari",
                    "Akathauhan",
                    "Gorakha",
                    "Chhedi Mau",
                    "Rampura Kadeem",
                    "Bamanetha",
                    "Kakara",
                    "Nausara",
                    "Bamaraara",
                    "Roshanpura",
                    "Imalikheda",
                    "Berikheda",
                    "Malakhanpur",
                    "Rupanagar",
                    "Soharayangaon",
                    "Itawa",
                    "Fatehpur",
                    "Kurora Dang",
                    "Manjhol",
                    "Maharaj Nagar",
                    "Jardinagar",
                    "Mid Lane Ganj",
                    "Dayalpura",
                    "Gopalpura",
                    "Bagaraun",
                    "Asthaun",
                    "Bamhouri Beladaran",
                    "Dhoomagir",
                    "Kutiya",
                    "Soopa",
                    "Barakachha",
                    "Puchhi",
                    "Naredai",
                    "Salat",
                    "Swasamaf",
                    "Charakhariya",
                    "Balachaur",
                    "Tola Soyam"
                ]

            }

        },


        /*
        ======================================================
        TEHSIL: KULPAHAR
        BLOCK: PANWARI
        ======================================================
        */

        "Kulpahar": {

            "Panwari": [

                "Syondhee",
                "Salaiyaa Khalsa",
                "Bihar",
                "Haivatpura Khangaran",
                "Silalapura",
                "Lakhaniyan",
                "Gaunagudha",
                "Tagariya",
                "Budaero",
                "Masoodpura",
                "Padariya",
                "Aleepura",
                "Lidhaura Khurd",
                "Laulara",
                "Chhachhari",
                "Nisawara",
                "Gararauli",
                "Jagpura Bujurg",
                "Govindpura",
                "Niboura",
                "Bendo",
                "Itwan",
                "Maragpura",
                "Khiriya Bujurg",
                "Turara Mohar",
                "Sukhaura",
                "Shergarh",
                "Bhagauree",
                "Jakha",
                "Lodipura",
                "Jakhee",
                "Uldan",
                "Simariya",
                "Bahadurpur Nau Abad",
                "Panwadi",
                "Raimalpura",
                "Chhatesar",
                "Haivatpura Brahmanan",
                "Devganpura",
                "Sargapura",
                "Kauniyan",
                "Bahadurpur Kala",
                "Didwara",
                "Khngarara",
                "Natara",
                "Kamala",
                "Kilhauva",
                "Naugaon",
                "Kasaari",
                "Pahaanpura",
                "Fadna",
                "Ghurwas Mau",
                "Saigarpura",
                "Sinkandarpura",
                "Gahalaud",
                "Khenna Nanakari",
                "Gugaura",
                "Jamala",
                "Vijaypur",
                "Panara",
                "Mahua Itaura",
                "Dinai",
                "Nonaka",
                "Andawara",
                "Richha",
                "Budhi",
                "Leta",
                "Bharwara",
                "Kunata",
                "Churari",
                "Charuwa",
                "Pathari Kadeem",
                "Vagaul",
                "Dvasi",
                "Vijarari",
                "Chandanhas",
                "Pahaniya",
                "Itaura Bujurg",
                "Vyarjau",
                "Parapanter",
                "Tingura",
                "Dadari",
                "Tola Panter",
                "Kajribar",
                "Dulara",
                "Ghatera",
                "Saathar",
                "Bhujpura",
                "Chapka",
                "Varanau",
                "Patha",
                "Nagraaghat",
                "Roopnaul",
                "Vihat",
                "Kotara",
                "Naipura",
                "Lohargaon",
                "Kohaniyan",
                "Marwari",
                "Sataiyara",
                "Tikariya",
                "Richhara",
                "Dharwar",
                "Lilwan",
                "Kasheepur",
                "Raipura Hardo Nisf",
                "Umarai",
                "Teiya",
                "Khairo Kalan",
                "Ruri Khurd",
                "Dhavar",
                "Basariya Panawaji",
                "Thalaura",
                "Bamhouri Kurmin",
                "Tunadar",
                "Bhura",
                "Chamarara",
                "Mahobakanth",
                "Karimawar",
                "Kanakuwa",
                "Tleepahani",
                "Vagarauni",
                "Barenda Bujurg",
                "Gaunau",
                "Putta",
                "Ravatpur Kalan",
                "Chauka",
                "Saura",
                "Kuwan Khenna",
                "Manki",
                "Karhara Khurd Khairo",
                "Rivai",
                "Devagaon",
                "Kanaura",
                "Ganaura",
                "Didaura",
                "Amiliya",
                "Pipari",
                "Bhanwara",
                "Amanpura"
            ],


            /*
            ==================================================
            TEHSIL: KULPAHAR
            BLOCK: JAITPUR
            ==================================================
            */

            "Jaitpur": [

                "Vudhaura",
                "Sela Khalsa",
                "Bhetevara Khurd",
                "Sugira",
                "Kulpahar",
                "Sirmaur",
                "Saharara",
                "Udaipura",
                "Mauh ari",
                "Sonkapura",
                "Bhilauni",
                "Bamhouri Khurd",
                "Atarapatha",
                "Lanpur",
                "Kamalpura",
                "Indaura",
                "Khaunariya",
                "Karahara Dang",
                "Rawatpura Khurd",
                "Prithvipura",
                "Thathevara",
                "Sataari",
                "Vaura",
                "Bihar",
                "Jaitpur",
                "Mudhari",
                "Belatal",
                "Kutara",
                "Maheba",
                "Magaraul Khurd",
                "Magaraul Kalan",
                "Mawaiya",
                "Chhitarwara",
                "Thurat",
                "Sarngapura",
                "Pachara",
                "Paraunwari",
                "Rajauni",
                "Binaura",
                "Khiriya Khurd",
                "Kunai",
                "Hansala",
                "Vasariya Jaitpur",
                "Khiriya Kala",
                "Vagarajan",
                "Tikariya Jaitpur",
                "Bhagaura",
                "Jailwara",
                "Bamaur",
                "Jatevara",
                "Aari",
                "Ladpura",
                "Karri Jadeed",
                "Baghaura",
                "Repura Kalan",
                "Budhawara",
                "Seegaun",
                "Bunakhera",
                "Magariya",
                "Ajanar",
                "Purawa Jaitpur",
                "Gahapura",
                "Khoi",
                "Sethwara",
                "Rampura Nau Abad",
                "Majhgawan Kala",
                "Barenda Khurd",
                "Ragauli",
                "Gunda",
                "Ataniyamanf",
                "Lakhaura",
                "Vachevara",
                "Ahraura",
                "Sagun iya Maf",
                "Lalauni",
                "Syavan",
                "Amarpura",
                "Bamanaura",
                "Veree",
                "Koti",
                "Bachhechhar Khurd",
                "Kaithora",
                "Bachhechhar Kalan",
                "Mahua Bandh",
                "Araghat Mau",
                "Bamauliya",
                "Purawa Panawani",
                "Majhgawan Khurd",
                "Ramoopura",
                "Ranipura",
                "Lamaura",
                "Khairariya",
                "Rikhavaha",
                "Tikariya Panawani",
                "Bhadarwara",
                "Khiriya Jadeed",
                "Bagvaha",
                "Nanawara",
                "Jagpura Khurd",
                "Ragauliya Khurd",
                "Leva",
                "Indrahata",
                "Pasana Bad",
                "Rajpura",
                "Nagada Dang",
                "Mohanpura",
                "Ghanghaura",
                "Vijauree",
                "Karara",
                "Salaiyaa Maf",
                "Bhagaari",
                "Narwara",
                "Purainiyan",
                "Pathari Nau Abad",
                "Khama",
                "Jagatpur Urf Gadhiya",
                "Rawatpura Khalsa",
                "Ganj",
                "Ghisalani",
                "Dhavarara"
            ]

        }

    },


    /*
    ==========================================================
    MADHYA PRADESH
    ==========================================================
    */

    "Madhya Pradesh": {

        "Chhatarpur": {

            "Maharajpur": {

                "Nowgong": [

                    "Nowgong"

                ]

            }

        }

    }

};


/*
============================================================
PIN MASTER

PIN केवल verified होने पर यहाँ रखें।
अभी गलत PIN नहीं डाल रहे हैं।
============================================================
*/


const PIN_MASTER = {};


/*
============================================================
HELPER
============================================================
*/

function getLocationStates(){

    return Object.keys(
        LOCATION_MASTER
    );

}


function getLocationDistricts(
    state
){

    return Object.keys(
        LOCATION_MASTER[state] || {}
    ).sort();

}


function getLocationTehsils(
    state,
    district
){

    return Object.keys(
        LOCATION_MASTER
        [state]?.[district] || {}
    ).sort();

}


function getLocationBlocks(
    state,
    district,
    tehsil
){

    const data =
    LOCATION_MASTER
    [state]
    ?.[district]
    ?.[tehsil];


    return Object.keys(
        data || {}
    ).sort();

}


function getLocationVillages(
    state,
    district,
    tehsil,
    block
){

    const data =
    LOCATION_MASTER
    [state]
    ?.[district]
    ?.[tehsil]
    ?.[block];


    if(!Array.isArray(data)){

        return [];

    }


    return data
    .map(
        village => {

            if(
                typeof village ===
                "string"
            ){

                return {

                    name:
                    village,

                    pincode:
                    getVillagePin(
                        state,
                        district,
                        tehsil,
                        block,
                        village
                    )

                };

            }


            return village;

        }
    )
    .sort(
        (a,b) =>
        a.name.localeCompare(
            b.name,
            "hi"
        )
    );

}


/*
============================================================
PIN
============================================================
*/

function getVillagePin(
    state,
    district,
    tehsil,
    block,
    village
){

    return (

        PIN_MASTER
        [state]
        ?.[district]
        ?.[tehsil]
        ?.[block]
        ?.[village]

        || ""

    );

}


/*
============================================================
FIND VILLAGE
============================================================
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
============================================================
AUTOMATIC ADDRESS
============================================================
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


    if(village)
        parts.push(village);


    if(block)
        parts.push(block);


    if(tehsil)
        parts.push(tehsil);


    if(district)
        parts.push(district);


    if(state)
        parts.push(state);


    if(pincode)
        parts.push(pincode);


    return parts.join(
        ", "
    );

}


/*
============================================================
OPTIONAL VILLAGE ADD FUNCTION
============================================================
*/

function addLocationVillage(
    state,
    district,
    tehsil,
    block,
    village,
    pincode = ""
){

    if(
        !LOCATION_MASTER[state]
    ){

        LOCATION_MASTER[state] = {};

    }


    if(
        !LOCATION_MASTER[state][district]
    ){

        LOCATION_MASTER[state][district] = {};

    }


    if(
        !LOCATION_MASTER[state]
        [district]
        [tehsil]
    ){

        LOCATION_MASTER[state]
        [district]
        [tehsil] = {};

    }


    if(
        !LOCATION_MASTER[state]
        [district]
        [tehsil]
        [block]
    ){

        LOCATION_MASTER[state]
        [district]
        [tehsil]
        [block] = [];

    }


    const list =
    LOCATION_MASTER[state]
    [district]
    [tehsil]
    [block];


    if(
        !list.includes(village)
    ){

        list.push(village);

    }


    if(pincode){

        if(
            !PIN_MASTER[state]
        )
            PIN_MASTER[state] = {};

        if(
            !PIN_MASTER[state][district]
        )
            PIN_MASTER[state][district] = {};

        if(
            !PIN_MASTER[state]
            [district]
            [tehsil]
        )
            PIN_MASTER[state]
            [district]
            [tehsil] = {};

        if(
            !PIN_MASTER[state]
            [district]
            [tehsil]
            [block]
        )
            PIN_MASTER[state]
            [district]
            [tehsil]
            [block] = {};

        PIN_MASTER[state]
        [district]
        [tehsil]
        [block]
        [village] = pincode;

    }

}


/*
============================================================
GLOBAL ACCESS
============================================================
*/

window.LOCATION_MASTER =
LOCATION_MASTER;

window.PIN_MASTER =
PIN_MASTER;

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

window.getVillagePin =
getVillagePin;

window.findLocationVillage =
findLocationVillage;

window.buildFarmerAddress =
buildFarmerAddress;

window.addLocationVillage =
addLocationVillage;


/*
============================================================
READY
============================================================
*/

window.dispatchEvent(

    new CustomEvent(
        "locationMasterReady",
        {
            detail:
            LOCATION_MASTER
        }
    )

);


/*
============================================================
CONSOLE
============================================================
*/

console.log(
    "LOCATION MASTER LOADED SUCCESSFULLY"
);

console.log(
    "States:",
    getLocationStates()
);

console.log(
    "Mahoba Districts:",
    getLocationDistricts(
        "Uttar Pradesh"
    )
);

console.log(
    "Mahoba Tehsils:",
    getLocationTehsils(
        "Uttar Pradesh",
        "Mahoba"
    )
);

console.log(
    "Mahoba Blocks:",
    getLocationBlocks(
        "Uttar Pradesh",
        "Mahoba",
        "Mahoba"
    )
);

console.log(
    "Kabrai Villages:",
    getLocationVillages(
        "Uttar Pradesh",
        "Mahoba",
        "Mahoba",
        "Kabrai"
    ).length
);

console.log(
    "Charkhari Villages:",
    getLocationVillages(
        "Uttar Pradesh",
        "Mahoba",
        "Charkhari",
        "Charkhari"
    ).length
);

console.log(
    "Jaitpur Villages:",
    getLocationVillages(
        "Uttar Pradesh",
        "Mahoba",
        "Kulpahar",
        "Jaitpur"
    ).length
);

console.log(
    "Panwari Villages:",
    getLocationVillages(
        "Uttar Pradesh",
        "Mahoba",
        "Kulpahar",
        "Panwari"
    ).length
);
