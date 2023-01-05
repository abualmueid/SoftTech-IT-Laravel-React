jQuery(document).ready(function()
{
    jQuery('.clickhere').click(function()
    {
        $.ajax({
            'url': "process.php",
            'type': "post",
            'data': 
            {
                'name': 'Mueid',
                'address': "Narayanganj"
            },

            'success': function (response) {
                jQuery('.information').html(response);
            }
        });
            
        return false;
    });
});