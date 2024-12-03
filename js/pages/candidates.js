export function loadCandidatesPage() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <main class="candidates-page">
            <div class="stats-header">
                <div class="stat-card">
                    <i class="fas fa-file-signature"></i>
                    <div class="stat-info">
                        <h4>In Offer Stage</h4>
                        <div class="stat-value-container">
                            <div class="stat-value">12</div>
                            <div class="trend positive">
                                <i class="fas fa-arrow-up"></i> 4 more than last month
                            </div>
                        </div>
                    </div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-user-nurse"></i>
                    <div class="stat-info">
                        <h4>Hires, YTD</h4>
                        <div class="stat-value-container">
                            <div class="stat-value">245</div>
                            <div class="trend positive">
                                <i class="fas fa-arrow-up"></i> 15% increase
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    `;
}
