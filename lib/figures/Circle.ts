import FigureBase from './FigureBase';

/**
 * @description circle's implementation
 */
export default class Circle extends FigureBase {
  constructor(private radius: number) {
    const figureValidator = () => {
      if (radius <= 0) {
        throw new TypeError('Radius must be positive!');
      }
    };
    super(figureValidator);
  }

  getArea(): number {
    // π r²
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    // 2 * π * r
    return 2 * Math.PI * this.radius;
  }

  getDiameter(): number {
    // d = 2 * r
    return 2 * this.radius;
  }
}
