import { Circle } from '../lib/figures';

describe('Circle', () => {
  describe('Validation at constuction', () => {
    test('negative numbers', () => {
      expect(() => {
        new Circle(-1);
      }).toThrowError(/must be positive/i);
    });
    test('zero', () => {
      expect(() => {
        new Circle(0);
      }).toThrowError(/must be positive/i);
    });
    test('positive numbers', () => {
      expect(() => {
        new Circle(23);
      }).not.toThrowError();
    });
  });
  describe('Base functional', () => {
    const circle = new Circle(3.5);
    test('Area', () => { 
      const computedArea = Number(circle.getArea().toFixed(2));
      const expectedArea = 38.48;
      expect(computedArea).toBe(expectedArea);
    });
    test('Perimeter', () => {
      const computedPerimeter = Number(circle.getPerimeter().toFixed(2));
      const expectedPerimeter = 21.99;
      expect(computedPerimeter).toBe(expectedPerimeter);
    });
  });
  describe('Additional functional', () => {
    const circle = new Circle(3);
    test('Diameter', () => {
      const computedDiameter = circle.getDiameter();
      const expectedDiameter = 6;
      expect(computedDiameter).toBe(expectedDiameter);
    });
  })
});
