let NomeHeroi = "Bryan";
let XPHeroi = 9001;
let Rank;

if (XPHeroi < 1000) {
  Rank = "Ferro";
} else if (XPHeroi >= 1001 && XPHeroi <= 2000) {
  Rank = "Bronze";
} else if (XPHeroi >= 2001 && XPHeroi <= 5000) {
  Rank = "Prata";
} else if (XPHeroi >= 5001 && XPHeroi <= 7000) {
  Rank = "Ouro";
} else if (XPHeroi >= 7001 && XPHeroi <= 8000) {
  Rank = "Platina";
} else if (XPHeroi >= 8001 && XPHeroi <= 9000) {
  Rank = "Ascendente";
} else if (XPHeroi >= 9001 && XPHeroi <= 10000) {
  Rank = "Imortal";
} else if (XPHeroi >= 10001) {
  Rank = "Radiante";
} else {
  Rank = "Sem rank";
}

console.log("O Herói de nome: " + NomeHeroi + " está no nível: " + Rank);
