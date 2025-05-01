# Angular 19 — Fullstack Application



---

<div align="center">

## 🔧 Continuous Integration


---

## 📦 Docker Images


---

Modern fullstack applications built with Angular 19, Node.js 20.x, and Java 21, featuring a scalable, and production-ready architecture.

## 📦 Tech Stack

![Angular](https://img.shields.io/badge/angular-19-red)
![Node](https://img.shields.io/badge/node-20.x-blue)
![Java](https://img.shields.io/badge/java-21-brightgreen)
![Docker](https://img.shields.io/badge/Docker-24.x-blue?logo=docker)

</div>

---

## 📚 Table of Contents

- [🔧 CI Status](#-ci-status)
- [🌐 Live Demo](#-live-demo)
- [📁 Project Structure](#-project-structure)
- [🛠 Configuration](#-frontend-configuration-angular)
- [🔗 Exposed APIs](#-exposed-apis)
- [⚙️ Quick Start](#️-quick-start)
- [👤 Author](#-author)
- [📚 Documentation](#-documentation)

---




This repository contains a **fullstack web application** using Angular 19 + Node.js or TypeScript with PostgreSQL/MySQL or mocked data.

---

## 🌐 Live Demo

🔗 [Check out the Angular demo](https://www.chooseurlook.com)



---

## 📁 Project Structure

### 🧩 Frontend

- **`frontend-angular`**  
  Angular 19 app (with Routing, Lazy loading, SSR, PWA, SEO)

### 🚀 Backends

- **`backend-java`**  
  

---

## 🔧 Frontend Configuration (Angular)

In `frontend-angular/src/environments/environment.ts`:

```ts
useDatabase: false,
backend: 'http://localhost:3000',
```

| `useDatabase` | Mode                                  |
|---------------|---------------------------------------|
| `false`       | **Mocked** data handled in frontend   |
| `true`        | **Real** data fetched from backend    |

---

## 🛠 Backend Configuration

In `.env` file:

```env
PORT=3000
DB_CLIENT=mock # mock | pg | mysql
```

| `DB_CLIENT` | Data Source           |
|-------------|------------------------|
| `mock`      | Mocked data            |
| `pg`        | PostgreSQL             |
| `mysql`     | MySQL                  |

---

## 🔗 Exposed APIs

| Resource      | URL                                        |
|---------------|---------------------------------------------|
| Continents    | [http://localhost:3000/continents](http://localhost:3000/continents) |
| Cities        | [http://localhost:3000/cities](http://localhost:3000/cities)         |
| Countries     | [http://localhost:3000/countries](http://localhost:3000/countries)   |
| Persons       | [http://localhost:3000/persons](http://localhost:3000/persons)       |
| Professions   | [http://localhost:3000/professions](http://localhost:3000/professions) |

---

## ⚙️ Quick Start

### ▶️ Clone the project

```bash
git clone 
cd angular-app
```

### ▶️ Frontend Angular

```bash
cd frontend-angular
npm install
npm start
# http://localhost:4200
```

### ▶️ Backend Java Spring boot


---



---

## 👤 Author

- **Anil Kumar** –

---

## 📚 Documentation


