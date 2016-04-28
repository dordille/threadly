var main = function() {

    $('form').submit(function(event) {
        var $input = $(event.target).find('input');
        var comment = $input.val();

        if (comment != "") {
            var html = $('<li>').text(comment);
            html.prependTo('#comments');
            $input.val("");
        }

        return false;
    });

}

$(document).ready(main);