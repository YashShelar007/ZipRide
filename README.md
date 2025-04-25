# 🚗 ZipRide – Full-Stack Ride-Sharing App

A scalable, real-time ride-booking mobile app with secure Stripe payments, OAuth login, and optimized for 10K+ concurrent users.

### 🌐 Live Demo: Coming Soon 
### 📂 GitHub: https://github.com/YashShelar007/ZipRide

---

## 📍 Problem It Solves

ZipRide streamlines ride-sharing by integrating real-time booking, navigation, and payments into a single mobile-first experience, built for high concurrency and secure transactions.

---

## 🛠 Tech Stack

- **Frontend**: React Native, Expo, TypeScript, Tailwind CSS
- **Backend**: Neon PostgreSQL, Zustand (State)
- **Auth**: Clerk (OAuth with Google, Apple)
- **Payments**: Stripe Webhooks
- **Tooling**: NativeWind, Sentry, GitHub Actions

---

## ✨ Key Features

- 🚘 Real-time ride booking & location-based matching
- 🔒 Secure payment handling via Stripe
- 🪪 OAuth login via Clerk (multi-provider)
- ⚡ Zustand state management for performance
- 📈 Load-tested to 10,000+ concurrent sessions

---

## 🧱 Architecture

```
[Client (React Native/Expo)]
        ↓
[State Mgmt (Zustand)]
        ↓
[APIs (Stripe Webhooks, Clerk Auth)]
        ↓
[NeonDB PostgreSQL]
```

---

## 📽️ Demo

- 📸 Screenshots: [Splash Screen](zip-ride/assets/images/splash.png)

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/YashShelar007/ZipRide.git
cd ZipRide

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start
```

---

## 🧩 Future Enhancements

- 📲 Push Notifications (Expo Push)
- 🧭 Driver-side interface
- ⭐ Rating & Feedback System

---

## 👨‍💻 Author

**Yash Shelar**  
Portfolio: [yashshelar.com](https://yashshelar.com)  
LinkedIn: [linkedin.com/in/shelar-yash](https://linkedin.com/in/shelar-yash)  