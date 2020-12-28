// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

const delay = ms => {
  return new Promise((resolve, reject) => {
    const passed = ms >= 0;
    setTimeout(() => {
      if (passed) {
        resolve(ms);
      }
      else reject('error');
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time} ms`);
const mistake = error => console.log(error);

// Вызовы функции для проверки
delay(2000).then(logger).catch(mistake); // Resolved after 2000ms
delay(1000).then(logger).catch(mistake); // Resolved after 1000ms
delay(1500).then(logger).catch(mistake); // Resolved after 1500ms
delay(-150).then(logger).catch(mistake);
