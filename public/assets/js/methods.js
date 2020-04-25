
/*****************************js to create list of TA***************************************/

 /*
  *  This function call an API form database
  *  to fetch all the details of all the TAs 
  *  on load of page
  */

function getListOnLoad(){
     // code supposed to run once DOM is loaded 
    fetch('http://127.0.0.1:3000/getListOfTa', {
                        method: 'GET',
                        mode: 'cors',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Accept': 'application/json'},
                      }).then((response) => { 
                        response.json().then(data => { 
                            var dataArray = data.data;
                           if((dataArray.length)){  
                              var html = '';
                                 dataArray.forEach(element => { 
                                  html +=('<img src="assets/images/'+ element.image +'" class="img-circle" id="img-div-'+element.id+'" data-category="'+element.id +'" onclick="getTADetailsbyid('+element.id+')" alt="service-image" width="120" height="120" />');   
                              });
                              $("#myList").html(html);
                            }
                      });
                    })
};
  


  /*
  *  Add image description in description div
  *  on click of TA image
  */  
  function myScript(id,data){  
                // add active class on image
                $("#img-div-"+id).addClass('active-image');
                if( $("#img-div-"+id).siblings().hasClass('active-image') == true )
                {
                    $("#img-div-"+id).siblings().removeClass('active-image');
                }
            // insert image data
            insertData = data.data[0];    
                       $("img-div-"+id).addClass('active-image');         
                       $("img.ta-profile").attr("src","assets/images/"+insertData.image);
                       $("h3.ta-name").text(insertData.first_name+" "+insertData.last_name );
                       $("h4.ta-subjects").text(insertData.subjects);
                       $("h4.ta-speed").text(insertData.speed);
                       $("h4.ta-language").text(insertData.language);
                       $("h4.ta-exerperince").text(insertData.experince);  
                       $("h4.ta-description").text(insertData.description);  
 }

 /*
  *  This function call an API form database
  *  to fetch the details of TA by ID
  *  on click of TA image
  *  params : id
  */ 
function getTADetailsbyid(id){
    fetch("http://127.0.0.1:3000/getTADetailsbyid/"+id, {
                        method: 'GET',
                        mode:'cors',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*','Accept': 'application/json'},
                      }).then((response) => { 
                        response.json().then(data => { 
                            var dataArray = data.data;
                           if((dataArray.length)){
                               myScript(id, data);
                            }
                      });
         })
}


