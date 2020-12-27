const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const errorContainer = document.getElementById('error-container');

// prompt the user to select a media stream,
// then pass to the video element, then play
async function selectMediaStream() {
    try {
        errorContainer.hidden = true;
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        console.log(mediaStream);
        videoElement.srcObject = mediaStream;
        console.log(videoElement);
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        errorContainer.hidden = false;
        console.log('error: ', error);
    }
}

button.addEventListener('click', async () => {
    // disable the button
    button.disabled = true;

    // start PIP
    await videoElement.requestPictureInPicture();

    // reset the button
    button.disabled = false;
});

// on page load
selectMediaStream();