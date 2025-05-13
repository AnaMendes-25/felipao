let nomeHeroi = prompt("Me diz aí, qual o nome do seu herói? ");
let xp = parseInt(prompt("O nome dele é show! Agora, qual o nível de experiência que ele está? "));

if (xp <= 1000) {
    console.log("O seu herói " + nomeHeroi + " está no nível FERRO.");
    alert("O seu herói " + nomeHeroi + " está no nível FERRO.");

} else if (xp >= 1001 && xp <= 2000) {
    console.log("Parabéns! O seu herói " + nomeHeroi + " está no nível BRONZE.");
    alert("Parabéns! O seu herói " + nomeHeroi + " está no nível BRONZE.");

} else if (xp >= 2001 && xp <= 5000) {
    console.log("Parabéns! O seu herói " + nomeHeroi + " está no nível PRATA.");
    alert("Parabéns! O seu herói " + nomeHeroi + " está no nível PRATA.");

} else if (xp >= 5001 && xp <= 7000) {
    console.log("Parabéns! O seu herói " + nomeHeroi + " está no nível OURO.");
    alert("Parabéns! O seu herói " + nomeHeroi + " está no nível OURO.");

} else if (xp >= 7001 && xp <= 8000) {
    console.log("Parabéns! O seu herói " + nomeHeroi + " está no nível PLATINA.");
    alert("Parabéns! O seu herói " + nomeHeroi + " está no nível PLATINA.");

} else if (xp >= 8001 && xp <= 9000) {
    console.log("Parabéns! O seu herói " + nomeHeroi + " está no nível ASCENDENTE.");
    alert("Parabéns! O seu herói " + nomeHeroi + " está no nível ASCENDENTE.");

} else if (xp >= 9001 && xp <= 10000) {
    console.log("Parabéns! O seu herói " + nomeHeroi + " está no nível IMORTAL.");
    alert("Parabéns! O seu herói " + nomeHeroi + " está no nível IMORTAL.");

} else if (xp >= 10001) {
    console.log("Parabéns! O seu herói " + nomeHeroi + " está no nível RADIANTE.");
    alert("Parabéns! O seu herói " + nomeHeroi + " está no nível RADIANTE.");

}

