export interface AuthenticationStateInterface {
  userLoggedIn: boolean;
  displayLoginForm: boolean;
  authFormIsSubmitted: boolean;
  authFormIsSubmitting: boolean;
  [key: string]: any;
}
