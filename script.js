// Create function to store JSOn file into variable
// Create function to iterate through data and match emoji to JSON, then return the name of that emoji


function getEmojiName(userInput, result) {
    const emojis = fetch("node_modules/unicode-emoji-json/data-by-emoji.json")
    .then((response) => response.json());

    emojis.then((value) => {
        let count = Object.keys(value).length;

        for (let i = 0; i < count; i++) {
            if (userInput == Object.keys(value)[i]) {
                console.log(Object.values(value)[i].name);
                console.log(i);
                result.textContent = Object.values(value)[i].name;
                return true;
            }
        };
    });
}


// Declare variables
let userInput = document.getElementById("text-input").value;
let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    let userInput = document.getElementById("text-input").value;
    let result = document.getElementById("result");
    
    getEmojiName(userInput, result);
});

textInput = document.getElementById("text-input");

textInput.addEventListener("change", function(e) {
    e.preventDefault()

    let result = document.getElementById("result");

    getEmojiName(e.target.value, result)
})