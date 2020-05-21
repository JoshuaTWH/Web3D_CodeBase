$(document).ready(function(){
    $.getJSON('../web/model/data.json', function(jsonObj){
        //console.log(jsonObj);
        //home page data
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
        $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');

        $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
        $('#subTitle_centre').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[2].description + '</p>');

        $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
        $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[3].description + '</p>');

        $('#title_switch').html('<h2>' + jsonObj.pageTextData[4].title + '</h2>');
        $('#subTitle_switch').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
        $('#description_switch').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

        $('#title_about').html('<h1>' + jsonObj.pageTextData[5].title + '</h1>');
        $('#subTitle_about_error').html('<h4>' + jsonObj.pageTextData[5].subTitle_error + '</h4>');
        $('#description_about_error1').html('<p>' + jsonObj.pageTextData[5].description_e1 + '</p>');
        $('#description_about_error2').html('<p>' + jsonObj.pageTextData[5].description_e2 + '</p>');
        $('#description_about_error3').html('<p>' + jsonObj.pageTextData[5].description_e3 + '</p>');
        $('#subTitle_about_info').html('<h4>' + jsonObj.pageTextData[5].subTitle_info + '</h4>');
        $('#description_about_info1').html('<p>' + jsonObj.pageTextData[5].description_i1 + '</p>');
        $('#description_about_info2').html('<p>' + jsonObj.pageTextData[5].description_i2 + '</p>');
    });
});