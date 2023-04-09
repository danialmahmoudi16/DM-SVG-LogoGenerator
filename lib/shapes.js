// individual functions for each shape
class Circle {
    constructor(textchar, textcolor, shapecolor) {
        this.textchar = textchar;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    setColor(color) {
        this.shapecolor = color;
    }

    render() {


        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="100" stroke-width="3" fill="${this.shapecolor}"/>
        <text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="${this.textcolor}">${this.textchar}</text></svg>`
    }
}

class Triangle {
    constructor(textchar, textcolor, shapecolor) {
        this.textchar = textchar;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    setColor(color) {
        this.shapecolor = color;
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="200,20 240,200 160,200" fill="${this.shapecolor}"/>
        <text x="66%" y="80%" text-anchor="middle" font-size="2em" fill="${this.textcolor}">${this.textchar}</text></svg>`
    }
}

class Square {
    constructor(textchar, textcolor, shapecolor) {
        this.textchar = textchar;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }

    setColor(color) {
        this.shapecolor = color;
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="200" height="200" fill="${this.shapecolor}"/>
        <text x="35%" y="60%" text-anchor="middle" font-size="6em" fill="${this.textcolor}">${this.textchar}</text></svg>`
    }
}

module.exports = { Circle, Triangle, Square }