
function fixProfileHeaderPosition() {
  const profileContainer = document.querySelector('.KvKvqR');
  if (profileContainer) {
    profileContainer.style.position = 'relative';
    profileContainer.style.top = '0';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fixProfileHeaderPosition);
} else {
  fixProfileHeaderPosition();
}

setInterval(fixProfileHeaderPosition, 2000);