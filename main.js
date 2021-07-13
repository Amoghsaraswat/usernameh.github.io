Webcam.set({
   width:310,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='photo1' src='"+data_uri+"'>";
    });
}
console.log("ml5 verison",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded() {
    console.log("MODEL.LOADED");
}
function photo() {
    img=document.getElementById('photo1');
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("resultobject").innerHTML=results[0].label;
    }
}