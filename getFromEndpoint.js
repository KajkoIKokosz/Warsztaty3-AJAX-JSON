$(document).ready(function() {
    $('#btn').on('click', function() {
        $.ajax({
            url:"http://date.jsontest.com",
            //data: {},
            //type: "GET",
            dataType: 'json',
            done: function( json ) {
                console.log("dane json zostały zaczytane poprawnie");
                var jsArray = JSON.parse( json );
                console.log(jsArray);
            },
    //        error: function( xhr, status, errorThrown ) {},
    //        complete: function( xhr, status ) {}
        })
    })    
})
