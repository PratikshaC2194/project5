function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("mins");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("ampm");
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);


function setTime(){

    var x=document.getElementById('morning').value;
    var y = document.getElementById("afternoon").value;
    var z = document.getElementById("evening").value;
    var hour = new Date().getHours();

    if(x==hour){

        document.getElementById('imgcontainer').innerText=style.backgroundImage=url("wake_up.png");
        document.getElementById('textcontainer').innerText='Good Morning!!';
        document.getElementById("smallbox").innerText="Wake Up !!";
    }

    if(y==hour){
        document.getElementById("imgcontainer").innerText=style.backgroundImage=url("lunch.png");
        document.getElementById("textcontainer").innerText="Good Afternoon!!";
        document.getElementById("smallbox").innerText="Let's Have Some Lunch !!";
    }

    if(z==hour){
        document.getElementById("imgcontainer").innerText=style.backgroundImage=url("night.png");
        document.getElementById("textcontainer").innerText="Good Night!!";
        document.getElementById("smallbox").innerText=" Dinner Time!!";
    }    
    
}