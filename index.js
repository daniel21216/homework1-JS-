// Получаем данные пользователя
const userName = prompt("Введите ваше имя:");
const userAge = parseInt(prompt("Введите ваш возраст:"));

// Проверяем возраст и выполняем соответствующие действия
if (userAge < 18) {
    // Возраст меньше 18 лет
    alert("You are not allowed to visit this website");
} else if (userAge >= 18 && userAge <= 22) {
    // Возраст от 18 до 22 лет (включительно)
    const userConfirmed = confirm("Are you sure you want to continue?");

    if (userConfirmed) {
        alert(`Welcome, ${userName}`);
    } else {
        alert("You are not allowed to visit this website");
    }
} else {
    // Возраст больше 22 лет
    alert(`Welcome, ${userName}`);
}
