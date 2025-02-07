// Expanded word bank with more than 1000 words
const coolWords = [
    "star", "moon", "fire", "storm", "wave", "cloud", "light", "shadow", "blaze", "thunder",
    "dragon", "phoenix", "wolf", "eagle", "tiger", "hawk", "viper", "shadow", "ice", "flame",
    "dusk", "vortex", "cyber", "phantom", "ghost", "nova", "blaze", "neon", "glitch", "matrix",
    "dark", "mist", "flame", "crimson", "venom", "echo", "roar", "pulse", "clash", "quake",
    "lunar", "starfire", "blizzard", "viper", "rogue", "spark", "glimmer", "stealth", "comet",
    "pulse", "cinder", "arcane", "saber", "jet", "drift", "soul", "blitz", "scorch", "vengeance",
    "cosmos", "ember", "iron", "ember", "raven", "frost", "blaze", "mystic", "echo", "swift",
    "spark", "chaos", "raven", "sonic", "vex", "valor", "shatter", "storm", "velocity", "rage",
    "clash", "nova", "byte", "fusion", "shadow", "lunar", "breeze", "axle", "dyno", "spectrum",
    "drift", "whisper", "echo", "specter", "relic", "phantom", "grit", "whirlwind", "core",
    "shade", "vortex", "frost", "strife", "pyro", "night", "alpha", "omega", "quantum", "steel",
    "electro", "spark", "arctic", "tornado", "surge", "darkside", "vulcan", "astral", "quicksilver",
    "paradox", "tracer", "blade", "blitz", "glow", "crash", "soul", "storm", "chaos", "blaze",
    "flare", "shock", "velocity", "fury", "phantom", "viper", "strike", "pulse", "flare", "stratos",
    "desire", "venom", "ranger", "blizzard", "arcane", "thrust", "neutron", "spark", "shadow", 
    "cascade", "glimmer", "nebula", "zenith", "flame", "ignition", "heatwave", "thunder", "pyro",
    "fusion", "synth", "sparkle", "whirlwind", "arcane", "chaos", "blazing", "flame", "breeze", "roar",
    "scorch", "nightfall", "zenith", "photon", "steel", "spark", "blaze", "sparkle", "whisper", "echo",
    "raze", "flare", "raven", "quicksilver", "desire", "pyro", "cascade", "void", "roar", "crimson", 
    "smoke", "radar", "pulse", "frost", "dragon", "soul", "lunar", "shine", "fury", "blaze", "phantom",
    "vex", "storm", "thunder", "lancer", "frost", "jetstream", "cinder", "exile", "nightfall", "chaos",
    "pulse", "storm", "quicksilver", "vengeance", "rune", "flame", "wildfire", "strike", "phantom", 
    "nova", "shadow", "vortex", "prism", "ember", "firestorm", "rogue", "shockwave", "ignite", "relic",
    "nightmare", "shatter", "havoc", "shadow", "pyro", "lunar", "neutron", "vortex", "velocity", "drift",
    "chaos", "storm", "flare", "dark", "solar", "saber", "blaze", "thunderstorm", "mirage", "eclipse"
    // Add many more words as needed...
];

// Mapping of letter to visually similar number replacements
const letterToNumberMap = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5',
    't': '7',
    'b': '8',
    'g': '9'
};

// Function to replace letters with similar-looking numbers
function replaceLettersWithNumbers(word) {
    return word.split('').map(letter => {
        return letterToNumberMap[letter.toLowerCase()] || letter;
    }).join('');
}

// Function to generate random username
function generateUsername() {
    const useTwoWords = Math.random() > 0.5;

    let username = "";
    if (useTwoWords) {
        const firstWord = coolWords[Math.floor(Math.random() * coolWords.length)];
        const secondWord = coolWords[Math.floor(Math.random() * coolWords.length)];

        username = firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
    } else {
        username = coolWords[Math.floor(Math.random() * coolWords.length)];
    }

    username = replaceLettersWithNumbers(username);

    let letterCount = (username.match(/[a-zA-Z]/g) || []).length;
    let numberCount = (username.match(/[0-9]/g) || []).length;

    // Ensure more letters than numbers
    if (numberCount >= letterCount) {
        while (letterCount <= numberCount) {
            username = username.slice(0, -1); // Remove a number
            letterCount = (username.match(/[a-zA-Z]/g) || []).length;
            numberCount = (username.match(/[0-9]/g) || []).length;
        }
    }

    // Add numbers to the username if desired
    let numberPart = Math.floor(Math.random() * 100);
    username += numberPart;

    // Add special characters
    const specialChars = "!@#$%^&*()_-+=<>?/{}[]|";
    const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
    username += randomSpecialChar;

    // Format as "XXx_Name_xXX" style
    let finalUsername = `XXx_${username}_xXX`;

    // Generate a random username length between 4 and 16 characters
    const randomLength = Math.floor(Math.random() * (16 - 4 + 1)) + 4;

    // Ensure username fits within the random length
    if (finalUsername.length > randomLength) {
        finalUsername = finalUsername.slice(0, randomLength); // Cut off extra characters
    } else if (finalUsername.length < randomLength) {
        while (finalUsername.length < randomLength) {
            finalUsername += Math.floor(Math.random() * 10); // Pad with random digits
        }
    }

    return finalUsername;
}

// Function to generate multiple usernames
function generateMultipleUsernames() {
    const numNames = parseInt(document.getElementById("numNames").value);
    const resultDiv = document.getElementById("result");

    // Temporarily disable the button to avoid overwhelming the page with requests
    document.getElementById("generate-btn").disabled = true;
    resultDiv.innerHTML = ""; // Clear previous results

    // Batch the creation of usernames into small chunks
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < numNames; i++) {
        const newUsername = generateUsername();
        const usernameElement = document.createElement("div");
        usernameElement.textContent = newUsername;
        fragment.appendChild(usernameElement);
    }

    // Append all the generated usernames in one go
    resultDiv.appendChild(fragment);

    // Re-enable the button after the batch processing
    document.getElementById("generate-btn").disabled = false;
}

// Event listener for the generate button
document.getElementById("generate-btn").addEventListener("click", generateMultipleUsernames);

// Update the displayed value of the range slider
document.getElementById("numNames").addEventListener("input", function() {
    document.getElementById("numNamesDisplay").textContent = this.value;
});
