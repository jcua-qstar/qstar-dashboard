import { loadCandidatesPage } from './pages/candidates.js';
import { loadDashboard } from './pages/dashboard.js';

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');

    // Handle navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            const page = this.dataset.page;
            switch(page) {
                case 'dashboard':
                    loadDashboard();
                    break;
                case 'candidates':
                    loadCandidatesPage();
                    break;
                case 'benchmarks':
                    // We'll add this next
                    break;
            }
        });
    });

    // Load dashboard by default
    loadDashboard();
}); 