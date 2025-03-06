classDiagram
    class Instituto {
        +String nombre
        +String direccion
        +List<Profesor> profesores
        +List<Alumno> alumnos
    }

    class Persona {
        +String nombre
        +int edad
        +mostrarDatos() void
    }

    class Profesor {
        +double sueldoBruto
        +mostrarDatos() void
    }

    class Tutor {
        +String grupo
        +List<Profesor> equipoEducativo
    }

    class Alumno {
        +String telefonoContacto
        +mostrarDatos() void
    }
