import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  mail: string = 'hannahisnotstr8@gmail.com';

  sendMail(date: Date, time: Date): Promise<void> {
    return emailjs.send(
      'service_kfwiy1w',
      'template_llavjvc',
      {
        name: 'Hannah',
        email: this.mail,
        message: `Datum: ${date}, Zeit: ${time}`
      },
      'CKc7M09r5UxkK6GH_'
    ).then(() => {});
    }
}
