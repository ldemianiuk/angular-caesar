import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaesarService {

  constructor() { }

  encrypt(text: string, key = 13): string {
    const upperCaseText = text.toUpperCase();
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const letterNumber = upperCaseText.charCodeAt(i) - 'A'.charCodeAt(0);
      if (letterNumber < 0 || letterNumber > 25) {
        result += text.charAt(i);
      } else {
        const encryptedNumber = (letterNumber + key) % 26;
        result += String.fromCharCode(text.charCodeAt(i) + encryptedNumber - letterNumber);
      }
    }
    return result;
  }

  decrypt(input: string, key: number) {
    return this.encrypt(input, 26 - key);
  }
}
