var m =0;
var addimages= [m];
/*
* Function for activating the view button
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
 */
function addFunc(image){

    addimages[m] = ' '+image;
    m++;
}
