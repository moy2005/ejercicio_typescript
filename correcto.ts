/**
 * Sistema de Gestión de Biblioteca
 * Aplicando estándares de TypeScript
 */

// Definición de la estructura de un libro
interface Libro {
  titulo: string;
  autor: string;
  paginas: number;
  disponible: boolean;
}

/**
 * Clase para gestionar una biblioteca de libros
 */
class Biblioteca {
  private libros: Libro[] = [];

  /**
   * Agrega un nuevo libro a la biblioteca
   *  titulo - Título del libro
   *autor - Autor del libro
   *  paginas - Número de páginas
   */
  public agregarLibro(titulo: string, autor: string, paginas: number): void {
    const nuevoLibro: Libro = {
      titulo: titulo,
      autor: autor,
      paginas: paginas,
      disponible: true,
    };

    this.libros.push(nuevoLibro);
  }

  /**
   * Busca un libro por su título
   * titulo - Título del libro a buscar
   *  El libro encontrado o undefined
   */
  public buscarLibro(titulo: string): Libro | undefined {
    return this.libros.find((libro) => libro.titulo === titulo);
  }

  /**
   * Obtiene la lista de libros disponibles
   *  Array de libros disponibles para préstamo
   */
  public mostrarDisponibles(): Libro[] {
    return this.libros.filter((libro) => libro.disponible === true);
  }

  /**
   * Marca un libro como prestado
   *  titulo - Título del libro a prestar
   *  true si se prestó exitosamente, false si no se encontró
   */
  public prestarLibro(titulo: string): boolean {
    const libro = this.buscarLibro(titulo);

    if (libro) {
      libro.disponible = false;
      return true;
    }

    return false;
  }

  /**
   * Marca un libro como devuelto
   *titulo - Título del libro a devolver
   * true si se devolvió exitosamente, false si no se encontró
   */
  public devolverLibro(titulo: string): boolean {
    const libro = this.buscarLibro(titulo);

    if (libro) {
      libro.disponible = true;
      return true;
    }

    return false;
  }

  /**
   * Obtiene todos los libros de la biblioteca
   *  Array con todos los libros
   */
  public obtenerTodosLosLibros(): Libro[] {
    return this.libros;
  }
}

// Uso del sistema
const miBiblioteca = new Biblioteca();

miBiblioteca.agregarLibro('El Quijote', 'Cervantes', 500);
miBiblioteca.agregarLibro('Cien años de soledad', 'García Márquez', 400);
miBiblioteca.agregarLibro('1984', 'George Orwell', 300);

console.log('=== LIBROS DISPONIBLES ===');
console.log(miBiblioteca.mostrarDisponibles());

console.log('\n=== PRESTAR LIBRO: 1984 ===');
const prestado = miBiblioteca.prestarLibro('1984');
console.log(prestado ? 'Préstamo exitoso' : 'Libro no encontrado');

console.log('\n=== LIBROS DISPONIBLES DESPUÉS DEL PRÉSTAMO ===');
console.log(miBiblioteca.mostrarDisponibles());

console.log('\n=== DEVOLVER LIBRO: 1984 ===');
const devuelto = miBiblioteca.devolverLibro('1984');
console.log(devuelto ? 'Devolución exitosa' : 'Libro no encontrado');

console.log('\n=== LIBROS DISPONIBLES DESPUÉS DE LA DEVOLUCIÓN ===');
console.log(miBiblioteca.mostrarDisponibles());