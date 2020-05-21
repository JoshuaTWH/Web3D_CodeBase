$(document).ready(function(){

});
var spinning = false;

function spin(){
    spinning = !spinning;
    document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function Stopspin(){
    spinning = false;
    document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function animation(){
    if(document.getElementById('model__RotationTimer').getAttribute('enabled') != 'true'){
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'true');
        console.log(document.getElementById('model__RotationTimer').getAttribute('enabled'));
    }
    else{
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'false');
        console.log(document.getElementById('model__RotationTimer').getAttribute('enabled'));
    }
}