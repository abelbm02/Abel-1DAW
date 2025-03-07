package clases;

public class Main {
    public static void main(String[] args) {
        // Crear algunos objetos Computador
        Computador comp1 = new Computador("Dell", 8, "Intel Core i5", "Windows 10", 750.0, 0);
        Computador comp2 = new Computador("HP", 16, "Intel Core i7", "Windows 11", 1200.0, 0);
        Computador comp3 = new Computador("Lenovo", 8, "AMD Ryzen 5", "Linux", 650.0, 0);
        Computador comp4 = new Computador("Dell", 12, "Intel Core i9", "Windows 10", 1500.0, 0);
        
        // Crear una tienda con capacidad para 3 computadores
        Tienda tienda = new Tienda("Tech Store", "Juan Pérez", 123456789, null, 3);
        
        // Agregar computadores a la tienda
        tienda.añadir(comp1);
        tienda.añadir(comp2);
        tienda.añadir(comp3);
        
        // Imprimir el estado de la tienda
        System.out.println("=== Estado de la Tienda después de añadir 3 computadores ===");
        tienda.imprimir();
        
        // Intentar añadir otro computador en una tienda llena
        System.out.println("Intentando añadir un cuarto computador:");
        tienda.añadir(comp4);
        
        // Buscar un computador por marca
        String marcaBusqueda = "HP";
        int pos = tienda.buscar(marcaBusqueda);
        if (pos != -1) {
            System.out.println("El computador con marca " + marcaBusqueda + " se encuentra en la posición " + pos);
        } else {
            System.out.println("No se encontró un computador con la marca " + marcaBusqueda);
        }
        
        // Eliminar un computador por marca
        System.out.println("Eliminando computador con marca Dell:");
        boolean eliminado = tienda.eliminar("Dell");
        if (eliminado) {
            System.out.println("Computador eliminado exitosamente.");
        } else {
            System.out.println("No se encontró el computador para eliminar.");
        }
        
        System.out.println("=== Estado final de la Tienda ===");
        tienda.imprimir();
    }
}