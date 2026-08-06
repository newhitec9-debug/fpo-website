alert("🎉 Welcome to Bundelkhand Organic Farmer Producer Company Limited");

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("farmerForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let mobile = document.getElementById("mobile").value.trim();
            let aadhaar = document.getElementById("aadhaar").value.trim();

            if(name==""){
                alert("Please Enter Farmer Name");
                return;
            }

            if(mobile.length!=10){
                alert("Enter Valid Mobile Number");
                return;
            }

            if(aadhaar.length!=12){
                alert("Enter Valid Aadhaar Number");
                return;
            }

            alert("🎉 Farmer Registration Successful!");

        });

    }

});
// =====================
// LOGIN SYSTEM
// =====================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        // Farmer Login

        if(username === "farmer" && password === "12345"){

            localStorage.setItem("user","farmer");
window.location.replace("farmer-dashboard.html");

        }

        // Admin Login

        else if(username === "admin" && password === "admin123"){

            localStorage.setItem("user","admin");
window.location.replace("admin-dashboard.html");

        }

        else{

            alert("Invalid Username or Password");

        }

    });

}
