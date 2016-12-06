var n=0;                                //Gallery number
var galleryarray = new Array(20);       //2D Array for storing the images in each gallery
for(var i=0;i<20;i++){
    galleryarray[i] = new Array(30);
}

/*
 *Function for displaying the gallery_form
 */
function galleryFunc() {
    var gform = document.getElementById('gallery_form');
    gform.style = 'display:inline';
}


/*
 *Function for closing the gallery_form
 */
function closeForm() {
    var gform = document.getElementById('gallery_form');
    gform.style = 'display:none';
}


/*
 *Function for creating and adding the gallery to gallery_frame
 */
function createGallery() {
    if (addimages[0] == 0)
    {
        alert("There are no Images selected. Please select the images before you add...")
        closeForm();
    }
    else {
        closeForm();
        n=n+1;
        for (var i = 0; i < (m + 1); i++) {
            if (i == 0) {
                //galleryarray[i] = new array();
                galleryarray[n][i] = addimages.length;
            }

            else
                galleryarray[n][i] = addimages[i - 1];
        }

        var gallerydiv = document.getElementById('gallery_frame');
        var newgallery = document.createElement('div');
        newgallery.value = n;
        newgallery.id = n;
        newgallery.class = 'galleries';
        newgallery.innerHTML = 'Gallery ' + n + '<br><button value="View" onclick = "displayGallery(' + "'" + n + "'" + ')">View Gallery</button>';
        gallerydiv.appendChild(newgallery);
        addimages = [0];
        m = 0;
    }
}

/*
 *Function for displaying the images in the gallery selected
 *
 *@params
 * gallerynumber: The unique number of the gallery selected
 */
function displayGallery(gallerynumber) {
    var gimages = [];
    for(var i=0 ;i<(galleryarray[gallerynumber][0]);i++)
    {
        gimages[i] = galleryarray[gallerynumber][i+1];
    }
    createDisplay(gimages);
}