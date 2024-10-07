function playAudio() {
  const audio = document.getElementById("audioPlayer");
  audio.play();
  audio.onended = function () {
    audio.style.display = "none";
    document.getElementById("playButton").style.display = "inline";
    document.getElementById("dropDown").style.display = "block";
  };
  document.getElementById("playButton").style.display = "none";
}

document.addEventListener("DOMContentLoaded", (event) => {
  
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const textAreaValue = form.querySelector("textarea").value;

 
    if (textAreaValue.trim() !== "") {
      alert(
        "If you believe in Equality thats nice"
      );
    } else {
      alert("In the End of the Day Equality is Just a Fantasy in (my opinion)");
    }; 
  });
});
