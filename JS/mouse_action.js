var m =0;
var addimages = [0]; //array for storing the selected images
/*
* Function for activating the view button on the images
*
* @params
* image: Link of the image to view
 */
function viewFunc(image){

    var viewimage=document.getElementById('viewdiv');
    viewimage.style='display:inline;top:1px';
    viewimage.innerHTML='<img src="'+image+'"  id="viewimage">';

}
/*
 * Function for action on closing the view Div
 */
function closeViewFunc() {
    var viewimage=document.getElementById('viewdiv');
    viewimage.style='display:none;top:1px';
}
/*
 * Function for activating the add button
 *
 * @params
 * image: Link of the image selected
 */
function addFunc(image){

    addimages[m] = ' '+image;
    m++;
}
