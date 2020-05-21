//Javascript gallery generator
//Create the XM=MLHttpRequest object for communicating with the web sever
var xmlHttp =new XMLHttpRequest ();
//Stores number of horizontalColums gallery has, if too large it won't fir in browser window
var numberOfcolums = 4;
//Stores newly generated gallery HTML code
var htmlcode = "";
//Temporarily stores server response while code is generated
var response;

$(document).ready(function(){
    //set up the path to the php function that reads the image directory ti find the thumbnail file names
    var send = "../web/hook.php";
    //Open the connection to the web server
    xmlHttp.open("GET", send, true);
    //tell the server that the cloent has no outgoing message
    xmlHttp.send(null);
    //Check we get a valid server response
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            //response handler code
            //alert(xmlHttp.responseText);
            response = xmlHttp.responseText.split("~");
            for (var i =0; i < response.length; i++){
                htmlcode += '<a>';
                htmlcode += '<img class="card-img-top img-thumbnail" scr="' + response[i] + '"/>';
                htmlcode += '</a>';
            }
            document.getElementById('gallery').innerHTML = htmlcode;
        }
    }
});