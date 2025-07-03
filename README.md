# Full Stack Project - Angular + Electron + Node.js API

The project have three modules:

- `cliente/`: Angular 20 standalone
- `electron/`: Electron
- `server/`: API backend Node.js + Express + TypeScript

---

## Requirements

- Node.js 18 or above
- npm

---

## 1. Backend (server)

### Installation

```bash
cd server
npm install
```

### Development Mode

```bash
npm run dev
```

### Build

```bash
npm run build
npm start
```


### Run tests
```bash
npm run test
```

--- 

## 2. Frontend (cliente - Angular)

### Installation
```bash
cd client
npm install
```     

---

## 3. Desktop (Electron)

### Installation
```bash
cd electron
npm install
npm run start 
```   
> The above command, run the angular project, and waits before opening the electron wrapper


> [!IMPORTANT]  
> Don't forget to start the server before executing the frontend, or it will show empty data.
> If you have any problems in starting the server you can change the provider the file 'client/app/app.config.ts' inside the angular project
```typescript 
    {
      provide: MOVIE_SERVICE,
      useClass: MovieMockService #Use mock or MovieHTTPService ,
    },
``` 
