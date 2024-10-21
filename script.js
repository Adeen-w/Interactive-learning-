function search() {
    let query = document.querySelector('.search-bar input').value;
    alert('Search feature is under development. You searched for: ' + query);
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showDetails(moduleName) {
    alert('More information about ' + moduleName + ' will be available soon!');
}

function startQuiz(quizName) {
    alert('Starting ' + quizName + '. Coming soon!');
}
