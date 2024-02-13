let no_resp = ['...', 'I think you clicked the wrong one', 'You don\'t mean that', ':|', 'I know you want to press yes', 'Hurry up and press yes'];
let question = "be my valentine??!?";
document.getElementById("msg1").innerHTML = question;

document.getElementById("yes").onclick = function(){

    //Animations
    document.getElementById('body').style.animation = 'animation1 5s forwards';
    document.getElementById('msg1').style.animation = 'fadeout 5s forwards';
    document.getElementById('yes').style.animation = 'fadeout 5s forwards';
    document.getElementById('no').style.animation = 'fadeout 5s forwards';
    document.getElementById('cookie').style.animation = 'fadeout 5s forwards';
    document.getElementById('cat').style.animation = 'fadein 5s forwards';
    setTimeout(genroses, 2000)
    setTimeout(gentease, 5000)

    function genroses(){
        document.getElementById('roses').style.animation = 'fadein 5s forwards';
    }

    function gentease(){
        document.getElementById('tease').style.animation = 'fadein 5s forwards';
    }

    // Buttons
    document.getElementById('yes').disabled = true;
    document.getElementById('no').disabled = true;

    // Audio
    document.getElementById('audio').volume = 0.02;
    document.getElementById('audio').play();

    //Images
    document.getElementById('cat').style.display = 'block';
    document.getElementById('roses').style.display = 'block';
    document.getElementById('tease').style.display = 'block' 

    // Rose Petals
    const petalImages = [
        "assets/petal1.png",
        "assets/petal2.png",
        "assets/petal3.png",
        "assets/petal4.png",
        "assets/petal5.png",
        "assets/petal6.png",
        "assets/petal7.png",
        "assets/petal8.png",
        "assets/petal9.png"
    ];

    function createPetal() {
        const petal = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * petalImages.length);
        petal.src = petalImages[randomIndex];
        petal.width = Math.floor(Math.random() * 51) + 50;
        petal.height = Math.floor(Math.random() * 51) + 50;
        petal.style.position = 'absolute';
        petal.style.left = `${Math.random() * window.innerWidth}px`;
        petal.style.top = `-${petal.height}px`;
        document.body.appendChild(petal);
      
        const speed = Math.floor(Math.random() * 2) + 1;
        movePetal(petal, speed);
    }
      
    function movePetal(petal, speed) {
        const interval = setInterval(() => {
            const currentTop = parseFloat(petal.style.top);
            petal.style.top = `${currentTop + speed}px`;
            if (currentTop > window.innerHeight) {
                petal.remove();
                clearInterval(interval);
                createPetal();
            }
        }, 16);
    }

    setInterval(createPetal, 600);
};

document.getElementById("no").onclick = function(){
    yes_dimensions()
    let resp = Math.floor(Math.random()*6);
    if(document.getElementById("msg1").innerHTML == no_resp[resp]){
        document.getElementById("msg1").innerHTML = no_resp[(Math.floor(Math.random() * 6))];
    }
    else{
        document.getElementById("msg1").innerHTML = no_resp[resp];
    }
}

function yes_dimensions(){
    let button = document.getElementById('yes');

    button.style.width = button.offsetWidth + 30 + 'px';
    button.style.height = button.offsetHeight + 20 + 'px';
}
