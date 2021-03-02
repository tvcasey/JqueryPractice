


$(document).ready(function() {
    //all jQuery go here:
            $(".trigger").click(function() {
            $(".overlay").slideDown();
    //the button in the box does not work.  See CSS.
        });
        $("button").click(function() {
            $.get("http://www.devcodecampmusiclibrary.com/api/music", function(data) {
                $("#result").html(data);
            //    $("#result").map(data);
                console.log(data);
            });
    });
        $("button").click(function() {
            $("p").css({"padding": "10px", "background-color": "yellow"})
        });
    });
