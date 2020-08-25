const knex = require('knex')(require('../config/db-connect'));

exports.add_new_user = (email)=>{
    const recordEmail = (trx) => {
        return knex('users')
            .transacting(trx)
            .insert({
                email,
                date_created: 'now()'
            });
    };

    const logEntry = (trx) => {
        return knex('logs')
            .transacting(trx)
            .insert({
                entry: "Email registered to database: " + email,
            });
    };

    return knex.transaction((trx) => {
        recordEmail(trx)
            .then((resp) => {
                return logEntry(trx);
            })
            .then(trx.commit)
            .catch(trx.rollback);
        });
};

exports.findOneByEmail = (email)=>{
    return knex('users')
    .where({email})
    .select('id', 'first_name', 'last_name', 'email', 'userame', 'isActive');
};

exports.findOne = (id)=>{
    return knex('users')
    .where({'users.id': id})
    .select('id', 'email', 'date_created');
};

exports.updateOne = (id, email)=>{
    return knex('users')
    .where({'leads.id': id})
    .update({
        email,
        date_updated: "now()"
      });
};

exports.deleteOne = (id)=>{
    return knex('users')
    .where({'leads.id': id})
    .del();
};
