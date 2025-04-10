import axios from 'axios';
import { IVtexItens } from '../interfaces/vtex';

export async function HttpCustom(): Promise<IVtexItens> {
    const url = 'https://gist.githubusercontent.com/jeffdrumgod/82ce318339d591768356793fed9dd443/raw/033e93a2f9a8b35034121eec637bcdeb0f16c1db/vtex-skujson-example.json';
    
    try {
        const response = await axios.get<IVtexItens>(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}