"use strict";

// Crea una clase que gestiona cursos online. Cada curso tiene estudiantes registrados.
// Utiliza un Set para asegurarse de que no haya estudiantes duplicados en un curso.

class Curso {
    // El constructor inicializa los atributos del curso.
    // 'nombre' y 'apellido' son para la información personal del instructor, 'edad' es su edad,
    // y 'curso' es el nombre del curso que ofrece.
    // 'estudiantes' es un Set para almacenar los estudiantes únicos registrados en el curso.
    constructor(nombre, apellido, edad, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
        this.estudiantes = new Set(); // Inicializamos un Set vacío para los estudiantes
    }
}

// Función para añadir estudiantes a un curso.
// Verifica si el estudiante ya está registrado. Si no, lo agrega; si ya está, muestra un mensaje.
function agregarEstudiante(curso, estudiante) {
    if (curso.estudiantes.has(estudiante)) {
        console.log(`${estudiante} ya está registrado en el curso ${curso.nombre}.`);
    } else {
        curso.estudiantes.add(estudiante); // Agrega al estudiante si no está registrado
        console.log(`${estudiante} ha sido añadido al curso ${curso.nombre}.`);
    }
}

// Función para eliminar estudiantes de un curso.
// Verifica si el estudiante está en el curso. Si está, lo elimina; si no, muestra un mensaje.
function eliminarEstudiante(curso, estudiante) {
    if (curso.estudiantes.has(estudiante)) {
        curso.estudiantes.delete(estudiante); // Elimina al estudiante del Set
        console.log(`${estudiante} ha sido eliminado del curso ${curso.nombre}.`);
    } else {
        console.log(`${estudiante} no está registrado en el curso ${curso.nombre}.`);
    }
}

// Función para unir los estudiantes de dos cursos diferentes.
// Combina los Sets de estudiantes de ambos cursos en un único Set.
function unirCursos(curso1, curso2) {
    const estudiantesUnidos = new Set([...curso1.estudiantes, ...curso2.estudiantes]);
    return estudiantesUnidos; // Retorna el Set combinado
}

// Función para obtener estudiantes comunes entre dos cursos.
// Filtra los estudiantes que están en ambos cursos usando el método 'filter'.
function obtenerEstudiantesComunes(curso1, curso2) {
    const estudiantesComunes = new Set([...curso1.estudiantes].filter(estudiante => curso2.estudiantes.has(estudiante)));
    return estudiantesComunes; // Retorna un Set con los estudiantes comunes entre los cursos
}

// Función para comprobar si un estudiante está registrado en un curso.
// Usa el método 'has' del Set para verificar si el estudiante está presente.
function estaRegistrado(curso, estudiante) {
    return curso.estudiantes.has(estudiante); // Retorna true si está registrado, false si no
}

// Función para vaciar completamente un curso.
// El método 'clear' del Set elimina todos los elementos del Set de estudiantes.
function vaciarCurso(curso) {
    curso.estudiantes.clear(); // Elimina todos los estudiantes del curso
    console.log(`El curso ${curso.nombre} ha sido vaciado.`);
}

// Ejemplo de uso:

// Creamos dos cursos, uno de JavaScript y otro de Python
const curso1 = new Curso("Curso de JavaScript", "Juan", 25, "JavaScript");
const curso2 = new Curso("Curso de Python", "Maria", 30, "Python");

// Agregamos estudiantes a los cursos
agregarEstudiante(curso1, "Pedro");
agregarEstudiante(curso1, "Ana");
agregarEstudiante(curso1, "Pedro"); // Intentamos agregar un estudiante duplicado

agregarEstudiante(curso2, "Luis");
agregarEstudiante(curso2, "Ana"); // Intentamos agregar un estudiante duplicado
agregarEstudiante(curso2, "Carlos");

// Eliminamos un estudiante del curso de JavaScript
eliminarEstudiante(curso1, "Pedro");

// Unimos los estudiantes de los dos cursos
unirCursos(curso1, curso2);
const estudiantesUnidos = unirCursos(curso1, curso2);
console.log("Estudiantes unidos:", estudiantesUnidos); // Muestra los estudiantes de ambos cursos combinados

// Obtenemos los estudiantes comunes entre los dos cursos
obtenerEstudiantesComunes(curso1, curso2);
const estudiantesComunes = obtenerEstudiantesComunes(curso1, curso2);
console.log("Estudiantes comunes:", estudiantesComunes); // Muestra los estudiantes que están en ambos cursos

// Comprobamos si un estudiante está registrado en un curso específico
estaRegistrado(curso1, "Ana");
const registrado = estaRegistrado(curso1, "Ana");
console.log("¿Ana está registrada en el curso 1?", registrado); // Muestra si "Ana" está en el curso1

// Vaciamos el curso de JavaScript, eliminando todos sus estudiantes
vaciarCurso(curso1);
const estudiantesVacios = curso1.estudiantes.size; // Verifica que el Set de estudiantes está vacío
