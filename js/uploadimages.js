var uploader = document.getElementById('uploader');
var imagesList = document.querySelector('.images');

function uploadImage() {
  var i, files = this.files, fileLength = files.length;
  if(FileReader) {
    for(i = 0; i < fileLength; i += 1) {
      var fileReader = new FileReader();
      fileReader.addEventListener('load', function (event) {
        displayImages(imagesList, [{ url: event.target.result }])
      });
      fileReader.readAsDataURL(files[i]);
    }
  }
}


uploader.addEventListener('change', uploadImage);