function normalCoin() {
    var video = document.getElementById("flip_coin");
    var source = document.getElementById("video_source");

    var randomNumber = Math.random();

    if (randomNumber < 0.5) {
        source.src = "assets/flip_heads.mp4?nocache=" + new Date().getTime(); // Prevent caching
    } else {
        source.src = "assets/flip_tails.mp4?nocache=" + new Date().getTime(); // Prevent caching
    }

    video.load();
    video.play();
}

function luckyCoin() {
    var video = document.getElementById("flip_coin");
    var source = document.getElementById("video_source");

    // Roll two coins
    var firstCoin = Math.random() < 0.5 ? "heads" : "tails";
    var secondCoin = Math.random() < 0.5 ? "heads" : "tails";

    // Combine the result of two coins
    var outcome = firstCoin + "_" + secondCoin;

    // Define the video for each possible outcome
    var outcomesToVideos = {
        "heads_heads": "assets/flip_heads_heads.mp4",
        "tails_tails": "assets/flip_tails_tails.mp4",
        "heads_tails": "assets/flip_heads_tails.mp4",
        "tails_heads": "assets/flip_tails_heads.mp4"
    };

    // Set the correct video source based on the outcome
    source.src = outcomesToVideos[outcome];

    video.load(); // Reload the video with the new source
    video.play(); // Play the video
}