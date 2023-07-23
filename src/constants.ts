// export const API_PATH = "https://my-json-server.typicode.com/siwalikm/demo-proxyman-app/users/"
export const API_PATH = "https://my-json-server.typicode.com/siwalikm/demo-proxyman-app/users-v2/"

export interface User {
    id: number | string;
    name: string;
    avatar: string;
    hobbies: Array<string>;
    theme: string;
}