# 🔐 Live Password Strength Checker

A React-based Password Strength Checker that provides real-time feedback on password security. The application evaluates the password as the user types, displays a color-coded strength indicator, generates strong password suggestions, and allows users to toggle password visibility.

---

## 🚀 Features

### ✅ Real-Time Password Strength Analysis
Evaluates passwords based on:

- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Numbers (0-9)
- Special characters (~!@#$%^&*()_)
- Password length

### 🎨 Color-Coded Strength Indicator

| Strength | Color |
|-----------|--------|
| Weak | 🔴 Red |
| Medium | 🟡 Yellow |
| Strong | 🟢 Green |

### 😎 Visual Feedback

Uses icons to indicate password strength:

- ⚠️ Weak Password
- 🛡️ Medium Password
- ✅ Strong Password

### 👁️ Show / Hide Password

Users can toggle password visibility using an eye icon inside the input field.

### 🔑 Strong Password Generator

Generates a secure random password containing:

- Uppercase letters
- Lowercase letters
- Numbers
- Special characters

### ⚡ Live Updates

Password strength updates instantly as the user types.

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- CSS3
- React Hooks (`useState`)
- React Icons

---

## 📂 Project Structure

```text
src/
│
├── App.jsx
├── App.css
├── assets/
│
└── main.jsx
