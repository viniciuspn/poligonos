const database = require('../../config/database');
const connPoligono = database.poligono('poligono');

module.exports = function () {

       function inseriTriangulo(dados, area) {
        return connPoligono('triangulos')
            .insert({
                triangulo_nome: dados.nome,
                triangulo_base: dados.base,
                triangulo_altura: dados.altura,
                triangulo_area: area
            });
    };


    function inseriRetangulo(dados, area) {
        return connPoligono('retangulos')
            .insert({
                retangulo_nome: dados.nome,
                retangulo_base: dados.base,
                retangulo_altura: dados.altura,
                retangulo_area: area
            });
    };

    return {
        inseriTriangulo: inseriTriangulo,
        inseriRetangulo: inseriRetangulo
    };

};