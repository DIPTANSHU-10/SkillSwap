// Simple interactive Search filter
document.getElementById('searchInput').addEventListener('keyup', function(e) {
  const text = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.innerText.toLowerCase();
    card.style.display = title.includes(text) ? 'block' : 'none';
  });
});

// Simple alert for booking button verification
function bookService(serviceName) {
  alert('Successfully booked: ' + serviceName + '!');
}