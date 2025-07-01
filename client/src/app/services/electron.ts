import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  constructor() { }

  openExternalLink(url: string): void {
    window.electronAPI.openExternal(url)
  }
}
