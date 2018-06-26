import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export class UserService {
  userActivated = new Subject();
}
