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
        console.log('メニューが開きました'); // デバッグ用
    });

    closeButton.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        console.log('メニューが閉じました'); // デバッグ用
    });
});