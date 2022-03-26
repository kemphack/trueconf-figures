import FigureBase from './FigureBase';

export default class Rectangle extends FigureBase {
  constructor(private width: number, private height: number) {
    const figureValidator = () => {
      if (width <= 0) {
        throw new TypeError('Rectangle`s width must be positive!');
      }
      if (height <= 0) {
        throw new TypeError('Rectangle`s height must be positive!');
      }
    }
    super(figureValidator);
  }

  getArea(): number {
    // S = a * b
    return this.width * this.height;
  }

  getPerimeter(): number {
    // P = 2 * (a + b)
    return 2 * (this.width + this.height);
  }

  getDiagonal(): number {
    // d² = a² + b²
    return Math.hypot(this.width, this.height);
  }
}
