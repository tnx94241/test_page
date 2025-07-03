document.addEventListener('DOMContentLoaded', () => {
  const popupOverlay = document.getElementById('image-popup-overlay');
  const popupImage = document.getElementById('image-popup');

  // 画像からポップアップ
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

  // 文字リンクからポップアップ
  const triggers = document.querySelectorAll('.popup-trigger');
  triggers.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // リンク移動を止める
      const imageUrl = link.dataset.image;
      popupImage.src = imageUrl;
      popupOverlay.style.display = 'flex';
    });
  });

  // 画像の外側をクリックで閉じる
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = 'none';
      popupImage.src = '';
    }
  });
});

