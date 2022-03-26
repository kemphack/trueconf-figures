import FigureBase from './FigureBase';

export default class Triangle extends FigureBase {
  constructor(private a: number, private b: number, private c: number) {
    const figureValidator = () => {
      if (a <= 0 || b <= 0 || c <= 0) {
        throw new TypeError('Triangles` sides must be positive!');
      }
      if (a > b + c || b > a + c || c > a + b) {
        throw new TypeError('Triangle with given sides does not exist!');
      }
    }
    super(figureValidator);
  }

  getArea(): number {
    // half of perimeter
    const s = this.getPerimeter()/2;
    // Geron`s formula
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  getPerimeter(): number {
    // P = a + b + c
    return this.a + this.b + this.c;
  }

  getInscribedRadius(): number {
    // 
    return 2 * this.getArea() / this.getPerimeter();
  }
}
