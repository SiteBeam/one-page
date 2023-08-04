$(document).ready(function () {
    $("#navEnlaces").load("info/nav.md", function () {
        var converter = new showdown.Converter();
        var markdownText = $('#navEnlaces').text();
        var html = converter.makeHtml(markdownText);
        $("#navEnlaces").html(html);
        $("#navEnlaces").append('<ul></ul>');
        $("#navEnlaces a").each(function(){
            $("#navEnlaces ul").append('<li class="nav-item me-2 mb-2"><a href="'+$(this).attr('href')+'" class="btn btn-tema rounded-pill">'+$(this).html()+'</a></li>');
        });
        $("#navEnlaces a").addClass("btn btn-primary");
        var enlace = $("#navEnlaces ul").html();
        $("#navEnlaces").html(enlace);
    });
});