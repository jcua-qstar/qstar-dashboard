// Content generation functions
function getDashboardContent() {
    return `
        <h1>Welcome to QStar Dashboard</h1>
        <div class="dashboard-grid">
            <div class="card">
                <h2>Quick Stats</h2>
                <div class="stats">
                    <div class="stat-item">
                        <span class="stat-value">150</span>
                        <span class="stat-label">Total Candidates</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">24</span>
                        <span class="stat-label">Active Jobs</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getAnalyticsContent() {
    return `
        <h1>Analytics</h1>
        <div class="analytics-grid">
            <div class="card chart-card">
                <h2>Candidate Pipeline</h2>
                <canvas id="pipelineChart"></canvas>
            </div>
        </div>
    `;
}

function getCandidatesContent() {
    return `
        <h1>Candidates</h1>
        <div class="card">
            <h2>Active Candidates</h2>
            <table class="candidates-table">
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Software Engineer</td>
                    <td>Interview</td>
                </tr>
            </table>
        </div>
    `;
}

function getBenchmarksContent() {
    return `
        <h1>Benchmarks</h1>
        <div class="card">
            <h2>Performance Metrics</h2>
            <p>Benchmark data will appear here.</p>
        </div>
    `;
}

// Chart initialization
function initializeCharts() {
    const ctx = document.getElementById('pipelineChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Applied', 'Screening', 'Interview', 'Offer', 'Hired'],
                datasets: [{
                    label: 'Candidates',
                    data: [100, 80, 60, 20, 15],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

// Page loading
function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    switch(page) {
        case 'dashboard':
            mainContent.innerHTML = getDashboardContent();
            break;
        case 'analytics':
            mainContent.innerHTML = getAnalyticsContent();
            setTimeout(initializeCharts, 0);
            break;
        case 'candidates':
            mainContent.innerHTML = getCandidatesContent();
            break;
        case 'benchmarks':
            mainContent.innerHTML = getBenchmarksContent();
            break;
        default:
            mainContent.innerHTML = getDashboardContent();
    }
}

// Initialize app
function initializeApp() {
    setupNavigation();
    const initialPage = window.location.hash.slice(1) || 'dashboard';
    loadPage(initialPage);
    window.addEventListener('hashchange', () => {
        const page = window.location.hash.slice(1) || 'dashboard';
        loadPage(page);
    });
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    initializeApp();
});