//https://teachablemachine.withgoogle.com/models/8nrvs6LNo/
function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8nrvs6LNo/model.json', modelReady());
}

function modelReady() {
    classifier.classify(gotResult)
};
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("sound_name").innerHTML='I can hear -'+
        results[0].label
        document.getElementById("sound_accuracy").innerHTML='Accuracy -'+
        (results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("sound_name").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("sound_accuracy").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")"

        img = document.getElementById('alien_1');
        img1 = document.getElementById('alien_2');

        if(results[0].label=="Cat"){
            img.src = 'cat gif.gif';
            img1.src = 'Screenshot(dog).png';
        }else if(results[0].label=="Table banging"){
            img.src = 'Screenshot(cat).png';
            img1.src = 'dog gif gif.gif';
        }
    }
}