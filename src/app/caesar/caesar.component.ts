import { Component, OnInit } from '@angular/core';
import {CaesarService} from '../caesar.service';

enum Direction { encrypt, decrypt }

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent implements OnInit {
  plaintext = 'Hello, world!';
  encrypted: string;
  key = 13;
  direction = Direction.encrypt;

  constructor(private caesar: CaesarService) { }

  ngOnInit() {
    this.onPlaintextChange();
  }

  onPlaintextChange() {
    this.encrypted = this.caesar.encrypt(this.plaintext, +this.key);
    this.direction = Direction.encrypt;
  }

  onEncryptedChange() {
    this.plaintext = this.caesar.decrypt(this.encrypted, +this.key);
    this.direction = Direction.decrypt;
  }

  onKeyChange() {
    switch (this.direction) {
      case Direction.encrypt:
        this.onPlaintextChange();
        break;
      case Direction.decrypt:
        this.onEncryptedChange();
        break;
    }
  }
}
