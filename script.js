// Small JS: set the current year and leave a placeholder for rating integration
const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = new Date().getFullYear();
} else {
	console.warn('Year element (#year) not found in the document.');
}
// 'rating' is currently a placeholder; you can add a real reviews widget later.
