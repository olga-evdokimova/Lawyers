
const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown-list');

function handleMenu(event) {
    event.stopPropagation();
    const dropdownMenuStyle = window.getComputedStyle(dropdownList);
    if (dropdownMenuStyle.display === 'none') {
        dropdownList.style.display = 'block';
        document.addEventListener('click', handleClick);
        // добавляем обработчик клика вне меню
    } else {
        dropdownList.style.display = 'none';
        document.removeEventListener('click', handleClick);
        // удаляем обработчик клика вне меню
    }
}

function handleClick(event) {
    if (!dropdown.contains(event.target)) {
        dropdownList.style.display = 'none';
        document.removeEventListener('click', handleClick);
        // удаляем обработчик клика вне меню
    }
}

function handleResize() {
    if (window.innerWidth < 1140) {
        dropdown.removeEventListener('click', handleMenu);
        dropdownList.style.display = 'none';
        document.removeEventListener('click', handleClick);
        // удаляем обработчик клика вне меню
    } else {
        dropdown.addEventListener('click', handleMenu);
    }
}

// добавляем обработчик события "resize"
window.addEventListener('resize', handleResize);

// инициализируем состояние выпадающего меню
handleResize();