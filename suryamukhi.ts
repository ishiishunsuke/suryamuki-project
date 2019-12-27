/**
 * Suryamukhi
 * @author Suryamukhi
 */
class BaseSuryamukhi { constructor(){}; }
class Suryamukhi extends BaseSuryamukhi {
  static SON_OF_SUN:string = '太陽の子';
  constructor() {
    super();
    this.init();
  }
  protected init():void {
    console.log( Suryamukhi.SON_OF_SUN );
  }
  static getSuryamukhi( numberOfSuryamukhi:number = 0 ):string {
    return Suryamukhi.SON_OF_SUN;
  }
}
