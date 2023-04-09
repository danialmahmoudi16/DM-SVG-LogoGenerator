class Circle{
    constructor(textchar, textcolor, shapecolor){
        this.textchar = textchar;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    } 

    setTextchar(textchar){
        this.textchar=(textchar);
    }

    setTextcolor(textcolor){
        this.textcolor=(textcolor);
    }

    setShapecolor(shapecolor){
        this.shapecolor=(shapecolor);
    }
     render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="100" cy="50" r="50" stroke-width="3" fill="${this.setShapecolor}"><text x="50%" y="50%" text-anchor="middle" fill="${this.setTextcolor}"></text></svg>`
    }
    }

class Triangle{
    constructor(textchar, textcolor, shapecolor){
        this.textchar = textchar;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    } 
    
    setTextchar(textchar){
        this.textchar=(textchar);
    }
    
    setTextcolor(textcolor){
        this.textcolor=(textcolor);
    }
    
    setShapecolor(shapecolor){
        this.shapecolor=(shapecolor);
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="200,10 250,190 160,210" fill="${this.setShapecolor}"><text x="50%" y="50%" text-anchor="middle" fill="${this.setTextcolor}"></text></svg>`
    }
    }

class Square{
    constructor(textchar, textcolor, shapecolor){
        this.textchar = textchar;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    } 
        
    setTextchar(textchar){
        this.textchar=(textchar);
    }
        
    setTextcolor(textcolor){
        this.textcolor=(textcolor);
    }
        
    setShapecolor(shapecolor){
        this.shapecolor=(shapecolor);
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="300" height="100" fill="${this.setShapecolor}"><text x="50%" y="50%" text-anchor="middle" fill="${this.setTextcolor}"></text></svg>`
    }
    }

module.exports = {Circle, Triangle, Square}