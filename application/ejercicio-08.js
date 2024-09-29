const crearMazoCartas = () => {
    return {
        baraja: [],
        palos: ["♥", "♦", "♣", "♠"],
        cartasRepartidas: [],

        crearPalo(palo) {
            let baraja = [];

            for (let i = 0; i < 10; i++) {
                baraja[i] = new Object();
                baraja[i].numero = i + 1;
                baraja[i].Palo = palo;
            }

            return baraja;
        },

        crearBaraja() {
            this.baraja = [];
            let palos = ["♥", "♦", "♣", "♠"];

            for (let i = 0; i < 4; i++) {
                this.baraja.push(...this.crearPalo(palos[i])); //Corregido los 4 arrays
            }
            this.radomizar(this.baraja, 10, 4);
        },

        radomizar(mazo, cantidad, totalPalos) {
            let nuevoMazo = [];

            for (let i = 0; i < cantidad * totalPalos; i++) {
                let index = Math.floor(Math.random() * (mazo.length));
                nuevoMazo.push(...mazo.splice(index, 1));
            }

            this.baraja = nuevoMazo;
        },
        entregarCarta() {
            this.cartasRepartidas.push(this.baraja.splice(Math.floor(Math.random() * (this.baraja.length)), 1)[0]);
            return this.cartasRepartidas[this.cartasRepartidas.length - 1];
        },

        RepartirCartas(total) {
            const cartas = [];

            for (let i = 0; i < total; i++) {
                cartas.push(this.entregarCarta());
            }

            return cartas;
        },
        mezclar() {
            for (let i = this.baraja.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [this.baraja[i], this.baraja[j]] = [this.baraja[j], this.baraja[i]];
            }
            console.log(this.baraja);
        }
    }
}

const mazo1 = crearMazoCartas();
const mazo2 = crearMazoCartas();

console.log('Mazo 1');
mazo1.crearBaraja();
mazo1.mezclar();
console.log(mazo1.baraja);

console.log('Mazo 2');
mazo2.crearBaraja();
console.log(mazo2.baraja);

/*console.log(Objeto.baraja);
Objeto.crearBaraja();
console.log(Objeto.baraja);
Objeto.entregarCarta()
Objeto.entregarCarta()
Objeto.mezclar()
console.log(Objeto.cartasRepartidas);
console.log(Objeto.RepartirCartas(3));
console.log(Objeto.cartasRepartidas);
*/
