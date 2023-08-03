import { QrCodeGeneratorRequestModelDTO } from "../dtos/interfaces";
import { EnvironmentalGlobalEnvironments } from "../../../../utils/config/config";

export class QrCodeGeneratorRequestModelEntity { 
    public key: string;
    public controlnet_model: string;
    public controlnet_type: string;
    public model_id: string;
    public auto_hint: string;
    public guess_mode: string;
    public prompt: string;
    public negative_prompt: string | null;
    public init_image: string | null;
    public mask_image: string | null;
    public width: string;
    public height: string;
    public samples: string;
    public scheduler: string;
    public num_inference_steps: string;
    public safety_checker: string;
    public enhance_prompt: string;
    public guidance_scale: number;
    public strength: number;
    public lora_model: string;
    public clip_skip: string;
    public tomesd: string;
    public use_karras_sigmas: string;
    public vae: string | null;
    public lora_strength: string | null;
    public embeddings_model: string | null;
    public seed: string | null;
    public webhook: string | null;
    public track_id: string | null;

    constructor(config: QrCodeGeneratorRequestModelDTO){
        this.key = EnvironmentalGlobalEnvironments.stableDiffusionAPIKey;
        this.controlnet_model = config.controlnet_model;
        this.controlnet_type = config.controlnet_type;
        this.model_id = config.model_id;
        this.auto_hint = config.auto_hint;
        this.guess_mode = config.guess_mode;
        this.prompt = config.prompt;
        this.negative_prompt = config.negative_prompt;
        this.init_image = config.init_image;
        this.mask_image = config.mask_image;
        this.width = config.width;
        this.height = config.height;
        this.samples = config.samples;
        this.scheduler = config.scheduler;
        this.num_inference_steps = config.num_inference_steps;
        this.safety_checker = config.safety_checker;
        this.enhance_prompt = config.enhance_prompt;
        this.guidance_scale = config.guidance_scale;
        this.strength = config.strength;
        this.lora_model = config.lora_model;
        this.clip_skip = config.clip_skip;
        this.tomesd = config.tomesd;
        this.use_karras_sigmas = config.use_karras_sigmas;
        this.vae = config.vae;
        this.lora_strength = config.lora_strength;
        this.embeddings_model = config.embeddings_model;
        this.seed = config.seed;
        this.webhook = config.webhook;
        this.track_id = config.track_id;
    }

    public isValid(): boolean { 
        try {
            const properties = Object.keys(this) as Array<keyof QrCodeGeneratorRequestModelEntity>;
            return properties.every((prop) => typeof this[prop] !== 'undefined');
        } catch (error) {
            return false;
        }
    }

    
}