var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;
var qaSet = document.querySelectorAll('.qa_set'); // ✅ fixed
var qaOptions = document.querySelectorAll('.qa_set .qa_options input');

skip.addEventListener('click', function() {
 step();
 duration = 10;
})
qaOptions.forEach(function(qaOptionsSingle) {
    qaOptionsSingle.addEventListener('click', function() {
        setTimeout(function() {
            step();
            duration = 10;
        },500)
        var valid = this.getAttribute('valid');
        if(valid === 'valid') {
            scoreCount += 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount -= 10;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }

        // ✅ Check if full score reached
        if(scoreCount === 100) {
        document.getElementById('congratsMessage').style.display = 'block';
        alert("🎉 You Cracked It! 🎉"); // Optional popup
    }

    })
});

function step() {
    count += 1;
    for( var i = 0; i < qaSet.length; i++) {
        qaSet[i].className = 'qa_set';
    }
    qaSet[count].className = 'qa_set Active';
    if(count === 5) {
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}

var durationTime = setInterval(function() {
    if(duration === 10) {
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if(countdown.innerHTML === "10") {
       step()
    }
},1000);