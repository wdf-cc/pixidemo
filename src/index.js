window.onload = function () {
    let play = document.getElementById('play')
    let video = document.getElementById('video')
    video.style.position = 'fixed';
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.left = '0px';
    video.style.top = '0px';
    video.style.objectFit = "cover";
    video.style.objectPosition = "center center";

    play.style.position = "absolute";
    play.style.width = "20%";
    play.style.height = "5%";
    play.style.backgroundColor = "deepskyblue";
    play.style.color = "azure";
    play.style.top = "50%";
    play.style.left = "50%";
    play.style.zIndex = "10001";
    play.style.transform = "translate(-50%, -50%)";
    
    play.addEventListener('click', () => {
        play.style.display = 'none';
        video.play();
    })

    video.addEventListener('click',()=>{
        video.pause();
        play.style.display = 'block';
        play.innerHTML = 'Continue'
    })
    
    






}