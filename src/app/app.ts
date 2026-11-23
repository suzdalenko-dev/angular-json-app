import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

/*
TRAGSA ZARAGOZA ENTREVISTA:
  Backend: C# / .NET 8.
  Frontend: Angular, TypeScript y Design System DESY.
  Aplicaciones móviles: Ionic.
  Base de datos: Oracle 19.

  Arquitectura: microservicios.
  Control de versiones y despliegue: Git / DevOps.

Condiciones
Jornada completa: 37,5 horas semanales.
Flexibilidad horaria.
Contrato temporal vinculado al proyecto.

4. ¿Qué podrían preguntarte en una entrevista?
Para una oferta como esta, prepararía especialmente estas preguntas:
1. ¿Cómo analizarías los requisitos de una aplicación antes de empezar a programar?
  Aqui con los requisitos aria una esquma un PDF o los dibujaria en la pizarra ?¿
2. ¿Qué diferencia hay entre requisito funcional y no funcional?
  Funcional = qué hace el sistema.
  No funcional = cómo debe funcionar y bajo qué condiciones.

3. ¿Cómo diseñarías una API REST en .NET 8?
4. ¿Cómo modelarías una base de datos Oracle?
5. ¿Qué es una arquitectura de microservicios?
6. ¿Cómo organizarías la comunicación entre Angular y .NET?
7. ¿Cómo gestionarías los permisos y roles de los usuarios?
  «También tendría en cuenta los permisos sobre recursos concretos. 
  Por ejemplo, que un solicitante solamente pueda consultar sus propias solicitudes, aunque tenga acceso al endpoint de consulta».

8. O sea depeede de como indicamos que incluyamos una clase en el proyecto se va a instanciar de forma diferente ?¿ 
  AddTransient, AddScoped y AddSingleton
public class MiServicio
{
    public Guid Id { get; } = Guid.NewGuid();
}
builder.Services.AddTransient<MiServicio>();  // ?¿?
builder.Services.AddScoped<MiServicio>();     // Cada peticion HTTP crea nueva instancia ?¿
builder.Services.AddSingleton<MiServicio>();  // Se crea una instancia 1 sola vez, si entrarn 1000 usuarios y hacen 1000 peticiones siguen con la misma instancia ?¿



GIT HUB
1. El repositorio comun git clone https://github.com/empresa/GestionAdministrativa.gi
2. Cada desarrollador crea su propia rama
  git switch -c feature/registro
  git switch -c feature/informes
  git switch -c feature/logica-negocio
  git add .
  git commit -m "Añadir registro de usuarios"
  git push -u origin feature/registro   <- hay que indicar a donde voy a subir obligadorio si o no ?¿
  git branch
  git status
  



















*/
