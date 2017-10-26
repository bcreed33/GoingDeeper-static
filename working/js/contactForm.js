//scrtip for the contact form

function _(id){return document.getElementById(id);}

function submitPittsburghForm(){

    _("subbtn").disable= true;
    _("status").innerHTML = 'please wait....';

    var formdata = new FormData();
    formdata.append ("name", _("name").value);
    formdata.append ("email", _("email").value);
    formdata.append ("mes", _("mes").value);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "../php/pittContactForm.php");
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            if(ajax.responseText == "success"){
                _("my_form").innerHTML = '<h4 id="thankYouMessage"> Thank you ' + _("name").value + ', your message has been sent!</h4>';
            } else {
                //_("status").innerHTML= ajax.responseText;
                _("#status").innerHTML= 'Error, Try again!';
                _("subbtn").disable = false;
            }
        }
    }
    ajax.send( formdata );
};



function submitCincinnatiForm(){

    _("subbtn").disable= true;
    _("status").innerHTML = 'please wait....';

    var formdata = new FormData();
    formdata.append ("name", _("name").value);
    formdata.append ("email", _("email").value);
    formdata.append ("mes", _("mes").value);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "../php/cinContactForm.php");
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            if(ajax.responseText == "success"){
                _("my_form").innerHTML = '<h4 id="thankYouMessage"> Thank you ' + _("name").value + ', your message has been sent!</h4>';
            } else {
                //_("status").innerHTML= ajax.responseText;
                _("#status").innerHTML= 'Error, Try again!';
                _("subbtn").disable = false;
            }
        }
    }
    ajax.send( formdata );
};
