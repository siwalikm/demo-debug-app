import { API_PATH } from "./constants";

export const getUserList = async () => {
    const response = await fetch(API_PATH);
    const data = await response.json();
    return data;
};


export const getUserDetails = async ({ userId }: { userId: string | undefined }) => {
    const response = await fetch(`${API_PATH}/${userId}`);
    const data = await response.json();
    return data;
};
