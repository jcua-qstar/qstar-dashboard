document.addEventListener('DOMContentLoaded', () => {
    // Time range selector functionality
    const timeRange = document.getElementById('timeRange');
    timeRange.addEventListener('change', updateDashboard);

    // Initialize dashboard
    updateDashboard();
});

function updateDashboard() {
    const timeRange = document.getElementById('timeRange').value;
    updateMetrics();
    updateCharts(timeRange);
}

function updateMetrics() {
    // Placeholder for metric updates
}

function updateCharts(timeRange) {
    createPipelineChart();
}

function createPipelineChart() {
    const ctx = document.getElementById('pipelineChart');
    
    // Destroy existing chart if it exists
    if (window.pipelineChart) {
        window.pipelineChart.destroy();
    }
}
