import { Triangle } from "../lib/figures";

describe('Triangle', () => {
  describe('Validation at constructing', () => {
    test('negative sides', () => {
      expect(() => {
        new Triangle(-1, 10, 3);
      }).toThrowError(/must be positive/i);
      expect(() => {
        new Triangle(3, -1, 30);
      }).toThrowError(/must be positive/i);
      expect(() => {
        new Triangle(3, 30, -1);
      }).toThrowError(/must be positive/i);
    });
    test('incompatible sides', () => {
      expect(() => {
        new Triangle(100, 1, 2);
      }).toThrowError(/does not exist/i);
    });
    test('zero', () => {
      expect(() => {
        new Triangle(0, 1, 1);
      }).toThrowError(/must be positive/i);
      expect(() => {
        new Triangle(1, 0, 0);
      }).toThrowError(/must be positive/i);
      expect(() => {
        new Triangle(0, 0, 0);
      }).toThrowError();
    });
  });
  describe('Base functional', () => {
    const triangle = new Triangle(3, 4, 5);
    test('Area', () => {
      expect(triangle.getArea()).toBe(6);
    });
    test('Perimeter', () => {
      expect(triangle.getPerimeter()).toBe(12);
    });
  });
  describe('Additional functional', () => {
    const triangle = new Triangle(3, 4, 5);
    test('Inscribed circle radius', () => {
      expect(triangle.getInscribedRadius()).toBe(1);
    });
  })
});
