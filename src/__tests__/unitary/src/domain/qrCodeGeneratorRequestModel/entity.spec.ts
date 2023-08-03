import { QrCodeGeneratorRequestModelEntity } from "../../../../../qrMonster/domain/qrCodeMosterGenerator/entities/entities";

it('should return true when all properties are defined and not null', () => {
    const config = {
        key: 'someKey',
        controlnet_model: 'model',
        controlnet_type: 'type',
        model_id: 'id',
        auto_hint: 'hint',
        guess_mode: 'mode',
        prompt: 'prompt',
        negative_prompt: 'negative',
        init_image: 'image',
        mask_image: 'mask',
        width: 'width',
        height: 'height',
        samples: 'samples',
        scheduler: 'scheduler',
        num_inference_steps: 'steps',
        safety_checker: 'checker',
        enhance_prompt: 'enhance',
        guidance_scale: 1,
        strength: 1,
        lora_model: 'lora',
        clip_skip: 'clip',
        tomesd: 'tomesd',
        use_karras_sigmas: 'karras',
        vae: null,
        lora_strength: null,
        embeddings_model: null,
        seed: null,
        webhook: null,
        track_id: null
    };
    const entity = new QrCodeGeneratorRequestModelEntity(config);
    expect(entity.isValid()).toBe(true);
});