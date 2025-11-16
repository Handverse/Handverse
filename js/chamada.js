function startVideoFromCamera(){

    const vid = {video:{width:900,height:1000}}
navigator.mediaDevices.getUserMedia(vid,{audio:true}).then(stream=>{

const videoElement = document.querySelector("#video")
videoElement.srcObject = stream

}).catch(error=>{console.log(error)})
}

window.addEventListener("DOMContentLoaded", startVideoFromCamera)
