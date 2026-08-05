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
