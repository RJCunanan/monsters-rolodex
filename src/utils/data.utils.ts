// Generic getter function
export const getData = async <T>(url: string): Promise<T> => {
    // Get the response from the passed in url
    const response = await fetch(url);

    // Convert the response into JSON format and return it
    return await response.json();
}