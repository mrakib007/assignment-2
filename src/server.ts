import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main(){
    try{
        app.listen(config.port,()=>{
            console.log(`App listening on port ${config.port}`);
        })
    }
}