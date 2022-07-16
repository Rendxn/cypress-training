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

const menuContentPage: MenuContentPage = new MenuContentPage();
const productListPage: ProductListPage = new ProductListPage();
const productAddedModalPage: ProductAddedModalPage =
  new ProductAddedModalPage();
const summaryStepPage: SummaryStepPage = new SummaryStepPage();

const signInStepPage: SignInStepPage = new SignInStepPage();

const addressStepPage: AddressStepPage = new AddressStepPage();
const shippingStepPage: ShippingStepPage = new ShippingStepPage();

const paymentStepPage: PaymentStepPage = new PaymentStepPage();
const bankPaymentStepPage: BankPaymentPage = new BankPaymentPage();

const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addToCart();
    productAddedModalPage.goToCheckout();
    summaryStepPage.goToCheckout();

    signInStepPage.signIn("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.goToCheckout();

    shippingStepPage.acceptTerms();
    shippingStepPage.goToCheckout();

    paymentStepPage.payByWire();
    bankPaymentStepPage.confirmOrder();

    orderSummaryPage
      .getConfirmationMessage()
      .should("have.text", "Your order on My Store is complete.");
  });
});
