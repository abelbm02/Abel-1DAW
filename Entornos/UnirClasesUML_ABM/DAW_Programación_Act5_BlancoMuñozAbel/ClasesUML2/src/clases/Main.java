package clases;

public class Main {
    public static void main(String[] args) {
        // Crear una instancia de Curso
        Curso curso = new Curso();

        // Crear instancias de Estudiante
        Estudiante estudiante1 = new Estudiante("Juan", "Gómez", 101, 1, 88);
        Estudiante estudiante2 = new Estudiante("María", "López", 102, 1, 92);
        Estudiante estudiante3 = new Estudiante("Carlos", "Ramírez", 103, 1, 75);

        // Añadir estudiantes al curso
        if(curso.añadir(estudiante1)) {
            System.out.println("Se añadió a " + estudiante1.getNombre());
        }
        if(curso.añadir(estudiante2)) {
            System.out.println("Se añadió a " + estudiante2.getNombre());
        }
        if(curso.añadir(estudiante3)) {
            System.out.println("Se añadió a " + estudiante3.getNombre());
        }

        // Mostrar cantidad de estudiantes en el curso
        System.out.println("Cantidad de estudiantes: " + curso.obtenerCantidad());

        // Calcular y mostrar el promedio de notas
        System.out.println("Promedio de notas: " + curso.calcularPromedio());

        // Eliminar un estudiante según su código
        int codigoEliminar = 102;
        if (curso.eliminar(codigoEliminar)) {
            System.out.println("Estudiante con código " + codigoEliminar + " eliminado.");
        } else {
            System.out.println("No se encontró al estudiante con código " + codigoEliminar);
        }

        // Mostrar la cantidad y promedio de notas después de la eliminación
        System.out.println("Cantidad de estudiantes después de eliminar: " + curso.obtenerCantidad());
        System.out.println("Nuevo promedio de notas: " + curso.calcularPromedio());
    }
}
