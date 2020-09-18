module.exports = function(routeConfig){

    /*     
    * Rotas abertas     
    */
    const openApi = new routeConfig.restifyRoute();
    const server = new routeConfig.restifyRoute();
    /**
     * constantes para rotas do sistema
     */
    const poligonoWeb = require('../oapi/web/poligono/poligonoService.js');   
    
    server.use('/oapi', openApi);
    openApi.get('/teste', function(req, res, next){
        res.send({
            teste: 'Teste'
        });
    });
    openApi.use('/web', poligonoWeb);
   
   server.applyRoutes(routeConfig.server);
};