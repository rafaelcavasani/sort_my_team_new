$(document).ready(function() {

    $('input[type=checkbox]').on('change', function() {
        var check = 0;
        $('input[type=checkbox]').each(function() {
            if ($(this).is(':checked')) check++;
        });
        $('#countSelected').text(check);
    });

    $('#btnSortition').click(function() {
        var list = [];
        $('input[type=checkbox]').each(function() {
            if ($(this).is(':checked')) {
                var name = $(this).parent().parent().find('td').eq(1).text();
                var position = $(this).parent().parent().find('td').eq(2).text();
                var importance = $(this).parent().parent().find('td').eq(3).text();
                var player = {
                    name: name,
                    position: position,
                    importance: importance
                }
                list.push(player);
            }
        });
        $.ajax({
            url: '/players/sortition',
            method: 'GET',
            dataType: 'json',
            data: list,
            success: function (data) {
                console.log(data);
            }
        });
    });

});