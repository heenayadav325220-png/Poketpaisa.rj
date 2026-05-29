// ===== PAGE NAVIGATION =====
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show selected page
  document.getElementById('page-' + pageId).classList.add('active');

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Scroll to top
  window.scrollTo(0, 0);
}

// ===== AI CHAT =====
const aiReplies = [
  "Great question! AURA AI is here to help you with anything you need. 🌟",
  "I understand! Let me help you figure that out. AURA AI is always learning! 🤖",
  "That's interesting! Here's what I think you should do next... 💡",
  "AURA AI has analyzed your query! Here's my suggestion for you. ✨",
  "I'm processing your request! AURA AI always has your back. 💪",
  "Based on my analysis, I recommend focusing on your goals step by step! 🎯",
  "Great insight! Let me add to that — consistency is the key to success! 🔑",
  "I've got you covered! Remember, every big journey starts with a small step. 🚀",
]

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  const messages = document.getElementById('chatMessages');

  // User message
  const userDiv = document.createElement('div');
  userDiv.className = 'msg user';
  userDiv.innerHTML = `<div class="msg-bubble">${msg}</div>`;
  messages.appendChild(userDiv);

  input.value = '';

  // Typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'msg ai';
  typingDiv.id = 'typing';
  typingDiv.innerHTML = `<div class="msg-bubble" style="color:#6B6B8A">AURA is thinking... ✨</div>`;
  messages.appendChild(typingDiv);

  messages.scrollTop = messages.scrollHeight;

  // AI Reply after delay
  setTimeout(() => {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();

    const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
    const aiDiv = document.createElement('div');
    aiDiv.className = 'msg ai';
    aiDiv.innerHTML = `<div class="msg-bubble">${reply}</div>`;
    messages.appendChild(aiDiv);
    messages.scrollTop = messages.scrollHeight;
  }, 1200);
}

// ===== FINANCE =====
let income = 25000;
let expense = 500;

function updateFinanceStats() {
  const balance = income - expense;
  document.getElementById('totalIncome').textContent = '₹' + income.toLocaleString();
  document.getElementById('totalExpense').textContent = '₹' + expense.toLocaleString();
  document.getElementById('balance').textContent = '₹' + balance.toLocaleString();
}

function addEntry() {
  const name = document.getElementById('entryName').value.trim();
  const amount = parseFloat(document.getElementById('entryAmount').value);
  const type = document.getElementById('entryType').value;

  if (!name || !amount || isNaN(amount)) return;

  // Update totals
  if (type === 'income') income += amount;
  else expense += amount;

  updateFinanceStats();

  // Add to list
  const list = document.getElementById('transactionList');
  const item = document.createElement('div');
  item.className = 'activity-item';
  item.innerHTML = `
    <span>${type === 'income' ? '🟢' : '🔴'}</span>
    <p>${name}</p>
    <small class="${type === 'income' ? 'green' : 'red'}">${type === 'income' ? '+' : '-'}₹${amount.toLocaleString()}</small>
  `;
  list.prepend(item);

  // Clear inputs
  document.getElementById('entryName').value = '';
  document.getElementById('entryAmount').value = '';
}

// Init finance
updateFinanceStats();

// ===== HEALTH =====
const health = { water: 0, sleep: 0, steps: 0 };

function updateTracker(type, delta) {
  if (type === 'water') {
    health.water = Math.min(8, Math.max(0, health.water + delta));
    document.getElementById('waterVal').textContent = health.water + ' / 8 glasses';
  } else if (type === 'sleep') {
    health.sleep = Math.min(12, Math.max(0, health.sleep + delta));
    document.getElementById('sleepVal').textContent = health.sleep + ' / 8 hours';
  } else if (type === 'steps') {
    health.steps = Math.min(10000, Math.max(0, health.steps + delta));
    document.getElementById('stepsVal').textContent = health.steps.toLocaleString() + ' / 10,000';
  }
  updateHealthScore();
}

function updateHealthScore() {
  const score = Math.min(100, Math.round(
    (health.water / 8 * 40) +
    (health.sleep / 8 * 40) +
    (health.steps / 10000 * 20)
  ));

  document.getElementById('healthScore').textContent = score;
  document.getElementById('scoreFill').style.width = score + '%';

  const emoji = document.getElementById('scoreEmoji');
  if (score >= 80) emoji.textContent = '🟢 Excellent! Keep it up!';
  else if (score >= 50) emoji.textContent = '🟡 Good — keep going!';
  else if (score > 0) emoji.textContent = '🔴 Needs Improvement';
  else emoji.textContent = '⚪ Start tracking!';
}

// ===== LEARNING =====
function startCourse(card) {
  const title = card.querySelector('h3').textContent;
  alert(`🚀 Opening: ${title}\n\nThis feature is coming soon in AURA AI! Stay tuned.`);
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.style.background = 'rgba(8,8,16,0.95)';
  } else {
    navbar.style.background = 'rgba(8,8,16,0.8)';
  }
});
