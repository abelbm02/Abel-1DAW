package clases;

public class Curso {
    
    private Estudiante[] estudiantes;
    private int contador; // Indica la cantidad de estudiantes actuales
    
    public Curso() {
        this.estudiantes = new Estudiante[100];
        this.contador = 0;
    }
    
    public boolean añadir(Estudiante estudiante) {
        if (contador < estudiantes.length) {
            estudiantes[contador] = estudiante;
            contador++;
            return true;
        }
        return false; // No se pudo añadir, curso lleno
    }
    
    public boolean eliminar(int codigoEstudiante) {
        int indiceEliminar = -1;
        // Buscar el estudiante con el código dado
        for (int i = 0; i < contador; i++) {
            if (estudiantes[i].getCodigoEstudiante() == codigoEstudiante) {
                indiceEliminar = i;
                break;
            }
        }
        if (indiceEliminar == -1) {
            return false; // No se encontró el estudiante
        }
        // Desplazar elementos para llenar el hueco
        for (int i = indiceEliminar; i < contador - 1; i++) {
            estudiantes[i] = estudiantes[i + 1];
        }
        estudiantes[contador - 1] = null; // Opcional: liberar la última posición
        contador--;
        return true;
    }
    
    public float calcularPromedio() {
        if (contador == 0) {
            return 0;
        }
        int sumaNotas = 0;
        for (int i = 0; i < contador; i++) {
            sumaNotas += estudiantes[i].getNotaFinal();
        }
        return (float) sumaNotas / contador;
    }
    
    public int obtenerCantidad() {
        return contador;
    }
}

