// Укажи дату и время окончания отсчёта (например, 31 декабря 2023, 23:59:59)
const endDate = new Date("2025-10-03T23:59:59").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;
  
    // Вычисляем дни, часы, минуты, секунды
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Обновляем значения
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

  // Если отсчёт завершён
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Игры начались!";
  }
}, 1000);
