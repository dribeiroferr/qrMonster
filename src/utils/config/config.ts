import * as dotenv from "dotenv"
dotenv.config()

export const EnvironmentalGlobalEnvironments = { 
    stableDiffusionAPIKey: process.env.SDAPIKEY ?? '',
    port1: process.env.PORT ?? 9096,
    port2: process.env.PORT ?? 9097,
    port3: process.env.PORT ?? 9098,
    port4: process.env.PORT ?? 9099
}