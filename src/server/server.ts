import express = require('express');
import path = require('path');

export default class Server {

    public app: express.Application;
    public port: number;

    constructor(puerto: number){
        this.port = puerto;
        this.app = express();
    }
    // Metodo que inicializa una unica instancia del servidor siguiendo el patron Singleton
    static init(port: number){
        return new Server(port);
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');   
        this.app.use(express.static(publicPath));
    }

    start(callback: Function){
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}