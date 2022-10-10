const cookie = document.getElementById("cookie"); // proměnná, změnení hodnot, uložení informací
const counter = document.getElementById("counter");
const cookieClickMultiplier = document.getElementById("cookieClickMultiplier");
const cookieClickMultiplier2 = document.getElementById(
  "cookieClickMultiplier2"
);
const cookieClickMultiplier3 = document.getElementById(
  "cookieClickMultiplier3"
);
const info = document.getElementById("info");
const autoClickerButton = document.getElementById("autoClickerButton");

let numberOfCookies = 0;
let cookieIncrease = 1; // pocitadlo kolikrat jsme koupili

let autoClickerPrice = 100; // cena autoclickeru
let autoClickerIncrease = 0; // o kolik se zvednou susenky

cookie.onclick = () => {
  numberOfCookies += cookieIncrease; //dve pluska prictou jednicku
  counter.innerHTML = numberOfCookies;
};
cookieClickMultiplier.onclick = () => {
  if (numberOfCookies >= 50) {
    numberOfCookies -= 50; //numberOfCookies = numberOfCookies -50;
    cookieIncrease++;
    counter.innerHTML = numberOfCookies;
    let t = cookieIncrease - 1;
    info.innerHTML = `You bought a new upgrade with turbo ${t}x`;
  }
};
cookieClickMultiplier2.onclick = () => {
  if (numberOfCookies >= 100) {
    numberOfCookies -= 100; //numberOfCookies = numberOfCookies -100;
    cookieIncrease++;
    counter.innerHTML = numberOfCookies;
  }
};

cookieClickMultiplier3.onclick = () => {
  if (numberOfCookies >= 150) {
    numberOfCookies -= 150; //numberOfCookies = numberOfCookies -150;
    cookieIncrease++;
    counter.innerHTML = numberOfCookies;
  }
};
autoClickerButton.onclick = () => {
  if (numberOfCookies >= autoClickerPrice) {
    numberOfCookies -= autoClickerPrice;
    counter.innerHTML = numberOfCookies;
    autoClickerPrice *= 2;
    autoClickerButton.innerHTML = `Buy autoclicker ${autoClickerPrice}`;
    if (autoClickerIncrease == 0) {
      setInterval(() => {
        numberOfCookies += autoClickerIncrease;
        counter.innerHTML = numberOfCookies; // aktualizace intervalu v html
      }, 10);
    } // spustit interval
    autoClickerIncrease++;
  }
};
