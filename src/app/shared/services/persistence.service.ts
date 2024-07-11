import { Injectable } from '@angular/core';
import { registerActions } from '../../authentication/store/authentication.actions';

@Injectable({
  providedIn: 'root'
})
export class  PersistenceService {
  set(key: string, data: unknown ){
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Localstorage  error =>"', error);
    }
  }

  get(key:string) {
    try {
      const localStorageItem = localStorage.getItem(key);
    return localStorageItem ? JSON.parse(localStorageItem) : null
    }catch (error){
      console.log('Localstorage  error =>"', error);
      return null

    }
  }
}
