import { Component } from '@angular/core';

@Component({

  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {

show: boolean =  true;
text: string = "Fortune belongs to the brave.";
author: string = "María Dueñas";
authors: string[] = ["Cortazar", "Vilariño", "Murakami", "Kafka"];
}

