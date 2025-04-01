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
bun install
bun run dev
```
Having issues? The node version might be outdated
use 
```bash
node -v
```
If the version is lower then 16, update the node on [NodeJs](https://nodejs.org/en/download)

### The app will execute on [LocalHost:5173](http://localhost:5173/)

