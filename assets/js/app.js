var app = angular.module("MyfirstApp",[]);
app.controller("FirstContoller", ["$scope", "$http", function(m,h) {
  m.nombre = "Clemens";
  m.nuevoComentario = {};
  m.comentarios = [
    {
      comentario: "Esto es una prueba",
      user: "Yo"
    },
    {
      comentario: "Esto no es una prueba",
      user: "Otro yo"
    }
  ];
  m.agregarComentario = function () {
    m.comentarios.push(m.nuevoComentario);
    m.nuevoComentario = {};
  }
}]);
