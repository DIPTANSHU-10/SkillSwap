// Search Filter
document.getElementById('searchInput').addEventListener('keyup', function(e) {
  const text = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.innerText.toLowerCase();
    card.style.display = title.includes(text) ? 'block' : 'none';
  });
});

// Modal Logic
function bookService(serviceName, creatorName) {
  document.getElementById('modalTitle').innerText = 'Book ' + serviceName;
  document.getElementById('modalCreator').innerText = 'Provider: ' + creatorName;
  document.getElementById('bookingModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

function confirmBooking(event) {
  event.preventDefault();
  const name = document.getElementById('clientName').value;
  const date = document.getElementById('bookingDate').value;

  alert(`Booking Confirmed!\nClient: ${name}\nDate: ${date}`);
  closeModal();
  document.getElementById('bookingForm').reset();
}