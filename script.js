const PUBLIC_API_KEY = '69608fa26bfce45092e2092d19ab2e8b4085c092';
const emojiList = document.getElementById('emoji-list')
let userInput = document.getElementById('text-input').value;
let submitBtn = document.getElementById('submit-btn')
const textInput = document.getElementById("text-input");
const emojiContainer = document.getElementById('emoji-container');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    let userInput = document.getElementById("text-input").value;
    fetch(`https://emoji-api.com/emojis?search=${userInput}&access_key=69608fa26bfce45092e2092d19ab2e8b4085c092`)
    .then(res => res.json())
    .then(data => loadEmoji(data))
});

function loadEmoji(data) {
    data.forEach(emoji => {
        let li = document.createElement('li');
        li.setAttribute('emoji-name', emoji.slug);
        li.setAttribute('class', 'emoji');
        li.setAttribute('onclick', "copyEmoji(event)");
        li.textContent = emoji.character;
        emojiList.appendChild(li); 
    })
}


fetch(`https://emoji-api.com/emojis?access_key=69608fa26bfce45092e2092d19ab2e8b4085c092`)
    .then(res => res.json())
    .then(data => loadEmojis(data))

function loadEmojis(data) {
    data.forEach(emoji => {
        let li = document.createElement('li');
        li.setAttribute('emoji-name', emoji.slug);
        li.setAttribute('class', 'emoji');
        li.setAttribute('onclick', "copyEmoji(event)");
        li.textContent = emoji.character;
        emojiContainer.appendChild(li);
    })
}

function copyEmoji(e) {
    const emojiText = e.target.textContent;
    navigator.clipboard.writeText(emojiText);
    e.target.classList.add('copied')

    setTimeout(()=> {
        e.target.classList.remove('copied');
    }, 1000);

};


