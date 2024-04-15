export interface IPost {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}


export  function getPosts(): Promise<IPost[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json as IPost[])
    .catch(error => { console.error('Error:', error); return []})
    
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // return await response.json();
}

