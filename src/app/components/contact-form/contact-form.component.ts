import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  @ViewChild('myForm') myForm: ElementRef<HTMLFormElement>;
  form: FormGroup;
  subscribe: Subscription = new Subscription();
  submitting: boolean = false;
  submissionSuccess = false;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', [Validators.required]],
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  ngOnInit(): void {}

  sendEmail() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.submitting = true;
      const formElement = this.myForm.nativeElement;
      this.subscribe.add(
        this.emailService.sendEmail('service_p3gznon', 'template_ns827dm', formElement, 'JOEr9MraH5z4o-OMO').subscribe({
          next: (res) => {
            this.submitting = false;
            this.submissionSuccess = true;
            this.form.reset();
            setTimeout(() => {
              this.submissionSuccess= false;
            }, 4000);
          },
          error: (err) => {
            this.submitting = false;
          },
        })
      );
    }
  }
}
