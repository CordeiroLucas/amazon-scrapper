# Amazon Scrapper

## First Steps

### Installing Bun
Windows
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```
Linux/Mac
```bash
curl -fsSL https://bun.sh/install | bash
```
- Reopen the VSCode

### Installing dependencies:
On project folder
```bash
bun install express axios jsdom
```

Any Issue? Visit <a href="https://bun.sh">Bun</a> Website
## To run:

### Run the server
```bash
bun run server.ts
```
### On another terminal run:
```bash
cd frontend
bun run dev
```

### The app will execute on http://localhost:5173/

