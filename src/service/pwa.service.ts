import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class PwaService {
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
    //   if (1) {
    //     window.location.reload();
    //   }
    });
  }
}