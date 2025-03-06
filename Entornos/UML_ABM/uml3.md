````mermaid
classDiagram
    class Mensaje {
        # String remitente
        # String destinatario
        # String texto
        +Mensaje(String remitente, String destinatario, String texto)
        +void enviarMensaje()
        +void visualizarMensaje()
        +String getRemitente()
        +String getDestinatario()
        +String getTexto()
        +void setRemitente(String remitente)
        +void setDestinatario(String destinatario)
        +void setTexto(String texto)
    }

    class MensajeTexto {
        +MensajeTexto(String remitente, String destinatario, String texto)
    }

    class MensajeInstantaneo {
        # String emoticones
        # String multimedia
        +MensajeInstantaneo(String remitente, String destinatario, String texto, String emoticones, String multimedia)
        +String getEmoticones()
        +String getMultimedia()
        +void setEmoticones(String emoticones)
        +void setMultimedia(String multimedia)
    }

    class MensajeConfiguracion {
        # String archivoConfiguracion
        +MensajeConfiguracion(String remitente, String destinatario, String texto, String archivoConfiguracion)
        +String getArchivoConfiguracion()
        +void setArchivoConfiguracion(String archivoConfiguracion)
    }

    class AplicacionMensajeria {
        +void enviarMensaje()
        +void visualizarMensaje()
    }

    class WhatsApp {
        +void confirmarLectura()
        +void borrarMensaje()
    }

    class Telegram {
        +void confirmarLectura()
        +void borrarMensaje()
    }

    Mensaje <|-- MensajeTexto
    Mensaje <|-- MensajeInstantaneo
    Mensaje <|-- MensajeConfiguracion

    AplicacionMensajeria <|.. WhatsApp
    AplicacionMensajeria <|.. Telegram

    MensajeInstantaneo <|-- WhatsApp
    MensajeInstantaneo <|-- Telegram

```