import { Rectangle } from "../lib/figures";

describe('Rectangle', () => {
  describe('Validation at constuction', () => {
    test('negative first side', () => {
      expect(() => {
        new Rectangle(-1, 10);
      }).toThrowError(/width must be positive/i);
    });
    test('negative second side', () => {
      expect(() => {
        new Rectangle(10, -1);
      }).toThrowError(/height must be positive/i);
    });
    test('both sides', () => {
      expect(() => {
        new Rectangle(-1, -1);
      }).toThrowError();
    });
    test('zero', () => {
      expect(() => {
        new Rectangle(0, 1);
      }).toThrowError(/width must be positive/i);
      expect(() => {
        new Rectangle(1, 0);
      }).toThrowError(/height must be positive/i);
      expect(() => {
        new Rectangle(0, 0);
      }).toThrowError();
    });
    test('positive numbers', () => {
      expect(() => {
        new Rectangle(1, 1);
      }).not.toThrowError();
    });
  });
  describe('Base functional', () => {
    const rectangle = new Rectangle(3.5, 10);
    test('Area', () => {
      expect(rectangle.getArea()).toBe(35);
    });
    test('Perimeter', () => {
      expect(rectangle.getPerimeter()).toBe(27);
    });
  });
  describe('Additional functional', () => {
    const rectangle = new Rectangle(3, 4);
    test('Diagonal', () => {
      expect(rectangle.getDiagonal()).toBe(5);
    });
  })
});
