interface IResponse {
    success: boolean,
    data?: any
    message?: string
}

export const GET_REQUEST = async(url: string, token?: string): Promise<IResponse>=>{
try {
    const request = await fetch(url, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const response = await request.json()
    return response
} catch (error: any) {
    console.log(error)
     return {
            success: false, message: 'An error occurred, please try again.'
        }
}
}


export const POST_REQUEST = async(url: string, data: any, token?: string): Promise<IResponse>=>{
    try {
     const request = await fetch(url, {
        method: 'POST',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await request.json()
    return response 
    } catch (error: any) {
        console.log(error)
        return {
            success: false, message: 'An error occurred, please try again.'
        }
    }
}

export const PUT_REQUEST = async(url: string, data: any, token?: string): Promise<IResponse>=>{
    try {
     const request = await fetch(url, {
        method: 'POST',
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await request.json()
    return response 
    } catch (error: any) {
        console.log(error)
         return {
            success: false, message: 'An error occurred, please try again.'
        }
    }
}