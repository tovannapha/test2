document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log('if work say hi');
    console.log(navigator.camera);

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}


}