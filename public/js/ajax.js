$(function() {
    $('.myform2').submit(function () {
        return false
    });
   $('#search_box').keyup(autocomplet);
    if($('ul').children().length == 0) {
        $('ul').css({display:'none'});
    }



});
function autocomplet(){
    var keyword = $('#search_box').val();
    if(keyword.length>=2){
        $.ajax({
            type: "POST",
            url: "search",
            data: {search : keyword},
            success: function (data) { // запустится после получения результатов
                $("#ads_id").empty();
                $("#ads_id").show();
                //console.log(data);
                $("#ads_id").append(data);
               // $('li').click(set_item($('li').text()));
               // $('li').click(console.log($(this).text()));

            }
        });
    }
    else {
        $('#ads_id').hide();
    }
}


//$(function() {
//    $('.myform2').submit(function () {
//        return false
//    });
//    $("#search_box").keyup(search_ads);
//    function search_ads() {
//        // получаем то, что написал пользователь
//        var searchString = $("#search_box").val();
//        // формируем строку запроса
//        var data = 'search=' + searchString;
//
//        // если длина searchString > 3
//        if (searchString.length >= 1) {
//            // делаем ajax запрос
//            $.ajax({
//                type: "POST",
//                url: "search",
//                data: data,
//                beforeSend: function (html) { // запустится до вызова запроса
//                    $("#results").html('');
//                },
//                success: function (html) { // запустится после получения результатов
//                    $("#results").show();
//                    $("#results").append(html);
//                }
//            });
//        }
//        return false;
//    };
//});