export class ProductListPage {
  private addToCartBtn: string;

  constructor() {
    this.addToCartBtn = ".ajax_add_to_cart_button";
  }

  public addToCart(): void {
    cy.get(this.addToCartBtn).click();
  }
}
