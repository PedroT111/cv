import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  sendEmail(
    serviceId: string,
    templateId: string,
    data: HTMLFormElement,
    publicKey: string
  ): Observable<void> {
    return new Observable((observer) => {
      emailjs
        .sendForm(serviceId, templateId, data, {
          publicKey: publicKey,
        })
        .then(
          () => observer.next(),
          (error) => observer.error(error as EmailJSResponseStatus)
        );
    });
  }
}
