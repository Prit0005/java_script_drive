
//  create Arrow function 
let calculateAge = () => {
    // Get the input date value
    let dob = document.getElementById("date").value;
    
    // Calculate the date
    let today = new Date();
    let birthDate = new Date(dob);
    let current = today - birthDate;
    
    // Calculate age in days and years
    let day = Math.floor(current / (1000 * 60 * 60 * 24));
    let year = Math.floor(day / 365.25);
    
    // get result 
    let resultContainer = document.getElementById("result");

    // Create p element in div
    let resultParagraph = document.createElement("p");
    resultParagraph.textContent = `Your age is approximately ${year} years and ${day % 365.25} days.`;

    // remove firstchild
    if (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }
    
    // Append on resultContainer
    resultContainer.appendChild(resultParagraph);
};

// add click event on button
document.getElementById("cal").addEventListener("click", calculateAge);
