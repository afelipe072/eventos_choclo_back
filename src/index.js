import app from './app'

async function main (){
    const port =process.env.PORT || 5000;
    await app.listen(port,()=>{
        console.log('Server on port ' + port);
    });
    
};

main();