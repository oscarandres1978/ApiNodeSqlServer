const cnx = {
    user: 'prueba2',
    password: '12345',
    server:'OALWEB',
    database: 'ApiEstudiantes',

    options:{
        trustedconnection : false,
        enableArithAbort : true,
        encrypt: false,
        instancename: 'SQLEXPRESS'
    }

}

module.exports = cnx;