import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  serviceId: string = environment.serviceId;
  templateId: string = environment.templateId;
  publicKey: string = environment.publicKey;
  constructor() {}

  sendEmail(
    data: HTMLFormElement,
  ): Observable<void> {
    return new Observable((observer) => {
      emailjs
        .sendForm(this.serviceId, this.templateId, data, {
          publicKey: this.publicKey,
        })
        .then(
          () => observer.next(),
          (error) => observer.error(error as EmailJSResponseStatus)
        );
    });
  }
}
