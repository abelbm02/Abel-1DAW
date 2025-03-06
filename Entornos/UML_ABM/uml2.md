````mermaid
classDiagram
    class Revista {
        +String nombre
        +String formato
        +String precio
    }
    
    class Suscripcion {
        +String tipo
        +double descuento
        +Date fechaInicio
        +Date fechaFin
    }
    
    class Usuario {
        +String nombre
        +String apellidos
        +String direccion
        +String correoElectronico
        +String contrasena
    }

    class Pago {
        +String metodoPago
    }

    class TarjetaDeCredito {
        +String numeroTarjeta
        +Date fechaCaducidad
        +String nombreTitular
    }

    class Paypal {
        +String correoPaypal
        +String nombreTitular
    }

    class DomiciliacionBancaria {
        +String numeroCuenta
        +String nombreTitular
    }

    Revista "1" -- "1..*" Suscripcion : "tiene"
    Usuario "1" -- "1..*" Suscripcion : "se suscribe"
    Usuario "1" -- "1..*" Pago : "realiza"
    Suscripcion "1" -- "1" Revista : "corresponde a"
    Pago <|-- TarjetaDeCredito : "es"
    Pago <|-- Paypal : "es"
    Pago <|-- DomiciliacionBancaria : "es"

```