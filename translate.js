document.getElementById("inputText").addEventListener("input", function() {
    const inputText = document.getElementById("inputText").value;
    const langFrom = document.getElementById("languageSelectFrom").value;
    const langTo = document.getElementById("languageSelectTo").value;
    
    if (inputText.trim() === "") {
      document.getElementById("outputText").value = "";
      return;
    }
  
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${langFrom}|${langTo}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("outputText").value = data.responseData.translatedText;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById("outputText").value = "Error in translation.";
      });
  });
