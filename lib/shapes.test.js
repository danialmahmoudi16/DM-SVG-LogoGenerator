//The three different test shapes
const { Circle, Triangle, Square } = require('./shapes.js');


describe('Circle', () => {

    describe('Circle Render', () => {
        it('should render the SVG for a circle', () => {
            const circle = new Circle();
            var color = "purple"
            var textcolor = "yellow"
            var textchar = "TST"
            circle.setColor(color);
            circle.textcolor(textcolor);
            circle.textchar(textchar);
            expect(circle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="100" stroke-width="3" fill="${color}"/>
            <text x="50%" y="60%" text-anchor="middle" font-size="6em" fill="${textcolor}">${textchar}</text></svg>`);
        });
    });
})




describe('Triangle', () => {

    describe('Triangle Render', () => {
        it('should render the SVG for a Triangle', () => {
            const triangle = new Triangle();
            var color = "purple"
            var textcolor = "yellow"
            var textchar = "TST"
            triangle.setColor(color);
            triangle.textcolor(textcolor);
            triangle.textchar(textchar);
            expect(triangle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="200,20 240,200 160,200" fill="${color}"/>
            <text x="66%" y="80%" text-anchor="middle" font-size="2em" fill="${textcolor}">${textchar}</text></svg>`);
        });
    })
})



describe('Square', () => {

    describe('Square Render', () => {
        it('should render the SVG for a Square', () => {
            const square = new Square();
            var color = "purple"
            var textcolor = "yellow"
            var textchar = "TST"
            square.setColor(color);
            square.textcolor(textcolor);
            square.textchar(textchar);
            expect(square.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect width="200" height="200" fill="${color}"/>
            <text x="35%" y="60%" text-anchor="middle" font-size="6em" fill="${textcolor}">${textchar}</text></svg>`);
        });
    })
})

