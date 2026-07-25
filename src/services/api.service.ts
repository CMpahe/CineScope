import { BASE_URL } from "@/domain/media/media.constants"

const TOKEN = import.meta.env.VITE_REACT_APP_TOKEN

const options = {
        method: 'GET',
        headers: {
            accept: 'application/json', 
            Authorization: `Bearer ${TOKEN}`
        }
    }

export async function request<T> ( endpoint: string): Promise<T> {

    const res = await fetch(`${BASE_URL}${endpoint}`, options)

    if (!res.ok) {
        throw new Error(`Error fetching section data`)
    }

    return res.json()
}