function handleOnSubmit(e) {
    e.preventDefault();
    var fileInput = document.getElementById('fileInput');
    // var fileDisplayArea = document.getElementById('fileDisplayArea');
    if (fileInput.files && fileInput.files[0]) {
        console.log("uploaded file", fileInput.files[0]);
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                // fileDisplayArea.innerHTML = "";
                var img = new Image();
                img.src = reader.result;
                // fileDisplayArea.appendChild(img);   

                addPost(reader.result);
            }

            reader.readAsDataURL(file);	
        } else {
            alert("File not supported, please upload an image.")
        }
    }
    else {
        addPost('empty');
    }
}