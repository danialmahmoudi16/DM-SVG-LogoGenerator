const {Circle, Triangle, Square} = require('./shapes.js');


describe('Circle', () => {

    describe('Circle Render', () => {
        it('should render the SVG for a circle', () => {
            const circle = new Circle();
            var textchar = "TST"
            var shapecolor = "purple"
            var textcolor = "white"
            circle.setTextchar(textchar)
            circle.setShapecolor(shapecolor)
            circle.setTextcolor(textcolor)
            expect(circle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="100" cy="50" r="50" stroke-width="3" fill="${shapecolor}"></circle><text x="50%" y="50%" text-anchor="middle" fill="${textcolor}"></text></svg>`);
        });
    });
})




describe('Triangle', () => {

    describe('Triangle Render', () => {
        it('should render the SVG for a Triangle', () => {
            const traingle = new Triangle();
            var textchar = "TST"
            var shapecolor = "purple"
            var textcolor = "white"
            traingle.setTextchar(textchar)
            traingle.setShapecolor(shapecolor)
            traingle.setTextcolor(textcolor)
            expect(traingle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="200,10 250,190 160,210" fill="${shapecolor}"></polygon><text x="50%" y="50%" text-anchor="middle" fill="${textcolor}"></text></svg>`);
        });
    })
})



describe('Square', () => {

    describe('Square Render', () => {
        it('should render the SVG for a Square', () => {
            const square = new Square();
            var textchar = "TST"
            var shapecolor = "purple"
            var textcolor = "white"
            square.setTextchar(textchar)
            square.setShapecolor(shapecolor)
            square.setTextcolor(textcolor)
            expect(square.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="300" height="100" fill="${shapecolor}"></rect><text x="50%" y="50%" text-anchor="middle" fill="${textcolor}"></text></svg>`);
        });
    })
})

