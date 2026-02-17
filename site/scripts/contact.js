let photo = document.getElementById("image");

function over(){
    photo.src = "../images/Contact/profile.jpg";
    console.log("hey");
}

function off() {
        photo.src = "../images/Contact/profile_sketch.jpg";
    }   

function over_color(id){
    image = document.getElementById(id);
    image.src = "../images/Contact/color_"+id;
}

function off_color(id){
    image = document.getElementById(id);
    image.src = "../images/Contact/"+id;
}