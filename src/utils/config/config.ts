import * as dotenv from "dotenv"
dotenv.config()

export default { 
    stableDiffusionAPIKey: process.env.SDAPIKEY ?? '',
}