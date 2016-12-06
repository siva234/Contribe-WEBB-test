var n=0;
var galleryarray = new Array(20);
for(var i=0;i<20;i++){
    galleryarray[i] = new Array(30);
}
function galleryFunc() {
    var gform = document.getElementById('gallery_form');
    gform.style = 'display:inline';
}
function closeForm() {
    var gform = document.getElementById('gallery_form');
    gform.style = 'display:none';
}
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

function displayGallery(gallerynumber) {
    var gimages = [];
    for(var i=0 ;i<(galleryarray[gallerynumber][0]);i++)
    {
        gimages[i] = galleryarray[gallerynumber][i+1];
    }
    createDisplay(gimages);
}