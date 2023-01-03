jQuery(document).ready(function()
{
    jQuery('.form').on('click', function()
    {
        var name = jQuery('input#name').val();
        var address = jQuery('#address').val();

        $.ajax({
            url: "process.php",
            type: "POST",
            data: 
            {
                name : name,
                address : address
            },

            success: function (response) {
                jQuery('.information2').html(response);
            }
        });

        return false;
    });
});