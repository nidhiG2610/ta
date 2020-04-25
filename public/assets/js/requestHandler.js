// Registration tab1
 $(".nextButton").click(function(){
            $("#register-form").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    email: "required",
                    phone: "required",
                    pswd: "required",
                    cpswd: "required"
                }, messages: {
                        firstname: "Please specify your name.",
                        lastname: "Please specify your name.",
                        email: "Please specify your email.",
                        phone: "Please specify your Phone number.",
                        pswd: "Please enter your password.",
                        cpswd: "Please enter confirm password.",
                }        
            });
        });


// Registration form start 
function addUser(){  
            $("#register-form").validate({
                rules: {
                    first_name: "required",
                    last_name: "required",
                    user_name: "required",
                    email: "required",
                    contact_no: "required",
                    password: "required",
                    cpassword: {
                    equalTo: "#password"
                     },
                    birth_date: "required",
                    country :"required",
                    state:"required",
                    city:"required",
                    streetno:"required",
                    streetname:"required",
                    postal: "required",
                    institute: "required",
                    reference: "required",
                    // compound rule
                    email: {
                      required: true,
                      email: true
                    }
                },
                messages: {
                    first_name: "Please specify your name.",
                    last_name: "Please specify your name.",
                    user_name: "Please enter your user name.",
                    email: {
                      required: "We need your email address to contact you.",
                      email: "Your email address must be in the format of name@domain.com"
                    },
                    contact_no: "Please specify your Phone number.",
                    password: "Please enter your password.",
                    cpassword: "Enter Confirm Password Same as Password.",
                    birth_date: "Please specify your Birth Date.",
                    country: "Please enter Address Details.",
                    state:"Please enter Address Details.",
                    city:"Please enter Address Details.",
                    streetno:"Please enter Address Details.",
                    streetname:"Please enter Address Details.",
                    postal: "Please enter Address Details.",
                    reference: "Please specify How did you here about us?",
                    institute: "Please enter University/College name. ",                    
                },
            submitHandler: function(form) {
                     var data = $('#register-form').serialize(); 
                    console.log(JSON.stringify(data));
                    event.preventDefault();
                        fetch('http://127.0.0.1:3000/register', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*'},
                        body: (data)
                      }).then((response) => { 
                     console.log(response);  
                           if(response.status == 500){
                                    $(".error").text(data.message);
                                    
                            }else{
                                 var ok = confirm("Your Data is submitted!");
                                    if(ok == true){
                                    window.location.replace("index.html");
                               
                            }
                    }        
                 });
        }              
            
        });  }

// Registration form end


// Login form start
function checkUser(){
        $("#login-form").validate({
                rules: {
                    user_name: "required",
                    password: "required"
                }, messages: {
                        user_tname: "Please specify your name.",
                        password: "Please enter your password.",
                },
                submitHandler: function(form) {
                    var data = $('#login-form').serialize(); 
                    console.log(JSON.stringify(data));
                    event.preventDefault();
                        fetch('http://127.0.0.1:3000/login', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Accept': 'application/json'},
                        body: (data)
                      }).then((response) => { 
                        response.json().then(data => { 
                           if(data.status == 200){
                                    localStorage.setItem('username',JSON.stringify(data.data[0],null,' '));  // set local storage
                                  window.location.replace("index.html");
                            }else{
                                $(".error").text(data.message);
                            }
                      });
                    })
                    }            
            });

}

// Login form end

// Search form start



// Search form end
            
