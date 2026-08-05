alert("🎉 Welcome to Bundelkhand Organic Farmer Producer Company Limited");
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            let mobile = document.getElementById("mobile").value;
            let aadhaar = document.getElementById("aadhaar").value;
            let name = document.getElementById("name").value;

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
