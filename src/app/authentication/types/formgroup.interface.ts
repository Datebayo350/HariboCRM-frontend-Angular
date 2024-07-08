import { FormControl } from '@angular/forms';

export interface FormGroupInterface {
  firstName?: FormControl;
  lastName?: FormControl;
  email: FormControl;
  password: FormControl;
}
