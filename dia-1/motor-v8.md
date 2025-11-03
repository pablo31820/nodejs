# Motor V8

**V8** es el motor de JavaScript de código abierto desarrollado por Google, escrito en C++. Compila JavaScript directamente a código máquina nativo antes de ejecutarlo, lo que lo hace extremadamente rápido.

## Proceso de Optimización y Deoptimización

V8 usa un **compilador de múltiples niveles**:

### 1. Ignition (Intérprete)
- Primera ejecución del código genera bytecode
- Ejecución rápida inicial pero no optimizada

### 2. TurboFan (Compilador Optimizador)
- Monitorea el código "caliente" (que se ejecuta frecuentemente)
- Recopila información de tipos durante la ejecución
- Genera código máquina altamente optimizado basado en suposiciones

### 3. Deoptimización
- Si las suposiciones del optimizador fallan (ej: cambio de tipo de variable)
- V8 **desoptimiza** y vuelve al bytecode de Ignition
- Permite que el código siga ejecutándose correctamente, aunque más lento

**Ejemplo**: Si una función siempre recibe números, TurboFan optimiza para números. Si luego recibe un string, se deoptimiza.

## Exploradores que usan V8

- **Google Chrome**
- **Microsoft Edge** (desde 2020)
- **Opera**
- **Brave**
- **Vivaldi**

## Alternativas a Node.js

### 1. Deno
Creado por el mismo autor de Node.js (Ryan Dahl), usa V8 pero con TypeScript nativo y mejor seguridad.

### 2. Bun
Runtime muy rápido que usa JavaScriptCore (motor de Safari) en lugar de V8.

### 3. GraalVM
Plataforma políglota que puede ejecutar JavaScript y otros lenguajes.

## Principal diferencia: Node vs Exploradores

### Entorno de ejecución

**Exploradores:**
- V8 se integra con APIs del navegador
- DOM, Window, fetch del navegador, localStorage, etc.

**Node.js:**
- V8 se integra con APIs del sistema operativo
- fs para archivos, http para servidores, process, etc.

### Resumen

**Mismo motor (V8), diferente contexto**. Los exploradores tienen acceso al DOM y APIs web, mientras que Node tiene acceso al sistema de archivos y capacidades de servidor.
