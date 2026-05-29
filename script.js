
// Page Navigation
function showPage(pageId) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");
}

// Chat Counter
let totalChats = 0;

// Send Message
function sendMessage() {

    let input = document.getElementById("messageInput");
    let chatBox = document.getElementById("chatBox");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    // User Message
    let userMsg = document.createElement("p");
    userMsg.innerHTML = "<b>You:</b> " + message;
    chatBox.appendChild(userMsg);

    // Demo AI Reply
    let aiMsg = document.createElement("p");
    aiMsg.innerHTML = "<b>AI:</b> I received your question: " + message;
    chatBox.appendChild(aiMsg);

    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";

    totalChats++;
    document.getElementById("totalChats").textContent = totalChats;
}

// Notes
let notesCount = 0;

function saveNote() {

    let noteInput = document.getElementById("noteInput");
    let notesList = document.getElementById("notesList");

    let noteText = noteInput.value.trim();

    if (noteText === "") {
        return;
    }

    let note = document.createElement("div");
    note.className = "note";

    note.innerHTML = `
        <p>${noteText}</p>
        <button onclick="this.parentElement.remove()">
            Delete
        </button>
    `;

    notesList.appendChild(note);

    noteInput.value = "";

    notesCount++;
    document.getElementById("totalNotes").textContent = notesCount;
}

// Demo Quiz
let quizScore = 0;

function startQuiz() {

    let quizArea = document.getElementById("quizArea");

    quizArea.innerHTML = `
        <h3>What is 2 + 2 ?</h3>

        <button onclick="checkAnswer(4)">
            4
        </button>

        <button onclick="checkAnswer(3)">
            3
        </button>

        <button onclick="checkAnswer(5)">
            5
        </button>

        <button onclick="checkAnswer(6)">
            6
        </button>
    `;
}

function checkAnswer(answer) {

    let quizArea = document.getElementById("quizArea");

    if (answer === 4) {
        quizScore += 10;

        quizArea.innerHTML = `
            <h2>Correct ✅</h2>
            <p>Your Score: ${quizScore}</p>
        `;
    } else {

        quizArea.innerHTML = `
            <h2>Wrong ❌</h2>
            <p>Your Score: ${quizScore}</p>
        `;
    }

    document.getElementById("quizScore").textContent = quizScore;
}

// Daily Streak Demo
let streak = 1;

window.onload = function () {

    if (document.getElementById("streak")) {
        document.getElementById("streak").textContent = streak;
    }

};
