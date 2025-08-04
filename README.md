# 📧 WireMail – Secure Email Landing Page

A modern, responsive landing page built with **React**, **Next.js**, and **Bootstrap** for **WireMail**, a fictional privacy-first email service. This component includes a complete layout with accordion FAQ, moving testimonial carousel, download section, and feature highlights.

---

## 🛠 Technologies Used

- **Next.js** (React Framework)
- **React Slick** (carousel)
- **Font Awesome**
- **Bootstrap 5**
- **Custom CSS / SCSS**
- **next/image** for optimized image rendering

---

## 🚀 Features

### ✅ Navigation Bar
- Responsive and collapsible
- Navigation links: `Features`, `Products`, `Resources`, `Pricing`, `About`, `Support`
- Right-aligned buttons: `Sign In`, `Download`

---

### ✅ Hero Section
- Eye-catching gradient headline
- Supporting paragraph and prominent **"Create Free Account"** CTA
- Side sign-up form:
  - Radio buttons (Business / Personal)
  - Input fields for name, email, password, phone
  - Terms agreement checkbox
  - Submit button with arrow icon

---

### ✅ Welcome Sections (x2)
- Visual-left layout with `next/image` optimized images
- Strong privacy-oriented messaging
- Sections split by **horizontal white line** for visual clarity

---

### ✅ Feature Highlights
- Titled **"Features We Provide"**
- 4 security-focused feature boxes:
  - 🔐 Zero-Knowledge Encryption
  - 🔐 Two-Factor Authentication
  - 🔐 Self-Destructing Emails
  - 🔐 Password Protection
- CTA Button: **"See All Features"** (centered)

---

### ✅ FAQ Section
- Accordion-based UI using Bootstrap
- Dark-themed cards with smooth transitions
- Questions include:
  - What is WireMail?
  - How is WireMail different from other email services?
  - Is WireMail really free?
  - How it protects data?

---

### ✅ User Feedback Carousel
- Autoplaying testimonial slider using **react-slick**
- Displays 3 reviews per view, sliding continuously left
- Minimal, centered design for clean user experience

---

### ✅ App Download Section
- Platform-specific icons using **Font Awesome**:
  - 🪟 Windows (`faWindows`)
  - 🍎 Mac & iOS (`faApple`)
  - 🤖 Android (`faAndroid`)
- Each box includes icon, heading, and a short feature description

---

## 📦 Folder Structure Suggestion

```
components/
  └── Home.jsx
  └── Features.jsx
  └── Download.jsx
  └── Feedback.jsx
pages/
  └── index.jsx
public/
  └── img/privacy.jpg
styles/
  └── globals.css / custom.scss
```

---

## 📲 Font Awesome & React Slick Installation

Install packages:

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core react-slick slick-carousel
```

In `_app.js`:

```js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
```

Then in your components:

```jsx
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons';
```

---

## 🧪 Future Enhancements

- Add animations or scroll-based interactions
- Integrate working email form via backend
- Include real user testimonials or case studies
- Add newsletter integration with Mailchimp or EmailJS

---

## ✅ Status

🟢 Project is complete and UI-ready. Ideal for SaaS email startups, privacy tools, or Next.js landing page learning references.
