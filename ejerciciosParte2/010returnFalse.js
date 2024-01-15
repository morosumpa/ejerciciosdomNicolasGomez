/*010returnFalse.html/.js:¿Por qué en el código de abajo return false no funciona?
<script>
function handler() {
alert( "...");
return false;
}
</script>;
<a href="https://w3.org" onclick="handler()">el navegador irá a w3.org</a>*/

/*este enunciado tiene un problema en la seccion <a href="https://w3.org" onclick="handler()">el navegador irá a w3.org</a>
al usar onclick="handler() simplemente asi no tendra en cuenta el contexto en el que se encuantra la funcion, esto se solucionaria con la
sentencia asi: <a href="https://w3.org" onclick="return handler()">w3.org</a> ya que esto estás diciendo explícitamente al navegador que utilice 
el valor de retorno de la función como el resultado del evento*/