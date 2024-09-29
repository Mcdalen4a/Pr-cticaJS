class Color {
    constructor (r,g,b,name) {
        this.r = r
        this.g = g
        this.b = b
        this.name = name

    }

    simplesValores () {
        const {r,g,b} = this
        return `${r},${g},${b}`
    }

    rgb(){
        return `rgb(${this.simplesValores()})`
    };

    hex(){
        const {r,g,b} = this
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
    };

    rgba (v = 1.0){
        return `rgb(${this.simplesValores()},${v})`
    }
}


const colorBlanco = new Color(255, 255, 255, 'blanco');
const colorAmarillo = new Color(255, 255, 0, 'amarillo'); // Corregir los valores para representar el color amarillo
console.log(colorBlanco.rgb());
console.log(colorAmarillo.rgb());
console.log(colorAmarillo.hex());
console.log(colorAmarillo.rgba(0.3));
console.log(colorBlanco);

document.body.style.backgroundColor = colorAmarillo.rgba(0.3);
