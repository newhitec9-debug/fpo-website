/* =========================================================
   Bundelkhand Organic FPO
   Firebase Admin Authentication
   ========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


/* =========================================================
   FIREBASE CONFIG
   ========================================================= */

const firebaseConfig = {

    apiKey:
        "AIzaSyDEX5Ta3l2UVT7IKlWdxqqyacY0HELM24s",

    authDomain:
        "bundelkhand-organic-fpo.firebaseapp.com",

    projectId:
        "bundelkhand-organic-fpo",

    storageBucket:
        "bundelkhand-organic-fpo.firebasestorage.app",

    messagingSenderId:
        "939641455963",

    appId:
        "1:939641455963:web:1745b1299b3c463e74867e"

};


/* =========================================================
   INITIALIZE FIREBASE
   ========================================================= */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


/* =========================================================
   ADMIN USER
   =========================================================
   अभी आपके Firebase Authentication में यही Admin Email है.
   ========================================================= */

const ADMIN_EMAIL =
    "newhitec9@gmail.com";


/* =========================================================
   CHECK ADMIN AUTHENTICATION
   ========================================================= */

onAuthStateChanged(
    auth,
    function(user) {

        /*
         * User login नहीं है
         */

        if (!user) {

            window.location.replace(
                "login.html"
            );

            return;

        }


        /*
         * User login है लेकिन Admin Email
         * से match नहीं करता.
         */

        if (
            user.email &&
            user.email.toLowerCase() !==
            ADMIN_EMAIL.toLowerCase()
        ) {

            signOut(auth)
                .finally(
                    function() {

                        window.location.replace(
                            "login.html"
                        );

                    }
                );

            return;

        }


        /*
         * Admin successfully authenticated.
         */

        console.log(
            "Admin Authentication Verified:",
            user.email
        );


        /*
         * Page को visible करें अगर
         * page में #adminPage मौजूद है.
         */

        const adminPage =
            document.getElementById(
                "adminPage"
            );


        if (adminPage) {

            adminPage.style.display =
                "block";

        }


        /*
         * Admin email display करने के लिए
         * optional element.
         */

        const adminEmail =
            document.getElementById(
                "adminEmail"
            );


        if (adminEmail) {

            adminEmail.textContent =
                user.email;

        }

    }
);


/* =========================================================
   LOGOUT FUNCTION
   ========================================================= */

window.adminLogout =
    async function() {

        try {

            await signOut(auth);

            window.location.replace(
                "login.html"
            );

        }
        catch (error) {

            console.error(
                "Logout Error:",
                error
            );

            alert(
                "Logout नहीं हो सका। कृपया फिर से प्रयास करें।"
            );

        }

    };


/* =========================================================
   GET CURRENT ADMIN
   ========================================================= */

window.getCurrentAdmin =
    function() {

        return auth.currentUser;

    };
