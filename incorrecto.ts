// Sistema de biblioteca - CÓDIGO CON ERRORES
// TypeScript y las extensiones mostrarán errores en rojo

var libros=[]

// Error: parámetros sin tipo
function agregarLibro(t,a,p) {
  // Error: objeto sin tipo definido
  libros.push({titulo:t,autor:a,paginas:p,disponible:true})
}

// Error: sin tipo de retorno
function buscarLibro(titulo) {
  // Error: var en lugar de let/const
  for(var i=0;i<libros.length;i++){
    // Error: comparación con ==
    if(libros[i].titulo==titulo) {
      return libros[i]
    }
  }
}

// Error: clase en minúsculas
class biblioteca {
  // Error: método en PascalCase
  MostrarDisponibles() {
    // Error: var
    var disponibles=[]
    // Error: var en loop
    for(var i=0;i<libros.length;i++){
      if(libros[i].disponible==true){
        disponibles.push(libros[i])
      }
    }
    return disponibles
  }
  
  // Error: método inconsistente (minúsculas)
  prestarlibro(titulo) {
    // Error: posible undefined
    var libro=buscarLibro(titulo)
    libro.disponible=false
  }
  
  // Error: nombre con mayúscula inicial
  Devolverlibro(titulo) {
    var libro=buscarLibro(titulo)
    // Error: posible undefined
    libro.disponible=true
  }
}

// Error: var
var mibiblioteca=new biblioteca()

agregarLibro("El Quijote","Cervantes",500)
agregarLibro("Cien años de soledad","García Márquez",400)
agregarLibro("1984","George Orwell",300)

console.log("Libros disponibles:")
console.log(mibiblioteca.MostrarDisponibles())

mibiblioteca.prestarlibro("1984")
console.log("Después de prestar 1984:")
console.log(mibiblioteca.MostrarDisponibles())