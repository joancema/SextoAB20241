

export interface IPost {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}



export async  function  httpClient<Type>( url:string ): Promise<Type>
{
    try {
        const data= await  fetch('https://jsonplaceholder.typicode.com/posts')
        return data.json()
    
    } catch (error) {
        console.error('Problemas al conectarse con el servidor')
        throw error;
    }
    
// export {httpClient}

    // fetch('https://jsonplaceholder.typicode.com/posts').then(data=>{
    //     return data.json()
    // })
    // .catch(err=>{
    //     return err;
    // })
    
}

