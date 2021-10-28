import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [RegistrationService],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  public registForm!: FormGroup;
  public successMsg = '';
  public errorMsg = '';
  public fieldTextType: boolean = false;

  private destroyAll: Subject<any> = new Subject<any>();

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.registForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.registrationService.success$
      .pipe(takeUntil(this.destroyAll))
      .subscribe((success) => (this.successMsg = success));

    this.registrationService.error$
      .pipe(takeUntil(this.destroyAll))
      .subscribe((error) => {
        this.errorMsg = error;
        this.registForm.reset();
      });

    this.registForm.valueChanges
      .pipe(takeUntil(this.destroyAll))
      .subscribe(() => {
        if (this.errorMsg.length) this.errorMsg = '';
      });
  }

  onSubmit(): void {
    if (this.registForm.valid) {
      const formData = { ...this.registForm.value };

      this.registrationService.setUserData(formData);
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnDestroy(): void {
    this.destroyAll.next();
    this.destroyAll.complete();
  }
}
