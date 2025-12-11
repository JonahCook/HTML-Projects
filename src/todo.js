function storeInput() {
    const inputElement = document.getElementById("userInput").value;
    alert(inputElement)
}

function displayInput() {
    const inputValue = document.getElementById('userInput').value;
    document.getElementById('listElement1').textContent = inputValue;
}

document.getElementById("submitButton").onclick = function() {
    var userInput = document.getElementById("userInput").value;
    
    if (userInput.trim() === "") {
        alert("Please enter an item!");
        return;
    }

    var listItem = document.createElement("li");
    var textNode = document.createTextNode(userInput);
    listItem.appendChild(textNode);

    document.getElementById("list").appendChild(listItem);

    document.getElementById("userInput").value = "";
};