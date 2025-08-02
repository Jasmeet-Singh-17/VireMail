# 📧 VireMail – Secure Email Landing Page

A modern, responsive landing page built with **React**, **Next.js**, and **Bootstrap** for **VireMail**, a fictional privacy-first email service. This component includes a complete layout with forms, platform-specific icons, download section, and UI-ready features for production.

---

## 🛠 Technologies Used

- **Next.js** (React Framework)
- **React Icons / Font Awesome**
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

### ✅ App Download Section
- Platform-specific icons using **Font Awesome**:
  - 🪟 Windows (`faWindows`)
  - 🍎 Mac & iOS (`faApple`)
  - 🤖 Android (`faAndroid`)
- Each box has icon, heading, and a short feature description

---

## 📦 Folder Structure Suggestion

```
components/
  └── Home.jsx
  └── Features.jsx
  └── Download.jsx
pages/
  └── index.jsx
public/
  └── img/privacy.jpg
styles/
  └── globals.css / custom.scss
```

---

## 📲 Font Awesome Icons Used

Install Font Awesome packages:

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
```

In `_app.js`:

```js
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
```

Then in your components:

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons';
```

---

## 🧪 Future Enhancements

- Add animations or scroll-based interactions
- Integrate working email form via backend
- Include real user testimonials or case studies

---

