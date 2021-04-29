// Add your Circle class here
class Circle {
    constructor(radius) {
        this._radius = radius
    }

    get radius() {
        return this._radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return 2 * Math.PI * this.radius
    }

    get area() {
        return Math.PI * (this.radius**2)
    }

    set diameter(newDia) {
        this._radius = newDia / 2
    }

    set circumference(newCirc) {
        this._radius = newCirc / 2 / Math.PI
    }
}