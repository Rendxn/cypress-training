import {
  AddressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModalPage,
  ProductListPage,
  ShippingStepPage,
  SignInStepPage,
  SummaryStepPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let productAddedModalPage: ProductAddedModalPage;
  let summaryStepPage: SummaryStepPage;
  let signInStepPage: SignInStepPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;
  let bankPaymentPage: BankPaymentPage;
  let orderSummaryPage: OrderSummaryPage;
  let expectedMessage: string;
  let username: string;
  let password: string;
  let productName: string;

  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    productAddedModalPage = new ProductAddedModalPage();
    summaryStepPage = new SummaryStepPage();
    signInStepPage = new SignInStepPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
    bankPaymentPage = new BankPaymentPage();
    orderSummaryPage = new OrderSummaryPage();
    expectedMessage = "Your order on My Store is complete.";
    productName = "Faded Short Sleeve T-shirts";
    username = "aperdomobo@gmail.com";
    password = "WorkshopProtractor";
  });

  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addToCart(productName);
    productAddedModalPage.goToCheckout();
    summaryStepPage.goToCheckout();
    signInStepPage.signIn(username, password);
    addressStepPage.goToCheckout();
    shippingStepPage.acceptTerms();
    shippingStepPage.goToCheckout();
    paymentStepPage.payByWire();
    bankPaymentPage.confirmOrder();

    orderSummaryPage
      .getConfirmationMessage()
      .should("have.text", expectedMessage);
  });
});
