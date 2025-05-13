// Show the selected contract and hide others
function showContract(contractId) {
    // Hide all contracts
    document.querySelectorAll('.contract').forEach(el => {
        el.classList.add('hidden');
    });

    // Show selected contract
    document.getElementById(contractId + '-contract').classList.remove('hidden');

    // Update tab styles
    const tabs = ['general', 'emotional', 'death'];
    tabs.forEach(tab => {
        const tabElements = document.querySelectorAll(`[onclick="showContract('${tab}')"]`);
        tabElements.forEach(el => {
            if (tab === contractId) {
                el.classList.remove('tab-inactive');
                el.classList.add('tab-active');
            } else {
                el.classList.remove('tab-active');
                el.classList.add('tab-inactive');
            }
        });
    });
}

// Initialize with general terms visible
document.addEventListener('DOMContentLoaded', function () {
    showContract('general');
});