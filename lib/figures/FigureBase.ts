/**
 * @description base class for implementing figures, extend this, when you need it.
 */
export default abstract class FigureBase {
  /**
   * @description use this class to define your own figures, it may be
   * a bit confusing for you to have constructor here, but it's for our safety, so
   * noone will forget to implement figure validation on extending this base class.
   * @param figureValidator {() => any} will be executed on super call, implement
   * your figure validation here, it's very significant part of every figure.
   */
  constructor(figureValidator: () => any) {
    figureValidator();
  }

  /**
   * @description every figure has its own area, implement 
   * @returns returns computed area (square units).
   */
  abstract getArea(): number;


  /**
   * @description computes perimeter of given figure, implement
   * perimeter formulas for this method.
   * @returns returns computed perimeter.
   */
  abstract getPerimeter(): number;
}