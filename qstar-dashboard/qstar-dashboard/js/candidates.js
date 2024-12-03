class CandidateSearch {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.candidates = [];
        this.filteredCandidates = [];
        
        this.initializeElements();
        this.bindEvents();
        this.loadMockData();
    }

    initializeElements() {
        // Search elements
        this.searchInput = document.getElementById('candidate-search');
        
        // Filter elements
        this.specialtyFilter = document.getElementById('specialty-filter');
        this.distanceFilter = document.getElementById('distance-filter');
        this.distanceValue = document.getElementById('distance-value');
        this.tenureFilter = document.getElementById('tenure-filter');
        this.tenureValue = document.getElementById('tenure-value');
        this.schoolFilter = document.getElementById('school-filter');
        
        // Results elements
        this.candidatesTable = document.getElementById('candidates-table');
        this.candidatesBody = document.getElementById('candidates-body');
        this.noResults = document.getElementById('no-results');
        
        // Pagination elements
        this.prevButton = document.getElementById('prev-page');
        this.nextButton = document.getElementById('next-page');
        this.pageInfo = document.getElementById('page-info');
    }

    bindEvents() {
        // Debounced search
        this.searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 500));
    }

    loadMockData() {
        // Mock data
        this.candidates = Array.from({ length: 100 }, (_, i) => ({
            id: i + 1,
            name: `Candidate ${i + 1}`,
            specialty: `Specialty ${i % 5 + 1}`,
            distance: `${Math.floor(Math.random() * 100) + 1} miles`,
            tenure: `${Math.floor(Math.random() * 10) + 1} years`,
            school: `School ${i % 3 + 1}`
        }));
        this.filteredCandidates = this.candidates;
        this.renderCandidates();
    }

    handleSearch(event) {
        const query = event.target.value.toLowerCase();
        this.filteredCandidates = this.candidates.filter(candidate =>
            candidate.name.toLowerCase().includes(query) ||
            candidate.specialty.toLowerCase().includes(query) ||
            candidate.distance.toLowerCase().includes(query) ||
            candidate.tenure.toLowerCase().includes(query) ||
            candidate.school.toLowerCase().includes(query)
        );
        this.renderCandidates();
    }

    renderCandidates() {
        this.candidatesBody.innerHTML = '';
        this.filteredCandidates.forEach(candidate => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${candidate.id}</td>
                <td>${candidate.name}</td>
                <td>${candidate.specialty}</td>
                <td>${candidate.distance}</td>
                <td>${candidate.tenure}</td>
                <td>${candidate.school}</td>
            `;
            this.candidatesBody.appendChild(row);
        });
        this.noResults.classList.toggle('hidden', this.filteredCandidates.length > 0);
        this.updatePagination();
    }

    updatePagination() {
        this.prevButton.disabled = this.currentPage === 1;
        this.nextButton.disabled = this.currentPage === Math.ceil(this.filteredCandidates.length / this.itemsPerPage);
        this.pageInfo.textContent = `Page ${this.currentPage} of ${Math.ceil(this.filteredCandidates.length / this.itemsPerPage)}`;
    }

    debounce(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }
}

new CandidateSearch();
