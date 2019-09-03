import { createConnection } from "net";

/**
 * Este alcance(scope) le dice a Google qué información queremos solicitar
 */
/*const defaultScope = [
    // lista de direcciones a las que accederá
]*/
/**
 * Obtenga una URL que abrirá la página de inicio de sesión de google 
 * y solicitará acceso al alcance proporcionado
 */
function getConnectionUrl(auth){
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent'
        //scope: SCOPE
    });
}

/**
 * Crea la url de google a la que se enviará el cliente
 */
function urlGoogle(){
    const auth = createConnection();
    const url = getConnectionUrl(auth);
    return url;
}