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
    "chaos", "storm", "flare", "dark", "solar", "saber", "blaze", "thunderstorm", "mirage", "eclipse",
    
    // Added items related to Fortnite and pop culture
    "build", "loot", "chug", "stormtrooper", "squad", "victory", " royale", "ranger", "battle", "zone",
    "skirmish", "glider", "checkpoint", "lootbox", "storm", "pro", "boogie", "scavenger", "fortnite", "hype",
    "brawl", "axe", "shotgun", "sniper", "assault", "launcher", "scar", "clutch", "legend", "epic", "boss",
    "stinger", "fury", "recon", "solo", "viking", "flanker", "striker", "brutus", "builder", "crackshot",
    "chopper", "fable", "pistol", "snipe", "hunter", "melee", "burnout", "combat", "frostbite", "saber",
    "guardian", "wolverine", "tournament", "maverick", "splash", "phantom", "predator", "glitcher", "blade",
    "stormshield", "ninja", "overwatch", "apex", "cyber", "stealth", "skirmisher", "vanguard", "reaper",
    "frostbite", "lumberjack", "backbreaker", "headhunter", "shadowblade", "tornado", "recoil", "clutch",
    "mercy", "raider", "dragonborn", "reaper", "nighthawk", "bandit", "spartan", "warlock", "ironman",
    "thor", "spider", "ghostface", "voldemort", "joker", "batman", "daredevil", "doctorstrange", "thanos",
    "heisenberg", "xenomorph", "harrypotter", "loki", "stormbreaker", "ragnarok", "banisher", "overdrive",
    "starwars", "captainamerica", "hulk", "blackwidow", "ironclad", "wandavision", "subzero", "scorpion",
    "madmax", "deadpool", "superman", "r2d2", "masterchief", "aloy", "arkham", "elitesoldier", "merlin",
    "knight", "mage", "ranger", "shadowhunter", "drdoom", "juggernaut", "thorshammer", "overlord", "chopper",
    
    // Additional weapons (Real life)
    "ak47", "shotgun", "crossbow", "katana", "bazooka", "grenade", "machete", "rifle", "pistol", "m16",
    "sniper", "uzi", "flamethrower", "rocket", "katana", "bow", "scythe", "axe", "spike", "missile", "cannon",
    "warrior", "revolver", "rifleman", "sabertooth", "sword", "battleaxe", "kbar", "tactical", "bayonet",
    "shiv", "dart", "balisong", "dagger", "scout", "katana", "chopper", "bazooka", "m16", "flak", "ammunition",
    "smg", "combatknife", "pumpshotgun", "tomahawk", "brassknuckles", "spartan", "stealthstrike", "blowdart",
    "cleaver", "riotshield", "bayonet", "handgun", "carbine", "m249", "m14", "shotgunner", "machinegun",
    "grenadier", "lmg", "shuriken", "boomerang", "flaregun", "zipline", "claymore", "knife", "shiv", "revolver",
    "huntingrifle", "browning", "crowbar", "barret", "m4a1", "skorpion", "bolt", "tomahawk", "suppressor"
];


// Function to replace letters with similar-looking numbers
function replaceLettersWithNumbers(word, includeLetterLikeNumbers) {
    if (!includeLetterLikeNumbers) return word;

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
    return word.split('').map(letter => letterToNumberMap[letter.toLowerCase()] || letter).join('');
}

// Function to add numbers to the word (only regular numbers, not letter-like)
function addNumbersToWord(word, includeRegularNumbers) {
    if (!includeRegularNumbers) return word;

    const numberCount = Math.floor(Math.random() * 2); // Generate a random number of regular digits (1 or 2)
    let newWord = word;

    for (let i = 0; i < numberCount; i++) {
        newWord += Math.floor(Math.random() * 10); // Add random numbers (e.g., 0-9)
    }

    return newWord;
}

// Function to add special characters
const specialChars = ['%', '/', '!', '#', '@', '$', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', '\\'];
function addSpecialCharacters(word, includeSpecialChars) {
    if (!includeSpecialChars) return word;
    const randomIndex = Math.floor(Math.random() * specialChars.length);
    return word + specialChars[randomIndex];
}

// Function to generate a single username
function generateUsername(includeLetterLikeNumbers, includeRegularNumbers, includeSpecialChars) {
    const randomWord = coolWords[Math.floor(Math.random() * coolWords.length)];
    let username = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);

    // Apply transformations based on options
    username = replaceLettersWithNumbers(username, includeLetterLikeNumbers);
    username = addNumbersToWord(username, includeRegularNumbers);
    username = addSpecialCharacters(username, includeSpecialChars);

    return username;
}

// Function to generate multiple usernames
function generateMultipleUsernames() {
    const numNames = parseInt(document.getElementById("numNames").value);
    const includeLetterLikeNumbers = document.getElementById("includeLetterLikeNumbers").checked;
    const includeRegularNumbers = document.getElementById("includeRegularNumbers").checked;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");

    // Show loading animation
    loadingDiv.style.display = "block";
    resultDiv.innerHTML = "";

    setTimeout(() => {
        for (let i = 0; i < numNames; i++) {
            const username = generateUsername(includeLetterLikeNumbers, includeRegularNumbers, includeSpecialChars);
            const usernameDiv = document.createElement('div');
            usernameDiv.textContent = username;
            resultDiv.appendChild(usernameDiv);
        }
        loadingDiv.style.display = "none"; // Hide loading animation
    }, 1000);
}

// Event listener for the generate button
document.getElementById("generate-btn").addEventListener("click", generateMultipleUsernames);

// Update the displayed value of the range slider
document.getElementById("numNames").addEventListener("input", function() {
    document.getElementById("numNamesDisplay").textContent = this.value;
});
