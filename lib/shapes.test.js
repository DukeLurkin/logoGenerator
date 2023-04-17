// const jest = require('jest');
const { Triangle, Circle, Square } = require('./shapes')




describe('shapes', () => {
    // A test is created to check that quotient does in fact return the quotient of the two numbers.
    describe('setColor', () => {
        it('Triangle should be correct color', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
            
        });
    });



    describe('setColor', () => {
        it('Circle should be correct color', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
            
        });
    });



    describe('setColor', () => {
        it('Square should be correct color', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />');
            
        });
    });
});