import { animate, animation, useAnimation, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

const fadeInUp = animation([
    style({
        opacity: 0,
        transform: 'translate3d(0,{{ yTranslation }}, 0)'
    }),
    animate(`{{duration}}ms ease`, style({
        transform: '*',
        opacity: 1
    }))
]);

export function fadeInUpAnimation(anchor: string, duration: number = 500, yTranslation: string = '10%'): AnimationTriggerMetadata {
    return trigger(anchor, [
        transition(':enter', useAnimation(fadeInUp, {
            params: {
                duration,
                yTranslation
            }
        }))
    ]);
}
