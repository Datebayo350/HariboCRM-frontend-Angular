import { FormControl } from '@angular/forms';

export interface FormGroupInterface {
  firstName?: FormControl;
  lastName?: FormControl;
  username?: FormControl;
  email: FormControl;
  password: FormControl;
}
