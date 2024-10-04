function setup() {
  createCanvas(400, 400);  // Crea una tela 400x400 pixel
  background("#ffcc33");         // Sfondo giallo
  noLoop();                // Ferma il loop di disegno dopo il primo ciclo
}

function draw() {
  translate(width / 2, height / 2);  // Centra il disegno al centro della tela

  let numPetals = 8;         // Numero di petali del fiore
  let petalRadius = 150;      // Lunghezza dei petali
  let petalWidth = 80;        // Larghezza dei petali

  // Disegna i petali con una sfumatura
  for (let i = 0; i < numPetals; i++) {
    let angle = TWO_PI / numPetals * i;  // Calcola l'angolo per ogni petalo
    let x = cos(angle) * petalRadius / 2;  // Posizione X del petalo
    let y = sin(angle) * petalRadius / 2;  // Posizione Y del petalo

    push();  // Salva lo stato corrente di trasformazione
    translate(x, y);  // Sposta l'origine per disegnare il petalo
    rotate(angle + HALF_PI);  // Ruota il petalo per allinearlo

    // Sfumatura dal rosa chiaro (#ff99cc) al viola (#9933ff)
    let petalColor1 = color('#ff99cc');  // Colore di partenza (rosa chiaro)
    let petalColor2 = color('#9933ff');  // Colore finale (viola)
    for (let j = 0; j < 10; j++) {  // Dividi ogni petalo in 10 sezioni per creare la sfumatura
      let inter = map(j, 0, 10, 0, 1);  // Calcola l'interpolazione del colore
      let c = lerpColor(petalColor1, petalColor2, inter);  // Colore interpolato tra rosa e viola
      fill(c);  // Applica il colore
      noStroke();  // Rimuovi i bordi
      ellipse(0, 0, petalWidth - j * 8, petalRadius - j * 15);  // Disegna un'ellisse ridotta per ogni sezione del petalo
    }
    pop();  // Ripristina lo stato di trasformazione precedente
  }

  // Disegna il centro del fiore
  fill('#ffcc33');  // Colore giallo acceso per il centro
  noStroke();  // Nessun bordo per il centro
  ellipse(0, 0, 60, 60);  // Cerchio al centro del fiore con diametro di 60 pixel
}
