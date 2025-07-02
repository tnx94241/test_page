document.addEventListener('DOMContentLoaded', () => {
  const popupOverlay = document.getElementById('image-popup-overlay');
  const popupImage = document.getElementById('image-popup');
  const images = document.querySelectorAll('.popup-image');

  images.forEach(img => {
    img.addEventListener('click', () => {
      popupImage.src = img.src;
      popupOverlay.style.display = 'flex';
    });
  });

  // 背景（オーバーレイ）をクリックしたときだけ閉じる
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = 'none';
      popupImage.src = '';
    }
  });
});

