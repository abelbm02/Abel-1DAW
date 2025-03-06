classDiagram
    class ParqueAtracciones {
        +String nombre
        +List<ZonaTematica> zonas
    }

    class ZonaTematica {
        +String nombre
        +String descripcion
        +String color
        +Hotel hotel
        +List<Atraccion> atracciones
        +List<Restaurante> restaurantes
        +List<Tienda> tiendas
        +List<Espectaculo> espectaculos
    }

    class Hotel {
        +String nombre
        +List<Habitacion> habitaciones
    }

    class Habitacion {
        +String tipo
        +double precio
    }

    class Atraccion {
        +String nombre
        +double estaturaMinima
        +int capacidad
        +double duracion
    }

    class Restaurante {
        +String nombre
        +String horaApertura
        +String horaCierre
        +double precioMedio
    }

    class Tienda {
        +String nombre
        +String horaApertura
        +String horaCierre
    }

    class Espectaculo {
        +String nombre
        +double duracion
        +String tipo
    }

    class Compra {
        +Date fecha
        +List<Entrada> entradas
        +List<Reserva> reservas
    }

    class Entrada {
        +Date fechaUso
    }

    class Reserva {
        +String nombreCliente
        +String apellidosCliente
        +String NIF
        +String contacto
        +Habitacion habitacion
        +Date fechaEntrada
        +Date fechaSalida
    }

    ParqueAtracciones --> ZonaTematica : tiene >
    ZonaTematica --> Hotel : incluye >
    Hotel --> Habitacion : tiene al menos 1 >
    ZonaTematica --> Atraccion : tiene al menos 1 >
    ZonaTematica --> Restaurante : tiene al menos 1 >
    ZonaTematica --> Tienda : tiene al menos 1 >
    ZonaTematica --> Espectaculo : tiene al menos 1 >
    Compra --> Entrada : contiene >
    Compra --> Reserva : puede contener >
    Reserva --> Habitacion : para >
