export interface IPost {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}
export async function fetchData<Type>(url: string): Promise<Type> {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
