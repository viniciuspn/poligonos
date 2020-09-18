const knex = require('knex');

module.exports = {

    poligono: function (database) {
        return knex({
            client: 'sqlite3',
            connection: {
                filename: "./sql/poligono.db"
            },
            useNullAsDefault: true

        });
    }
};
