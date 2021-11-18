var btnStart = document.querySelector('button[name="record"]');
    var btnStop = document.querySelector('button[name="stop"]');
    var audio = document.querySelector('#audio');
    
    btnStart.addEventListener('click', async () => {
        let stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
        let mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        let chunks = [];
        mediaRecorder.ondataavailable = (e)=>{
             chunks.push(e.data);
        }

        //function to catch error
        mediaRecorder.onerror = (e)=>{
             alert(e.error);
        }

        mediaRecorder.onstop = (e)=>{
             let blod = new Blob(chunks);
             //create url for audio
             let url = URL.createObjectURL(blod);
             //pass url into audio tag
             audio.src = url;
        }
        
        btnStop.addEventListener('click',()=>{
             mediaRecorder.stop();
        })
    })