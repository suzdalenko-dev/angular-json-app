Archivo | Situación actual
--- | ---
src/app/app.ts | Componente principal creado
src/app/app.html | Plantilla enorme de bienvenida de Angular
src/app/app.routes.ts | Rutas vacías
src/app/app.config.ts | Configuración básica del router
package.json | Angular 21.2.0 y TypeScript 5.9

POSTS:  https://jsonplaceholder.typicode.com/posts
  
Utilizamos:  
1. Componentes. (ng g c posts)
2. Servicios.  
3. HTTP y consumo de API REST.  
4. Interfaces TypeScript.  
5. Rutas y parámetros.  
6. Directivas y presentación de datos.  


angular-json-app  
│  
└── src/app/  
    ├── app.ts             ← Lógica principal  
    ├── app.html           ← Listado de posts  
    ├── app.css            ← Estilos  
    ├── app.routes.ts      ← Navegación  
    │  
    └── post-detail/       ← Detalle de cada publicación  
        ├── post-detail.ts  
        ├── post-detail.html  
        └── post-detail.css  