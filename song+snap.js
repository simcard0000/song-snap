//Functions for listening to what gets dragged onto the drop area
function dragenter(e){
    e.stopPropagation();
    e.preventDefault();
}
function dragover(e){
    e.stopPropagation();
    e.preventDefault();
}
function drop(e){
    e.stopPropagation();
    e.preventDefault();
    image = e.dataTransfer.files;
    handleFiles(image);
}
//Once an image gets uploaded, what happens?
function handleFiles(){
    const fileList = this.files;
    const theFile = fileList[0];

    //send to back end; testing code here
    var data = new FormData();
    data.append("", "-");

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.send(data);
}

function main(){
    //Randomizing title color
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    if (R === 0 && G === 0 && B === 0){
        R = 255;
        G = 255;
        B = 255;
    }
    const title = document.getElementById("siteTitle");
    title.style.color = "rgb("+R+", "+G+", "+B+")";

    //Acting on the images, fix listening to dragging images
    const uploadPick = document.getElementById("uploadPartPick");
    uploadPick.addEventListener("change", handleFiles, false);
    const uploadDrop = document.getElementById("uploadPartDrop");
    uploadDrop.addEventListener("dragenter", dragenter, false);
    uploadDrop.addEventListener("dragover", dragover, false);
    uploadDrop.addEventListener("drop", drop, false);
};
//Waiting for everything to load before calling this script
window.onload = function(){
    main();
};