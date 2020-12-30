// Progress Bar Animation with requestAnimationFrame method

let progressBarElement = document.querySelectorAll('progress')
let runAgainAt = Date.now() + 1000;

function repeat () {
    const now = Date.now();

    if (runAgainAt <= now) {

        for (let i = 0; i < progressBarElement.length; i++) {

            let progressValue = progressBarElement[i].value;
            console.log(progressBarElement[i].dataset.value)

            if (progressValue <= progressBarElement[i].dataset.value) {
                progressValue++
                progressBarElement[i].value = progressValue
                runAgainAt = now + 100;
            } 
            
        }
        
    }
    
    if ( progressBarElement[0].value == progressBarElement[0].dataset.value) return;
    requestAnimationFrame(repeat)
}
requestAnimationFrame(repeat)