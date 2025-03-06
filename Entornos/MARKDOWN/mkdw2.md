classDiagram
    class Pelicula {
        +String titulo
        +String sinopsis
        +int anio
        +String genero
        +String pais
        +List<Trailer> trailers
        +List<Persona> participantes
    }

    class Trailer {
        +String url
        +int duracion
    }

    class Persona {
        +String nombre
        +String apellidos
        +Date fechaNacimiento
        +String nacionalidad
    }

    class Actor {
    }

    class Director {
    }

    class Productor {
    }

    class Guionista {
    }

    class Editor {
    }

    Pelicula --> Trailer : tiene >
    Pelicula --> Director : al menos 1 >
    Pelicula --> Guionista : al menos 1 >
    Pelicula --> Actor : puede tener >
    Pelicula --> Productor : puede tener >
    Trailer --> Editor : editado por >
    Persona <|-- Actor
    Persona <|-- Director
    Persona <|-- Productor
    Persona <|-- Guionista
    Persona <|-- Editor
