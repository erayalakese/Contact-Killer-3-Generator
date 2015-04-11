$(document).ready(function () {
    $('input').keyup(function () {
            
        $('#content').find('.yourname').html($('input[name=yourname]').val());
         $('#content').find('.youraddress').html($('input[name=youraddress]').val());
        $('#content').find('.customername').html($('input[name=customername]').val());
        $('#content').find('.customeradress').html($('input[name=customeradress]').val());
        $('#content').find('.task').html($('input[name=task]').val());
        $('#content').find('.total').html($('input[name=total]').val());
        $('#content').find('.date').html($('input[name=date]').val());
        $('#content').find('.court').html($('input[name=court]').val());
        $('#content').find('.paymentschedule').html($('input[name=paymentschedule]').html());
    });
});
