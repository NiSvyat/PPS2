// Функция для показа выбранной секции
function showSection(sectionId) {
    // Скрыть все секции
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none'; // Скрываем каждую секцию
    });

    // Показать выбранную секцию
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // Показываем только выбранную секцию
    }
}

// Добавляем обработчики событий для кнопок
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки навигации
    const buttons = document.querySelectorAll('nav button');

    // Добавляем обработчик события для каждой кнопки
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.textContent.toLowerCase().replace(' ', ''); // Получаем id секции из текста кнопки
            showSection(sectionId); // Вызываем функцию для показа секции
        });
    });

    // Показать первую секцию по умолчанию
    showSection('about');
});
