# technical-assessment-internship-frontend

This is a frontend assessment to test your Bootstrap skills and Git usage. The project contains a basic HTML skeleton using Bootstrap.

## 🚀 Your Tasks

### ✅ Task 1: Create a Responsive Navigation Bar
- Add a Bootstrap navbar at the top of the page.
- It should collapse into a hamburger menu on smaller screens.
- Use the Bootstrap classes only (no custom CSS).
- Add links like: Home, About, Contact.

### ✅ Task 2: Build a Responsive Card Grid
- Below the navbar, create a section with 3 cards in a responsive grid.
- Each card should have an image, title, description, and a button.
- Use Bootstrap's grid system (e.g., `col-md-4`) and `card` components.

### ✅ Task 3: Add a Contact Form
- At the bottom of the page, add a contact form with:
  - Name, Email, Message fields
  - A submit button
- Use Bootstrap's form components (e.g., `form-floating`, `form-control`)

### ✅ Task 4: Add a Modal
- Create a modal that shows the Name, Email, Message fields after the user clicks on the submit button

### ✅ Task 5 (Optional): Add an Angular application
- Create a Single Page Application (SPA) with Angular that contains a form, validator and business logic. Include an example that makes HTTP calls.

## 🧪 Submission Instructions

1. Fork/Clone this repository.
2. Complete the tasks above.
3. Commit each task **in a separate commit**:
   - Commit 1: Add Navbar
   - Commit 2: Add Card Grid
   - Commit 3: Add Contact Form
   - Commit 4: Add modal
   - Commit 5: Add Angular application
4. Submit your GitHub repository link in a PDF document through the link provided in the email.

Bonus: Use Bootstrap utilities to improve spacing and layout (e.g., `mt-4`, `p-3`, `text-center`).

Good luck!

## 📱 Angular SPA Implementation

### Overview
The Angular application is a Single Page Application (SPA) that demonstrates form handling, validation, and HTTP communication. It's located in the `angular-app` directory.

### Features
1. **Form Component**
   - Reactive form implementation using `FormBuilder`
   - Real-time validation for all fields
   - Custom error messages
   - Loading state during submission
   - Success/error feedback

2. **Form Validation**
   - Name: Required field
   - Email: Required + valid email format
   - Message: Required field
   - Visual feedback for invalid fields
   - Disabled submit button when form is invalid

3. **HTTP Communication**
   - Service-based architecture
   - POST request to JSONPlaceholder API(mock api only)
   - Error handling for:
     - Network errors
     - Permission errors (403)
     - Other HTTP errors
   - Console logging for debugging

### Technical Implementation

#### Contact Service (`contact.service.ts`)
```typescript
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  submitContactForm(contact: ContactForm): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', contact)
      .pipe(
        catchError(this.handleError)
      );
  }
}
```

#### Form Component (`contact-form.component.ts`)
- Standalone component
- Reactive form implementation
- Bootstrap styling
- Loading states
- Error handling

### Running the Application
1. Navigate to the angular-app directory:
   ```bash
   cd angular-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Access the application at `http://localhost:4200`

### Testing the HTTP Call
1. Open browser Developer Tools (F12)
2. Go to Network tab
3. Fill out and submit the form
4. Observe the POST request to `https://jsonplaceholder.typicode.com/posts`
5. Check the request payload and response

### Error Handling
The application handles various error scenarios:
- Network connectivity issues
- API permission errors
- Invalid form submissions
- Server errors


## 🎨 Bootstrap Utilities Used

### Spacing Utilities
- `mt-5`: Top margin for main container
- `mb-3`: Bottom margin for form groups
- `mb-4`: Bottom margin for card titles
- `p-3`: Padding for card bodies
- `ms-auto`: Margin start auto for navbar items

### Layout Utilities
- `container`: Main wrapper for content
- `container-fluid`: Full-width container for navbar
- `row`: Grid row wrapper
- `col-md-8`: 8-column width on medium screens
- `col-md-4`: 4-column width on medium screens
- `offset-md-2`: 2-column offset on medium screens

### Text Utilities
- `text-center`: Center-aligned text
- `text-muted`: Muted text color
- `fw-bold`: Bold font weight

### Display Utilities
- `d-grid`: Grid display for buttons
- `d-flex`: Flex display
- `d-none`: Hide elements
- `d-md-block`: Block display on medium screens

### Component-Specific Utilities
- `card`: Card component styling
- `form-control`: Form input styling
- `btn-primary`: Primary button styling
- `navbar-light`: Light navbar theme
- `bg-light`: Light background color

### Responsive Utilities
- `col-12`: Full width on mobile
- `col-md-4`: 4 columns on medium screens
- `col-md-8`: 8 columns on medium screens
- `navbar-expand-lg`: Expand navbar on large screens

### Form Utilities
- `form-floating`: Floating label inputs
- `form-label`: Form label styling
- `invalid-feedback`: Validation error messages
- `is-invalid`: Invalid input state

### Alert Utilities
- `alert`: Alert component
- `alert-success`: Success alert styling
- `alert-danger`: Error alert styling



