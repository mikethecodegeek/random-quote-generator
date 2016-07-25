$(document).ready(init);

function init(){
    console.log('Ready')
    $('#all').on("click",function() {
        $.get( "/api/quotes", function( data ) {
            var quoteList = "";
            data.forEach(function (a) {
                quoteList = quoteList + a.quote +" - " + a.author + "<br>"
            })
            $( "#result" ).html(quoteList );
    });
    })
    $('#random').on("click", function() {
         $.get( "/api/quotes/random", function( data ) {
            $( "#result" ).html(data.quote + " - " + data.author);
    });
    })
}