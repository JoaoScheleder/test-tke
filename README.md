# Projeto Fullstack - Angular + Electron + Node.js API

Este projeto é composto por três módulos:

- `cliente/`: Aplicação frontend Angular 20 standalone
- `electron/`: Aplicação desktop (Electron) que embala o frontend
- `server/`: API backend Node.js + Express + TypeScript

---

## Requisitos

- Node.js 18 ou superior
- npm

---

## 1. Backend (server)

### Instalação

```bash
cd server
npm install
```

### Rodar em modo desenvolvimento

```bash
npm run dev
```

### Rodar build para produção

```bash
npm run build
npm start
```


### Rodar testes
```bash
npm run test
```

--- 

## 2. Frontend (cliente - Angular)

### Instalação
```bash
cd client
npm install
```     

---

## 3. Desktop (Electron)
```bash
cd electron
npm install
npm run start 
```   
> Isso executa o Angular (cliente/) e aguarda o frontend estar disponível para abrir o Electron