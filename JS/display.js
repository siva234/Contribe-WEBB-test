/*
 *Creating image src urls to display the search results to the user
 *
 * @params
 * photo: Json object containing all the search results
 */
function display(photo) {
    var images = [1];
    var i = 0;
    var node = document.getElementById("display_frame");

    while (photo[i] != null) {
        images[i] = "https://farm" + photo[i].farm + ".static.flickr.com/" + photo[i].server + "/" + photo[i].id + "_" + photo[i].secret + "_b.jpg";
        i++;
    }
    createDisplay(images);
}

/*
 *Displaying photos in the images on display_frame div
 *
 * @params
 *images: An array of images to be displayed
 */
function createDisplay(images) {
    var node=document.getElementById("display_frame");
    console.log(node.childElementCount);
    //Clearing the display frame
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    // Displaying the images
    for(i=0;i<images.length;i++)
        {
            var Lnk= images[i];
            var newimagetag=document.createElement('div');
            //newimagetag.flex =1;
            newimagetag.id = "displayphotos";
            newimagetag.class = "col-2";
            newimagetag.innerHTML = '<img id="thumbimage" src='+images[i]+' style="display:inline-block;">'+
                '<form><input type="button" id="viewbtn" class="btns" value="VIEW" onclick="viewFunc(' + "'" + images[i] + "'" + ')">'+
                '<input type="button" id="addbtn" class="btns" value="ADD" onclick="addFunc(' + "'" + images[i] + "'" + ')"></form>';
            newimagetag.style="background-color:grey;";
            node.appendChild(newimagetag);

        }
}