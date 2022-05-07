// Get modal element
var modal = document.getElementById('companiesModal');
// Get open modal link
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function openModal
function openModal() {
    modal.style.display = 'block';
}
// Function close modal
function closeModal() {
    modal.style.display = 'none';
}
// Function outside click 
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

