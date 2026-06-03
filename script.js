
// DOM Element References
const sideNav = document.getElementById('sideNav');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

// 1. Sidebar Open/Close Logic
menuBtn.addEventListener('click', () => {
    sideNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sideNav.classList.remove('active');
});

// 2. Section Navigation Logic
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.app-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId + 'Section').classList.add('active');
    
    // Automatically close sidebar if it's open
    sideNav.classList.remove('active');

    // If leaderboard opens, initialize data
    if(sectionId === 'leaderboard') {
        updateLeaderboard();
    }
}

// 3. Mock Leaderboard Data based on notes
const mockData = {
    global: [
        { rank: 1, name: "Alex (US)", speed: "162 km/h" },
        { rank: 2, name: "Rohit (IN)", speed: "159 km/h" },
        { rank: 3, name: "Smith (AU)", speed: "155 km/h" }
    ],
    india: [
        { rank: 1, name: "Rohit Y.", speed: "159 km/h" },
        { rank: 2, name: "Virat K.", speed: "152 km/h" },
        { rank: 3, name: "Vikas P.", speed: "148 km/h" }
    ],
    america: [
        { rank: 1, name: "Alex M.", speed: "162 km/h" },
        { rank: 2, name: "John D.", speed: "141 km/h" }
    ],
    australia: [
        { rank: 1, name: "Smith W.", speed: "155 km/h" },
        { rank: 2, name: "Warner B.", speed: "150 km/h" }
    ],
    pakistan: [
        { rank: 1, name: "Babar A.", speed: "149 km/h" },
        { rank: 2, name: "Shaheen S.", speed: "146 km/h" }
    ],
    other: [
        { rank: 1, name: "Rashid K.", speed: "142 km/h" }
    ]
};

// Function to update Leaderboard UI dynamically
function updateLeaderboard() {
    const selector = document.getElementById('countrySelect');
    const selectedCountry = selector.value;
    const leaderboardDataBox = document.getElementById('leaderboardData');
    
    // Clear previous data
    leaderboardDataBox.innerHTML = "";
    
    const players = mockData[selectedCountry] || [];
    
    if(players.length === 0) {
        leaderboardDataBox.innerHTML = "<p style='color:#888; text-align:center;'>No data available for this region.</p>";
        return;
    }

    // Populate Top Users
    players.forEach(player => {
        const row = document.createElement('div');
        row.className = 'user-row';
        row.innerHTML = `
            <span><strong>#${player.rank}</strong> ${player.name}</span>
            <span style="color: #00e676; font-weight: bold;">${player.speed}</span>
        `;
        leaderboardDataBox.appendChild(row);
    });
}
