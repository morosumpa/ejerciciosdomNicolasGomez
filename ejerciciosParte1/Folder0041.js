let tablapadre = document.getElementById('tabla');

// Verificar si elem.lastChild.nextSibling siempre es null
let lastChildNextSiblingIsNull = tablapadre.lastChild.nextSibling === null;
console.log('elem.lastChild.nextSibling siempre es null:', lastChildNextSiblingIsNull);

// Verificar si elem.children[0].previousSibling siempre es null
let firstChildPreviousSiblingIsNull = tablapadre.children[0].previousSibling === null;
console.log('elem.children[0].previousSibling siempre es null:', firstChildPreviousSiblingIsNull);
/*deberia ser simpre null debido al ser el elemento mas anterior pero en este caso y me parece curioso da 
false ya que al poner el comentario en el html este lo detecta como elemento anterior por eso da false*/