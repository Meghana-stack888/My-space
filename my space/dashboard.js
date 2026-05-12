const username = localStorage.getItem("username");
const welcomeText = document.getElementById("welcomeText");
welcomeText.innerHTML = `Good Evening, ${username} ✨`;
const profileUpload = document.getElementById("profileUpload");

const profilePreview = document.getElementById("profilePreview");

profileUpload.addEventListener("change", function(){

    const file = profileUpload.files[0];

    if(file){

        const imageURL = URL.createObjectURL(file);

        profilePreview.src = imageURL;
    }

});
const saveButton = document.getElementById("saveNote");

const noteInput = document.getElementById("noteInput");
saveButton.addEventListener("click", function(){

    localStorage.setItem("myNote", noteInput.value);

});
const savedNote = localStorage.getItem("myNote");

if(savedNote){

    noteInput.value = savedNote;
}
const moodButtons = document.querySelectorAll(".mood-options button");

moodButtons.forEach(function(button){

    button.addEventListener("click", function(){

        moodButtons.forEach(function(btn){
            btn.classList.remove("active");
        });

        button.classList.add("active");

        localStorage.setItem("selectedMood", button.innerText);

    });

});


const savedMood = localStorage.getItem("selectedMood");

moodButtons.forEach(function(button){

    if(button.innerText === savedMood){

        button.classList.add("active");

    }

});


const memoryInput = document.getElementById("memoryInput");

const memoryGallery = document.getElementById("memoryGallery");
memoryInput.addEventListener("change", function(){

    const files = memoryInput.files;

    for(let i = 0; i < files.length; i++){

        const imageURL = URL.createObjectURL(files[i]);

        const image = document.createElement("img");

        image.src = imageURL;

        image.classList.add("gallery-image");

        image.addEventListener("click", function(){

    image.remove();

});

        memoryGallery.appendChild(image);


    }

});
document.getElementById("moodBtn")
.addEventListener("click", function(){

    document.getElementById("moodSection")
    .scrollIntoView({
        behavior: "smooth"
    });

});
document.getElementById("notesBtn")
.addEventListener("click", function(){

    document.getElementById("notesSection")
    .scrollIntoView({
        behavior: "smooth"
    });

});
document.getElementById("memoriesBtn")
.addEventListener("click", function(){

    document.getElementById("memoriesSection")
    .scrollIntoView({
        behavior: "smooth"
    });

});
document.getElementById("selfcareBtn")
.addEventListener("click", function(){

    document.getElementById("selfcareSection")
    .scrollIntoView({
        behavior: "smooth"
    });

});
document.getElementById("stickyBtn")
.addEventListener("click", function(){

    document.getElementById("stickySection")
    .scrollIntoView({
        behavior: "smooth"
    });

});
const stickyInput = document.getElementById("stickyInput");

const addStickyBtn = document.getElementById("addStickyBtn");

const stickyNotes = document.querySelector(".sticky-notes");

    const allStickyNotes = document.querySelectorAll(".sticky");

allStickyNotes.forEach(function(note){

    note.addEventListener("click", function(){

        note.remove();

    });

});
addStickyBtn.addEventListener("click", function(){




    const noteText = stickyInput.value;

    if(noteText === ""){
        return;
    }
const colors = ["pink", "yellow", "purple"];
    const newSticky = document.createElement("div");

    newSticky.classList.add("sticky");
    const randomColor = colors[
    Math.floor(Math.random() * colors.length)
];

newSticky.classList.add(randomColor);

    newSticky.innerText = noteText;

    newSticky.addEventListener("click", function(){

    newSticky.remove();

});

    stickyNotes.appendChild(newSticky);

    stickyInput.value = "";

});
const bellIcon = document.getElementById("bellIcon");

const notificationBox = document.getElementById("notificationBox");
bellIcon.addEventListener("click", function(){

    if(notificationBox.style.display === "block"){

        notificationBox.style.display = "none";

    }else{

        notificationBox.style.display = "block";

    }

});