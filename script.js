function toggleOptions(unitId) {
    var unit = document.getElementById(unitId);
    var options = document.getElementById(unitId + 'Options');
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
}