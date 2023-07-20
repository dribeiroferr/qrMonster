import * as dotenv from "dotenv"
dotenv.config()

export const EnvironmentalGlobalEnvironments = { 
    stableDiffusionAPIKey: process.env.SDAPIKEY ?? '',
    port: process.env.PORT ?? 9096
}