const database = require('../../config/database');
const connPoligono = database.poligono('poligono');

module.exports = function () {

       function inseriTriangulo(dados, area) {
        return connPoligono('triangulos')
            .insert({
                triangulos_nome: dados.nome,
                triangulos_base: dados.base,
                triangulos_altura: dados.altura,
                triangulos_area: area,
                triangulos_ponto_a: dados.a,
                triangulos_ponto_b: dados.b,
                triangulos_ponto_c: dados.c
            });
    };


    function inseriRetangulo(dados, area) {
        return connPoligono('retangulos')
            .insert({
                retangulos_nome: dados.nome,
                retangulos_base: dados.base,
                retangulos_altura: dados.altura,
                retangulos_area: area,
                retangulos_reta_a1: dados.a1,
                retangulos_reta_a2: dados.a2,
                retangulos_reta_b1: dados.b1,
                retangulos_reta_b2: dados.b2
            });
    };

    function somaTriangulo() {
        return connPoligono('triangulos')
            .sum('triangulos_area as total');
    };

    function somaRetangulo() {
        return connPoligono('retangulos')
            .sum('retangulos_area as total');
    };




    return {
        inseriTriangulo: inseriTriangulo,
        inseriRetangulo: inseriRetangulo,
        somaTriangulo: somaTriangulo,
        somaRetangulo: somaRetangulo
    };

};