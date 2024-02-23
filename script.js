const emojiGallery = document.getElementById("emoji-gallery");
const emojis = [
    "&#129299;", "&#129300;", "&#129301;", "&#129302;", "&#129303;", "&#129304;",
    "&#129305;", "&#129306;", "&#129307;", "&#129308;", "&#129309;", "&#129310;"
];

for (const emoji of emojis) {
    const emojiItem = document.createElement("div");
    emojiItem.className = "emoji-item";
    emojiItem.innerHTML = `<p>${emoji}</p><p class="emoji-code">${getEmojiCode(emoji)}</p>`;
    emojiGallery.appendChild(emojiItem);
}

function getEmojiCode(emoji) {
    const decimalCode = emoji.codePointAt(0).toString(16);
    return decimalCode;
}