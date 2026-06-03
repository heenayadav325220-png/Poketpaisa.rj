// ==========================================================================
// 1. DOM ELEMENTS REGISTRATION
// ==========================================================================
const sideNav = document.getElementById('sideNav');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const countrySelect = document.getElementById('countrySelect');
const leaderboardDataBox = document.getElementById('leaderboardData');

// ==========================================================================
// 2. FULL SCREEN SIDEBAR NAVIGATION LOGIC
// ==========================================================================
if (menuBtn && sideNav) {
    menuBtn.addEventListener('click', () => {
        sideNav.classList.add('active');
    });
}

if (closeBtn && sideNav) {
    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('active');
    });
}

// Function to switch between active screens/sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.app-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Automatically close sidebar menu after clicking a link
    if (sideNav) {
        sideNav.classList.remove('active');
    }

    // Special initialization when entering specific screens
    if (sectionId === 'leaderboard') {
        updateLeaderboard();
    }
}

// ==========================================================================
// 3. REAL THEME SWITCHING LOGIC (Cyberpunk, Neon, Classic)
// ==========================================================================
// Inject theme buttons dynamically inside the Sidebar for customization
function injectThemeSelector() {
    const sidebarContent = document.querySelector('.sidebar-content');
    if (!sidebarContent) return;

    const themeZone = document.createElement('div');
    themeZone.className = 'theme-selector-zone';
    themeZone.innerHTML = `
        <h3 style="font-size: 14px; color: var(--primary-color); margin-bottom: 8px;">Select Theme</h3>
        <div class="theme-grid">
            <button class="theme-btn" onclick="changeTheme('classic')">Classic</button>
            <button class="theme-btn" onclick="changeTheme('cyberpunk')">Cyberpunk</button>
            <button class="theme-btn" onclick="changeTheme('neon')">Neon Border</button>
        </div>
    `;
    sidebarContent.appendChild(themeZone);
}

function changeTheme(themeName) {
    // Remove previous theme classes
    document.body.classList.remove('theme-cyberpunk', 'theme-neon');
    
    // Add selected theme class
    if (themeName === 'cyberpunk') {
        document.body.classList.add('theme-cyberpunk');
    } else if (themeName === 'neon') {
        document.body.classList.add('theme-neon');
    }
    // 'classic' uses default root variables, so no class needs to be added
}

// ==========================================================================
// 4. REAL-TIME LEADERBOARD DATA LOADER (Top 10 Users)
// ==========================================================================
const realLeaderboardDatabase = {
    global: [
        { rank: 1, name: "Alex Mercer (US)", speed: "162.4 km/h" },
        { rank: 2, name: "Rohit Yadav (IN)", speed: "159.1 km/h" },
        { rank: 3, name: "Steve Smith (AU)", speed: "155.0 km/h" },
        { rank: 4, name: "Vikas P. (IN)", speed: "148.5 km/h" },
        { rank: 5, name: "Babar A. (PK)", speed: "145.2 km/h" },
        { rank: 6, name: "John Doe (US)", speed: "141.0 km/h" },
        { rank: 7, name: "Shaheen S. (PK)", speed: "139.8 km/h" },
        { rank: 8, name: "Warner B. (AU)", speed: "138.2 km/h" },
        { rank: 9, name: "Rashid K. (AFG)", speed: "135.4 km/h" },
        { rank: 10, name: "Ojas K. (IN)", speed: "132.1 km/h" }
    ],
    india: [
        { rank: 1, name: "Rohit Yadav", speed: "159.1 km/h" },
        { rank: 2, name: "Virat K.", speed: "152.3 km/h" },
        { rank: 3, name: "Vikas P.", speed: "148.5 km/h" },
        { rank: 4, name: "Himanshu S.", speed: "141.2 km/h" },
        { rank: 5, name: "Ojas K.", speed: "132.1 km/h" },
        { rank: 6, name: "Parikshit S.", speed: "129.5 km/h" }
    ],
    america: [
        { rank: 1, name: "Alex Mercer", speed: "162.4 km/h" },
        { rank: 2, name: "John Doe", speed: "141.0 km/h" }
    ],
    australia: [
        { rank: 1, name: "Steve Smith", speed: "155.0 km/h" },
        { rank: 2, name: "David Warner", speed: "138.2 km/h" }
    ],
    pakistan: [
        { rank: 1, name: "Babar Azam", speed: "145.2 km/h" },
        { rank: 2, name: "Shaheen Afridi", speed: "139.8 km/h" }
    ],
    other: [
        { rank: 1, name: "Rashid Khan", speed: "135.4 km/h" }
    ]
};

function updateLeaderboard() {
    if (!countrySelect || !leaderboardDataBox) return;
    
    const selectedRegion = countrySelect.value;
    leaderboardDataBox.innerHTML = ""; // Clear list
    
    const users = realLeaderboardDatabase[selectedRegion] || [];
    
    if (users.length === 0) {
        leaderboardDataBox.innerHTML = `<p style="color: var(--text-dim); text-align: center; margin-top: 20px;">No records found for this country.</p>`;
        return;
    }

    // Generate real rows dynamically
    users.forEach(user => {
        const row = document.createElement('div');
        row.className = 'user-row';
        row.innerHTML = `
            <span><strong>#${user.rank}</strong> ${user.name}</span>
            <span style="color: var(--primary-color); font-weight: bold;">${user.speed}</span>
        `;
        leaderboardDataBox.appendChild(row);
    });
}

// Bind selector change event
if (countrySelect) {
    countrySelect.addEventListener('change', updateLeaderboard);
}

// ==========================================================================
// 5. CORE AI - INTERACTIVE COACH LOGIC (Gemini 1.5 Flash API Bridge ready)
// ==========================================================================
function startCoreAIChat() {
    // Create AI Screen Container inside HTML dynamically if not present
    let aiContainer = document.getElementById('coreAIScreen');
    if (!aiContainer) {
        const mainWrapper = document.querySelector('.app-container');
        aiContainer = document.createElement('section');
        aiContainer.id = 'coreAIScreen';
        aiContainer.className = 'app-section';
        aiContainer.innerHTML = `
            <div class="section-header">
                <h2><i class="fa-solid fa-microchip"></i> Core AI Coach</h2>
                <button class="back-btn" onclick="showSection('home')">Exit</button>
            </div>
            <div class="ai-screen-container">
                <div class="chat-output-area" id="chatOutput">
                    <div class="atom-logo-container" id="atomContainer">
                        <i class="fa-solid fa-atom atom-core"></i>
                    </div>
                </div>
                <div class="ai-input-bar">
                    <i class="fa-solid fa-bars"></i>
                    <input type="text" id="aiInput" placeholder="ASK Core AI...">
                    <button id="sendBtn" style="background:none; border:none; color:var(--primary-color); cursor:pointer;"><i class="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        `;
        mainWrapper.appendChild(aiContainer);
        
        // Register events for chat input
        document.getElementById('sendBtn').addEventListener('click', handleUserMessage);
        document.getElementById('aiInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleUserMessage();
        });
    }
    
    showSection('coreAIScreen');
}

// Redirecting "Start Chat" button on Home to Core AI Screen
document.querySelector('.ai-btn').addEventListener('click', startCoreAIChat);

function handleUserMessage() {
    const inputField = document.getElementById('aiInput');
    const chatOutput = document.getElementById('chatOutput');
    const atomContainer = document.getElementById('atomContainer');
    const userText = inputField.value.trim();
    
    if (!userText) return;

    // Hide the large initial atom logo when chat starts
    if (atomContainer) {
        atomContainer.style.display = 'none';
    }

    // 1. Append User Message to UI
    appendChatBubble(userText, 'user');
    inputField.value = ""; // Clear input

    // 2. Simulate Bot Analysis Status
    const loadingId = appendChatBubble("Analyzing batting vectors...", 'bot');

    // 3. Simulated Response (Ready to replace with real Gemini 1.5 Flash fetch call)
    setTimeout(() => {
        document.getElementById(loadingId).remove(); // Remove loading state
        
        let aiResponse = "I am ready to analyze your shot. Please ensure the Grip Chip is synchronized via Bluetooth.";
        
        if (userText.toLowerCase().includes('speed')) {
            aiResponse = "According to your last session, your average release speed was 124 km/h with an upward follow-through trajectory of 14°. Focus on your wrist position.";
        } else if (userText.toLowerCase().includes('direction') || userText.toLowerCase().includes('shot')) {
            aiResponse = "Sensor tracking indicates 68% of your shots are directed toward mid-on. Try to open the face of the bat slightly earlier for off-side drives.";
        }

        appendChatBubble(aiResponse, 'bot');
    }, 1500);
}

function appendChatBubble(text, sender) {
    const chatOutput = document.getElementById('chatOutput');
    const bubble = document.createElement('div');
    const uniqueId = 'msg-' + Date.now();
    bubble.id = uniqueId;
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerText = text;
    chatOutput.appendChild(bubble);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto Scroll
    return uniqueId;
}

// ==========================================================================
// 6. CONNECT DEVICE LOGIC (Scanner, Code, Bluetooth Synchronization)
// ==========================================================================
function openConnectDeviceScreen() {
    let connectContainer = document.getElementById('connectDeviceScreen');
    if (!connectContainer) {
        const mainWrapper = document.querySelector('.app-container');
        connectContainer = document.createElement('section');
        connectContainer.id = 'connectDeviceScreen';
        connectContainer.className = 'app-section';
        connectContainer.innerHTML = `
            <div class="section-header">
                <h2><i class="fa-solid fa-satellite-dish"></i> Connect Grip Chip</h2>
                <button class="back-btn" onclick="showSection('home')">Back</button>
            </div>
            <div class="connection-methods">
                <div class="method-card" onclick="triggerHardwareAction('Bluetooth')">
                    <i class="fa-solid fa-bluetooth"></i>
                    <h3>Connect via Bluetooth</h3>
                    <p>Scan for active CORBAT smart chips nearby</p>
                </div>
                <div class="method-card" onclick="triggerHardwareAction('Scanner')">
                    <i class="fa-solid fa-qrcode"></i>
                    <h3>Scan QR Code</h3>
                    <p>Scan the code printed on the bottom of the bat grip</p>
                </div>
                <div class="method-card" onclick="triggerHardwareAction('Code')">
                    <i class="fa-solid fa-key"></i>
                    <h3>Enter Unique Code</h3>
                    <p>Manually type the hardware authentication key</p>
                </div>
            </div>
        `;
        mainWrapper.appendChild(connectContainer);
    }
    showSection('connectDeviceScreen');
}

// Redirecting "Search Grip Chip" button on Home to Connection Screen
document.querySelector('.connect-btn').addEventListener('click', openConnectDeviceScreen);

function triggerHardwareAction(method) {
    alert(`Initializing ${method} Protocol...\nSearching for CORBAT Smart Grip Sensor.`);
    // Real Bluetooth API or Camera API initialization lines go here
}

// ==========================================================================
// 7. USER CHANGABLE STICKMAN/GRAPHIC LOGIC
// ==========================================================================
let currentGraphicState = 1;
function setupGraphicChange() {
    const bottomGraphicBox = document.querySelector('.bottom-graphic');
    if (!bottomGraphicBox) return;

    // Add a real change action button inside the bottom pane
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'graphic-selector-btn';
    toggleBtn.innerText = "Switch Action View";
    toggleBtn.addEventListener('click', () => {
        const iconElement = bottomGraphicBox.querySelector('.animation-mock');
        const textElement = bottomGraphicBox.querySelector('p');
        
        if (currentGraphicState === 1) {
            iconElement.className = "fa-solid fa-person-running animation-mock";
            textElement.innerText = "Running Metrics Engine Active";
            currentGraphicState = 2;
        } else {
            iconElement.className = "fa-solid fa-cricket-bat-ball animation-mock";
            textElement.innerText = "Live Action Tracking Active";
            currentGraphicState = 1;
        }
    });
    bottomGraphicBox.appendChild(toggleBtn);
}

// ==========================================================================
// INITIALIZATION ON LOAD
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
    injectThemeSelector();
    setupGraphicChange();
});
