jQuery(document).ready(function()
{
    jQuery('.form').on(submit, function()
    {
        var name = jQuery('#name').val();
        var address = jQuery('#address').val();

        $.ajax({
            url: "process.php",
            type: "POST",
            data: 
            {
                name : name,
                address : address
            },

            success: function (response) 
            {
                jQuery('.information2').html(response);
            }
        });

        // ----------------- 2nd way --------------------
        // $.post('process.php', {name: 'name', address: 'address'}, function()
        // {
        //     success: function(response)
        //     {
        //         jQuery('information').html(response);
        //     }
        // });

        return false;
    });
});