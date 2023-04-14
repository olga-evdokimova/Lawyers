
// const dropdown = document.querySelector('.dropdown');
// const dropdownList = document.querySelector('.dropdown-list');

// function handleMenu(event) {
//     event.stopPropagation();
//     const dropdownMenuStyle = window.getComputedStyle(dropdownList);
//     if (dropdownMenuStyle.display === 'none') {
//         dropdownList.style.display = 'block';
//         document.addEventListener('click', handleClick);
//         // добавляем обработчик клика вне меню
//     } else {
//         dropdownList.style.display = 'none';
//         document.removeEventListener('click', handleClick);
//         // удаляем обработчик клика вне меню
//     }
// }

// function handleClick(event) {
//     if (!dropdown.contains(event.target)) {
//         dropdownList.style.display = 'none';
//         document.removeEventListener('click', handleClick);
//         // удаляем обработчик клика вне меню
//     }
// }

// function handleResize() {
//     if (window.innerWidth < 1140) {
//         dropdown.removeEventListener('click', handleMenu);
//         dropdownList.style.display = 'none';
//         document.removeEventListener('click', handleClick);
//         // удаляем обработчик клика вне меню
//     } else {
//         dropdown.addEventListener('click', handleMenu);
//     }
// }

// // добавляем обработчик события "resize"
// window.addEventListener('resize', handleResize);

// // инициализируем состояние выпадающего меню
// handleResize();


// Кастомизация select============================================
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});
