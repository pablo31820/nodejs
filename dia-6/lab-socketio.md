# Laboratorio: WebSockets con Socket.io

## Objetivo
Implementar comunicación en tiempo real entre servidor Express y cliente HTML usando Socket.io.

## Configuración inicial

### 1. Crear proyecto e instalar dependencias

```bash
npm init -y
npm install express socket.io
```

### 2. Configurar package.json

Añadir `"type": "module"` para usar ES modules:

```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js"
  }
}
```

## Implementación del servidor

### server.js

```javascript
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get('/', (req, res) => {
  res.sendFile(new URL('./public/index.html', import.meta.url).pathname);
});

io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);

  socket.on('mensaje', (data) => {
    io.emit('mensaje', {
      id: socket.id,
      texto: data.texto,
      timestamp: new Date().toISOString()
    });
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });
});

httpServer.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
```

## Implementación del cliente

### public/index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Socket.io</title>
  <style>
    body { font-family: Arial; max-width: 600px; margin: 20px auto; }
    #mensajes { 
      border: 1px solid #ddd; 
      height: 400px; 
      overflow-y: auto; 
      padding: 10px;
      margin-bottom: 10px;
    }
    .mensaje { 
      margin: 5px 0; 
      padding: 8px;
      background: #f0f0f0;
      border-radius: 4px;
    }
    #formulario { display: flex; gap: 10px; }
    #input { flex: 1; padding: 8px; }
    button { padding: 8px 16px; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Chat en tiempo real</h1>
  <div id="mensajes"></div>
  <form id="formulario">
    <input id="input" autocomplete="off" placeholder="Escribe un mensaje...">
    <button type="submit">Enviar</button>
  </form>

  <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
  <script>
    const socket = io('http://localhost:3000');
    const form = document.getElementById('formulario');
    const input = document.getElementById('input');
    const mensajes = document.getElementById('mensajes');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value) {
        socket.emit('mensaje', { texto: input.value });
        input.value = '';
      }
    });

    socket.on('mensaje', (data) => {
      const div = document.createElement('div');
      div.className = 'mensaje';
      div.innerHTML = `<strong>${data.id}:</strong> ${data.texto}`;
      mensajes.appendChild(div);
      mensajes.scrollTop = mensajes.scrollHeight;
    });
  </script>
</body>
</html>
```

## Estructura del proyecto

```
proyecto/
├── server.js
├── package.json
└── public/
    └── index.html
```

## Ejecución

```bash
npm start
```

Abrir `http://localhost:3000` en varios navegadores para probar el chat en tiempo real.

## Conceptos clave

- **io.on('connection')**: Detecta cuando un cliente se conecta
- **socket.emit()**: Envía evento a un cliente específico
- **io.emit()**: Envía evento a todos los clientes conectados
- **socket.on()**: Escucha eventos del servidor/cliente

## Referencias

- [Socket.io Documentation](https://socket.io/docs/v4/)
- [Express.js Guide](https://expressjs.com/)
- [WebSockets MDN](https://developer.mozilla.org/es/docs/Web/API/WebSockets_API)
