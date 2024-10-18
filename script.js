// script.js

document.getElementById('end-call').addEventListener('click', endCall);
document.getElementById('mute-call').addEventListener('click', muteCall);
document.getElementById('speaker-call').addEventListener('click', speakercall);


function endCall() {
    document.getElementById('call-status').innerText = "Call Ended";
    // Here you could add more functionality to actually end the call in a real application
}

function muteCall() {
    const muteButton = document.getElementById('mute-call');
    if (muteButton.innerText === "Mute") {
        muteButton.innerText = "Unmute";
        document.getElementById('call-status').innerText = "Muted";
    } else {
        muteButton.innerText = "Mute";
        document.getElementById('call-status').innerText = "Call Active";
    }
}

function speakercall() {
    const speakerButton = document.getElementById('speaker-call');
    if (speakerButton.innerText === "Speaker") {
        speakerButton.innerText = "Speaker off";
        document.getElementById('call-status').innerText = "speaker on";
    } else {
        speakerButton.innerText = "Speaker";
        document.getElementById('call-status').innerText = "Speaker Off";
    }


}

// Get the end call button
const endCallButton = document.getElementById('end-call');

// Add an event listener to the end call button
endCallButton.addEventListener('click', function() {
    // Redirect to index.html
    window.location.href = 'index.html';
});