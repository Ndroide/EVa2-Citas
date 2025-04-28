Evaluación 2: Proyecto Citas
1. Estructura de la Solución
La aplicación se estructura en componentes y servicios utilizando Angular e Ionic como frameworks principales. Las piezas principales son:
•	Responsabilidades:
  o	Servicios: Manejan la lógica de negocios y la persistencia de datos (CitaService).
  o	Componentes: Visualizan información o permiten la interacción del usuario (FormularioCitaComponent, CitaComponent).
  o	Páginas: Agrupan componentes para construir secciones completas de la aplicación (InicioPage, GestionCitasPage, ConfiguracionPage).
•	Relaciones:
  o	Las páginas consumen los servicios para obtener o modificar los datos.
  o	Los componentes hijos (por ejemplo, una cita individual) se comunican con sus componentes padres mediante eventos (@Output).
•	Dependencias:
  o	@capacitor/preferences para almacenar datos de manera persistente.
  o	rxjs para manejar cambios reactivos en las citas.

2. Diseño de la Interfaz Gráfica
La interfaz gráfica se diseñó de manera sencilla, utilizando los componentes visuales de Ionic:
•	Inicio: muestra una cita aleatoria cada vez que se carga la página.
•	Gestión de Citas: contiene un formulario para agregar nuevas citas y una lista donde se pueden visualizar y eliminar citas.
•	Configuración: permite configurar si se desea habilitar o no la eliminación directa de citas desde la pantalla de inicio.
La navegación entre páginas se realiza mediante el router de Angular.

3. Validaciones
Se implementaron validaciones básicas en el formulario de ingreso de citas:
•	El campo "Frase" debe tener al menos 5 caracteres.
•	El campo "Autor" debe tener al menos 2 caracteres.
Estas validaciones aseguran que los datos ingresados tengan una estructura mínima válida antes de ser persistidos.

4. Persistencia de las Configuraciones
Para la configuración (por ejemplo, "permitir eliminar citas en inicio"), se utilizó el plugin @capacitor/preferences:
•	Las preferencias del usuario se almacenan en clave-valor.
•	Se mantienen persistentes incluso si se cierra y vuelve a abrir la aplicación.

5. Persistencia en SQLite
Debido a las dificultades técnicas para integrar SQLite directamente en navegador web mediante WebAssembly (WASM) y jeep-sqlite, se optó por una solución equivalente y más estable para persistir los datos en la plataforma de desarrollo:
•	Se utilizó @capacitor/preferences para guardar las citas como un arreglo JSON.
•	En una aplicación empaquetada para Android o iOS, se podría migrar el mismo modelo hacia SQLite fácilmente si se requiere almacenamiento relacional real.

6. Reflexión Final
Durante el desarrollo del proyecto me encontré con varios desafíos:
•	Problemas:
  o	Integración fallida de Jeep-SQLite en navegador por incompatibilidades de WebAssembly.
  o	Problemas de sincronización al cargar datos antes de que la base de datos estuviera lista.
  o	Diferencias entre persistencia en navegador y persistencia en dispositivos.
•	Cómo puedo mejorar:
  o	Tener un enfoque de prueba de persistencia independiente para Web y Móvil desde el inicio.
  o	Investigar más sobre compatibilidades de plugins en diferentes plataformas.
•	En qué necesito ayuda:
  o	Me gustaría profundizar en el uso real de SQLite en aplicaciones Ionic + Capacitor para entornos de producción.
  o	Mejorar mi dominio de WebAssembly y la configuración de plugins que lo usan.
________________________________________
Desarrollado por: Cristian Céspedes
Fecha: 28 de Abril, 2025
