// Language toggle functionality
document.getElementById("enBtn").addEventListener("click", function() {
    changeLanguage("en");
});

document.getElementById("hiBtn").addEventListener("click", function() {
    changeLanguage("hi");
});

function changeLanguage(lang) {
    if (lang === "en") {
        document.getElementById("form-title").innerText = "Fertilizer Requirement Predictor";
        document.getElementById("name-label").innerText = "Farmer's Name";
        document.getElementById("land-label").innerText = "Land Size (in acres)";
        document.getElementById("crop-label").innerText = "Crop Type";
        document.getElementById("soil-label").innerText = "Soil Type";
        document.getElementById("rainfall-label").innerText = "Average Rainfall (in mm)";
        document.getElementById("irrigation-label").innerText = "Irrigation Level (in inches)";
        document.getElementById("fertilizer-label").innerText = "Previous Fertilizer (kg/acre)";
        document.getElementById("organic-label").innerText = "Organic Matter (%)";
    } else if (lang === "hi") {
        document.getElementById("form-title").innerText = "उर्वरक आवश्यकता भविष्यवक्ता";
        document.getElementById("name-label").innerText = "किसान का नाम";
        document.getElementById("land-label").innerText = "भूमि का आकार (एकड़ में)";
        document.getElementById("crop-label").innerText = "फसल का प्रकार";
        document.getElementById("soil-label").innerText = "मिट्टी का प्रकार";
        document.getElementById("rainfall-label").innerText = "औसत वर्षा (मिमी में)";
        document.getElementById("irrigation-label").innerText = "सिंचाई का स्तर (इंच में)";
        document.getElementById("fertilizer-label").innerText = "पिछला उर्वरक (किग्रा/एकड़)";
        document.getElementById("organic-label").innerText = "कार्बनिक पदार्थ (%)";
    }
}

// Form submission
document.getElementById("fertilizerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Gather form data
    const formData = {
        farmerName: document.getElementById('farmerName').value,
        landSize: document.getElementById('landSize').value,
        cropType: document.getElementById('cropType').value,
        soilType: document.getElementById('soilType').value,
        rainfall:
