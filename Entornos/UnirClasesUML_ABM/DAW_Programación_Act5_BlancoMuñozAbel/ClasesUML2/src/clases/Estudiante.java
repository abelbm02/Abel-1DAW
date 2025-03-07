package clases;

public class Estudiante {

	private String nombre;
	private String apellidos;
	private int codigoEstudiante;
	private int numeroSemestre;
	private int notaFinal;
	
	public Estudiante(String nombre, String apellidos, int codigoEstudiante, int numeroSemestre, int notaFinal) {
		super();
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.codigoEstudiante = codigoEstudiante;
		this.numeroSemestre = numeroSemestre;
		this.notaFinal = notaFinal;
	}

	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public int getCodigoEstudiante() {
		return codigoEstudiante;
	}

	public void setCodigoEstudiante(int codigoEstudiante) {
		this.codigoEstudiante = codigoEstudiante;
	}

	public int getNumeroSemestre() {
		return numeroSemestre;
	}

	public void setNumeroSemestre(int numeroSemestre) {
		this.numeroSemestre = numeroSemestre;
	}

	public int getNotaFinal() {
		return notaFinal;
	}

	public void setNotaFinal(int notaFinal) {
		this.notaFinal = notaFinal;
	}


	public int getCodigoEstudiante1() {
		// TODO Auto-generated method stub
		return 0;
	}
}
