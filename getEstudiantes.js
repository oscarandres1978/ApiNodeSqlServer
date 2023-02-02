const cnx = require('./cnx');

const sql = require('mssql');

async function getEstudiantes(){
    try {
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query('select * from tbl_estudiantes');
        console.log(salida.recordsets);
    } catch (error) {
        console.log(error);
    }
}

getEstudiantes();

module.exports = {
    getEstudiantes : getEstudiantes
}