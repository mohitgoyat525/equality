function playAudio() {
  const audio = document.getElementById("audioPlayer");
  audio.play();
  audio.onended = function () {
    audio.style.display = "none";
    document.getElementById("playButton").style.display = "inline";
    document.getElementById("dropDown").style.display = "block"; // Show the text area
  };
  document.getElementById("playButton").style.display = "none";
}

document.addEventListener("DOMContentLoaded", (event) => {
  // Initialize event listener for the submit button
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const textAreaValue = form.querySelector("textarea").value;

    // Check the content of the textarea
    if (textAreaValue.trim() !== "") {
      alert(
        "If you believe in Equality thats nice"
      );
    } else {
      alert("In the End of the Day Equality is Just a Fantasy in (my opinion)");
    };
    
    
  });
});
