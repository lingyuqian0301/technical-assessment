import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  submitContactForm(contact: ContactForm): Observable<any> {
    console.log('Sending HTTP POST request to:', 'https://jsonplaceholder.typicode.com/posts');
    console.log('With data:', contact);

    return this.http.post('https://jsonplaceholder.typicode.com/posts', contact).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error submitting form:', error);
        let errorMessage = 'An error occurred while submitting the form.';

        if (error.status === 403) {
          errorMessage = 'Permission denied. Please try again later.';
        } else if (error.status === 0) {
          errorMessage = 'Network error. Please check your internet connection.';
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
