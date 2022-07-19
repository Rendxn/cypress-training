export class ProductListPage {
  private addToCartBtn: string;
  private productContainer: string;

  constructor() {
    this.addToCartBtn = "a[title='Add to cart']";
    this.productContainer = ".product-container";
  }

  public addToCart(name: string): void {
    const product = this.findProductByName(name);
    product.find(this.addToCartBtn).click();
  }

  private findProductByName(
    name: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.productContainer).filter(`:contains("${name}")`);
  }
}
