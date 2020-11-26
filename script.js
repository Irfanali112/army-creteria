
function abc(){

    var nationality = document.getElementById("nationality").value;
    var age = document.getElementById("age").value;
    var education = document.getElementById("education").value;


       console.log(nationality , education)

       age=parseInt(age);
     

 if (nationality === "pakistan" && (age >= 18 && age <= 25) || education === "graduation" )
 {
        document.getElementById("result").innerHTML="<h1>eligible</h1>";


    }

   else{


        document.getElementById("result").innerHTML="<h1>not eligible</h1>"
    


   } 


  
















}

