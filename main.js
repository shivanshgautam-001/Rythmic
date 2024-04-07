function predict() {
    // Get input values
    var microbialDiversity = parseFloat(document.getElementById("microbialDiversity").value);
    var microbialAbundance = parseFloat(document.getElementById("microbialAbundance").value);
    var cycleLength = parseFloat(document.getElementById("Menstrualcycle").value);
    var hormonalPatterns = parseFloat(document.getElementById("hormonalPatterns").value);
    var sbloodPressure = parseFloat(document.getElementById("sbloodPressure").value);
    var dbloodPressure = parseFloat(document.getElementById("dbloodPressure").value);
    var cholesterolLevels = parseFloat(document.getElementById("cholesterolLevels").value);
    var bmi = parseFloat(document.getElementById("bmi").value);
    
    // Perform prediction (example: simple rule-based prediction)
    var prediction;
    if (microbialDiversity > 0.5 && Menstrualcycle >= 28 && sbloodPressure < 120) {
      prediction = "LOW";
    } else {
      prediction = "HIGH";
    }
    
    // Display prediction result
    document.getElementById("result").innerHTML = "<h2>Prediction Result</h2><p>The predicted risk of heart disease is: " + prediction + "</p>";
  }