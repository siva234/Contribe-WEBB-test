var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function search(){
    var searchword=document.getElementById("search_word").value;
    getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9d8e2444db074937a1683cf363402d6e&text="+searchword+"&privacy_filter=1&per_page=10&page=1&format=json&nojsoncallback=1", function(err, data) {
        if (err != null) {
            alert('Something went wrong: ' + err);
        } else {
            console.log(data.photos.photo);

            display(data.photos.photo);
        }
    });
}