$(document).ready(function()
{
    
    /**
     * For section#topthree
     */
    $.ajax(
    {
        url: "data.xml",
        method: "GET",
        dataType: "xml"
    })
    .done(function( xmldata )
    {
        // Check the data (comment out/move as needed)
        console.log( xmldata );
        
        // We're using the jQuery convention of naming the var with $
        var $xmlDoc = $( xmldata );
        
        // You have to select the top three items (e.g. Pokemon).
        // In my XML example, I've added a "favourite" attribute to the Pokemon item.
        // In yours, you should have three or more items with the favourite attribute set to "true".
        
        // Use $.each() on the parsed XML ($xmldoc) and look for items with the favourite attribute.
        // Remember to jQuery-ify the item/this !
        // You can check the attribute with the jQuery .attr() function.
        // Skip over ones that don't match with the "return" statement.
        
        var totalFave = 0;
        
        $(xmldata).find("pokemon").each( function(index, item)
        {
            var $item = $(item);
            console.log($item.attr("favourites") == true);
            // Make sure you only select the first three if you have more than three favourites!
            // You can make a "flag" variable that you manually add during the
            // $.each() loop and check to make sure that you only select three.
            
            // To create elements in elements in jQuery, you should create elements in vars,
            // then append the children to the parents. For example:
            
            var $article = $('<article/>', {
                id: 'pokemon-'+ $item.attr('id')
            });
            
            var $name = $('<h2/>', {
                text: $item.find('name').text()
            });
            
            $article.append($name);
            
            // Add it to the section using $.appendTo('#mySelector');
            
            // Make sure to ++ the favourites flag variable
            totalFave++;
        
        });
    })
    .fail(function( jqXHR, textStatus )
    {
        alert( "Request failed: " + textStatus );
    });
    
    
});