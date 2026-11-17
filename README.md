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


Recordamos Angular:  
1  
Componentes y comunicación  

Profundizamos en:  
- @Input y @Output (o la nueva sintaxis input() y output()).  
- Componentes padre e hijo.  
- Ciclo de vida: ngOnInit, ngOnDestroy.  
- Separación entre presentación y lógica.  
     
2  
TypeScript  
  
Es fundamental para trabajar profesionalmente con Angular:  
- Interfaces y tipos.  
- Clases, herencia y genéricos.  
- Tipos string, number, boolean, any, unknown.  
- Tipos de retorno y funciones.  
- Promise frente a Observable.   

3  
Angular Router  
  
Aplicaciones con distintas páginas:  
- Rutas y parámetros.  
- Navegación entre páginas.  
- Rutas protegidas (Guards).  
- Carga diferida (Lazy Loading).  
Por ejemplo: /login, /dashboard, /usuarios, /informes.  

4  
Formularios  
  
Importante en aplicaciones administrativas:  
- Formularios reactivos (ReactiveFormsModule).  
- Validaciones.  
- Campos obligatorios.  
- Mensajes de error.  
- Formularios de alta y edición.  

5  
RxJS y Observables  
  
Es uno de los temas más importantes para Angular:  
- Qué es un Observable.  
- subscribe().  
- pipe().  
- map, filter, switchMap, catchError.  
- Cancelación y combinación de peticiones HTTP.  
Ya has utilizado HTTP, pero seguramente todavía no has profundizado en RxJS.  

6  
Autenticación y seguridad  
- Login contra una API.  
- JWT y almacenamiento de tokens.  
- Interceptores HTTP.  
- Guards para proteger páginas.  
- Gestión de sesión y cierre de sesión.  
Importante: Angular controla la interfaz y la navegación; la autorización real debe comprobarla el backend.  

7  
Arquitectura de aplicaciones  
- Organización por funcionalidades.  
- Servicios compartidos.  
- Modelos e interfaces.  
- Componentes reutilizables.  
- Gestión del estado con Signals y servicios.  
- Configuración de entornos y compilación.  

8  
Testing y calidad  
- Pruebas unitarias de componentes y servicios.  
- Pruebas de integración.  
- Depuración con DevTools.  
- Tratamiento de errores.  
- Accesibilidad y diseño adaptable.  
  
    
