document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    const closeButton = document.getElementById('close-button');

    if (!menuButton || !sideMenu || !closeButton) {
        console.error('必要な要素が見つかりません');
        return;
    }

    menuButton.addEventListener('click', () => {
        sideMenu.classList.add('open');
        console.log('メニューが開きました'); 
    });

    closeButton.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        console.log('メニューが閉じました'); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("toggleImage");
    const images = [
        "../index4_all/アイタイボクラimg/aitai1.JPG",
        "../index4_all/アイタイボクラimg/aitai2.JPG"
    ];

    let currentIndex = 0; 

    imageElement.addEventListener("click", function () {
      
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("togggleImage");
    const images = [
        "../index4_all/7周年ライブimg/IMG_7948.JPG",
        "../index4_all/7周年ライブimg/IMG_7949.JPG"
    ];

    let currentIndex = 0;

    imageElement.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    });
});