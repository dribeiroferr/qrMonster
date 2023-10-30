import * as dotenv from "dotenv"
dotenv.config()

export const EnvironmentalGlobalEnvironments = { 
    stableDiffusionAPIKey: process.env.SDAPIKEY ?? 'vTCjLJ3Bgf64srH2LYKzo2cUwUEQDrHbvhQL4L4ee9UDawJLrtJRPBRy1LG8',
    port1: parseInt(process.env.PORT1 ?? '9096'),
    port2: parseInt(process.env.PORT2 ?? '9097'),
    port3: parseInt(process.env.PORT3 ?? '9098'),
    port4: parseInt(process.env.PORT4 ?? '9099')
}