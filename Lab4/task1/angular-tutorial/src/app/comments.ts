import { Component } from '@angular/core';

@Component({
  selector: 'comments',
  standalone: true,
  template: `
    <h3>Comments Section</h3>
    <p>User1: Angular is amazing!</p>
    <p>User2: I love deferrable views!</p>
  `
})
export class Comments {}
