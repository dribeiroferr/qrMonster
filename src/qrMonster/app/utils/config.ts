import axios, { Axios } from "axios";
import { EnvironmentalGlobalEnvironments } from "../../../utils/config/config";

export const AxiosInstance: Axios = axios.create({
    baseURL: 'https://stablediffusionapi.com/api/v5/controlnet', 
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${EnvironmentalGlobalEnvironments.stableDiffusionAPIKey}`
    }, 
    
})