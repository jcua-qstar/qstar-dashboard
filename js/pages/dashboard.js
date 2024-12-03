export function loadDashboard() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <main class="dashboard-page">
            <div class="stats-header">
                <div class="stat-card">
                    <i class="fas fa-chart-line"></i>
                    <div class="stat-info">
                        <h4>Turnover Rate</h4>
                        <div class="stat-value-container">
                            <div class="stat-value">12.5%</div>
                            <div class="trend positive">
                                <i class="fas fa-arrow-down"></i> 3.2% from last month
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Copy your existing dashboard stats cards here -->
            </div>

            <div class="dashboard-grid">
                <!-- Copy your existing dashboard charts and tables here -->
            </div>
        </main>
    `;
    initializeDashboardCharts();
}

function initializeDashboardCharts() {
    // Copy your existing chart initialization code here
} 