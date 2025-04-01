# Amazon Scraper

## 📌 Overview  
This project is a web scraper for Amazon, built using Bun, Express, Axios, and JSDOM. It extracts product information efficiently.

## 🚀 Getting Started  

### 1️⃣ Install Bun  
#### **Windows**  
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```
####  **Linux/macOS**
```bash
curl -fsSL https://bun.sh/install | bash
```
After installation, restart VS Code.

### 2️⃣ Install dependencies
Navigate to the project folder and run:
```bash
bun install express axios jsdom
```

If you encounter issues, check the <a href="https://bun.sh">Bun Documentation</a>.

### 3️⃣ Running the Project
#### **Start the Server**
```bash
bun run server.ts
```

#### **Start the Frontend**
Open a new terminal run:
```bash
cd frontend
bun install
bun run dev
```

## 🛠 Troubleshooting

- If the app doesn't run, check your Node.js version
```bash
node -v
```
If it's **lower then 16**, update NodeJs [here](https://nodejs.org/en/download).


## 🌍 Accesssing the App
Once running, the application will be available at:
👉 [localHost:5173](http://localhost:5173/)