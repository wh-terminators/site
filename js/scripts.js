// Set the current year in the footer
const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = new Date().getFullYear();
} else {
	console.warn('Year element (#year) not found in the document.');
}
