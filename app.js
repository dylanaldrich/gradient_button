console.log("Hello world!");

$('#my-btn').on('click', function() {
    console.log($('body').css("background-color"));
    if($('body').css("background-color") === "blue") {
        $('body').css("background-color", "red");
    } else {
        $('body').css("background-color", "blue");
    }
});