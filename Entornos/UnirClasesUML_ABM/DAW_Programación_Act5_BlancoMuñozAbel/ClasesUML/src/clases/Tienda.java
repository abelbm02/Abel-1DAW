package clases;

public class Tienda{

	private String nombre;
	private String propietario;
	private int identificadorTributario;
	private  int numeroComputadores;
	private Computador[] computadores;
	

	
	public Tienda(String nombre, String propietario, int identificadorTributario, Computador[] computadores, int capacidad) {
		this.nombre = nombre;
		this.propietario = propietario;
		this.identificadorTributario = identificadorTributario;
		this.computadores = new Computador[capacidad];
		this.numeroComputadores = 0;
	}

	public boolean tiendaLlena(){
		return numeroComputadores == computadores.length;
	}

	public boolean tiendaVacia(){
		return numeroComputadores == 0;
	}

	public void añadir(Computador computador) {
        if (tiendaLlena()) {
            System.out.println("La tienda está llena. No se puede añadir elemento.");
        } else {
            computadores[numeroComputadores] = computador;
            numeroComputadores++;
        }	
	}
	
	public boolean eliminar(String marca) {
		int pos = buscar(marca);
		if (pos < 0 ) {
		return false; 
		}

		for (int i = pos; i < numeroComputadores; i ++) {
		computadores[i] = computadores[i+1];
		}
		numeroComputadores--;
		return true;
	}
	
	public int buscar(String marca){
		for (int i = 0; i < numeroComputadores; i ++) {

			if (computadores[i].getMarca().equalsIgnoreCase(marca))

			return i; 
			}
			return -1; 
	}
	
	public void imprimir(){
		for (int i = 0; i < numeroComputadores; i ++) {
			System.out.println("Computador" + i);
			System.out.println("Marca = " + computadores[i].getMarca());
			System.out.println("Cantidad de memoria = " +
			computadores[i].getCantidadMemoria());
			System.out.println("Características del procesador = " +
			computadores[i].getCaracteristicasProcesador());
			System.out.println("Sistema operativo = " + computadores[i].getSistemaOperativo());
			System.out.println("Precio = " + computadores[i].getPrecio());
		}
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPropietario() {
		return propietario;
	}

	public void setPropietario(String propietario) {
		this.propietario = propietario;
	}

	public int getIdentificadorTributario() {
		return identificadorTributario;
	}

	public void setIdentificadorTributario(int identificadorTributario) {
		this.identificadorTributario = identificadorTributario;
	}

	public int getNumeroComputadores() {
		return numeroComputadores;
	}

	public void setNumeroComputadores(int numeroComputadores) {
		this.numeroComputadores = numeroComputadores;
	}

	public Computador[] getComputadores() {
		return computadores;
	}

	public void setComputadores(Computador[] computadores) {
		this.computadores = computadores;
	}	
}
	

