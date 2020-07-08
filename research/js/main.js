$('#publication-title').on("click", function(){
    var $arrows = $(this).find("h1");
    $('#list-publications').slideToggle(function(){
        $arrows.toggle();
    });
});




