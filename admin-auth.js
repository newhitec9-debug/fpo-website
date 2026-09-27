/* =========================================================
   Bundelkhand Organic FPO
   Firebase Admin Authentication
   FINAL VERSION
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

const app =
    initializeApp(firebaseConfig);

const auth =
    getAuth(app);


/* =========================================================
   ADMIN EMAIL
   =========================================================
   केवल यही Firebase account Admin रहेगा.
   ========================================================= */

const ADMIN_EMAIL =
    "newhitec9@gmail.com";


/* =========================================================
   SECURITY SCREEN
   ========================================================= */

function createSecurityScreen() {

    let screen =
        document.getElementById(
            "adminSecurityScreen"
        );


    if (screen) {
        return;
    }


    screen =
        document.createElement("div");


    screen.id =
        "adminSecurityScreen";


    screen.innerHTML = `

        <div style="
            position:fixed;
            inset:0;
            background:#f4f7f5;
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:999999;
            font-family:Arial,'Noto Sans Devanagari',sans-serif;
        ">

            <div style="
                background:#ffffff;
                padding:35px;
                border-radius:14px;
                box-shadow:0 5px 25px rgba(0,0,0,.15);
                text-align:center;
                max-width:420px;
                width:90%;
            ">

                <div style="
                    font-size:45px;
                    margin-bottom:15px;
                ">
                    🔐
                </div>

                <h2 style="
                    margin:0 0 10px;
                    color:#176b35;
                ">
                    Admin Security Check
                </h2>

                <p style="
                    margin:0;
                    color:#666;
                    font-size:15px;
                ">
                    Admin access verify किया जा रहा है...
                </p>

            </div>

        </div>

    `;


    document.body.appendChild(screen);

}


/* =========================================================
   HIDE ADMIN PAGE
   ========================================================= */

function hideAdminPage() {

    const adminPage =
        document.getElementById(
            "adminPage"
        );


    if (adminPage) {

        adminPage.style.display =
            "none";

    }

}


/* =========================================================
   SHOW ADMIN PAGE
   ========================================================= */

function showAdminPage(user) {

    const adminPage =
        document.getElementById(
            "adminPage"
        );


    if (adminPage) {

        adminPage.style.display =
            "block";

    }


    /* -----------------------------------------
       SHOW ADMIN EMAIL
    ----------------------------------------- */

    const adminEmail =
        document.getElementById(
            "adminEmail"
        );


    if (adminEmail) {

        adminEmail.textContent =
            user.email || ADMIN_EMAIL;

    }


    /* -----------------------------------------
       REMOVE SECURITY SCREEN
    ----------------------------------------- */

    const screen =
        document.getElementById(
            "adminSecurityScreen"
        );


    if (screen) {

        screen.remove();

    }

}


/* =========================================================
   CHECK ADMIN AUTHENTICATION
   ========================================================= */

function checkAdminAuthentication() {

    createSecurityScreen();

    hideAdminPage();


    onAuthStateChanged(
        auth,
        async function(user) {

            /* =====================================
               USER NOT LOGGED IN
            ===================================== */

            if (!user) {

                window.location.replace(
                    "login.html"
                );

                return;

            }


            /* =====================================
               CHECK EMAIL
            ===================================== */

            const userEmail =
                String(
                    user.email || ""
                )
                .trim()
                .toLowerCase();


            const adminEmail =
                ADMIN_EMAIL
                .trim()
                .toLowerCase();


            /* =====================================
               WRONG ACCOUNT
            ===================================== */

            if (
                userEmail !== adminEmail
            ) {

                console.warn(
                    "Unauthorized Admin Access:",
                    user.email
                );


                try {

                    await signOut(auth);

                }
                catch(error) {

                    console.error(
                        "Unauthorized logout error:",
                        error
                    );

                }


                window.location.replace(
                    "login.html"
                );

                return;

            }


            /* =====================================
               ADMIN VERIFIED
            ===================================== */

            console.log(
                "Admin Authentication Verified:",
                user.email
            );


            showAdminPage(user);

        }
    );

}


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
        catch(error) {

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


/* =========================================================
   START SECURITY CHECK
   ========================================================= */

checkAdminAuthentication();
