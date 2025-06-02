// ShoreSquad App JS

document.addEventListener('DOMContentLoaded', () => {
  // Join button interaction
  const joinBtn = document.getElementById('join-btn');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      alert('Thanks for joining! Stay tuned for upcoming cleanups.');
    });
  }

  // Placeholder for map and weather integration
  document.getElementById('map-container').textContent = 'Interactive map coming soon!';
  document.getElementById('weather-info').textContent = 'Weather updates coming soon!';
  document.getElementById('crew-list').textContent = 'Crew features coming soon!';
});
