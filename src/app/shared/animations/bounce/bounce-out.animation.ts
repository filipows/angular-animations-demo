import { animation, useAnimation, animate, AnimationTriggerMetadata, style, transition, trigger, keyframes } from '@angular/animations';

const bounceOut = animation([animate('{{duration}}ms',
    keyframes(
        [style({
            transform: 'scale3d(.95, .95, .95)',
            'easing': 'ease',
            offset: 0.2
        }),
        style({
            transform: 'scale3d(1.05, 1.05, 1.05)',
            opacity: 1,
            'easing': 'ease',
            offset: 0.5
        }),
        style({
            transform: 'scale3d(1.05, 1.05, 1.05)',
            opacity: 1,
            'easing': 'ease',
            offset: 0.55
        }),
        style({
            transform: 'scale3d(0.3, 0.3, 0.3)',
            opacity: 0,
            'easing': 'ease',
            offset: 1
        }),
        ])
)]);

const bounceOut2 = animation([animate('{{duration}}ms',
    keyframes(
        [style({
            transform: 'scale3d(.95, .95, .95)',
            'easing': 'ease',
            offset: 0.2
        }),
        style({
            transform: 'scale3d(1.02, 1.02, 1.02)',
            opacity: 1,
            'easing': 'ease',
            offset: 0.5
        }),
        style({
            transform: 'scale3d(1, 1, 1)',
            opacity: 1,
            'easing': 'ease',
            offset: 1
        })])
)]);


export function bounceOutAnimation(anchor: string, duration: number = 750): AnimationTriggerMetadata {
    return trigger(anchor, [
        transition('0 <=> 1', useAnimation(bounceOut, {
            params: {
                duration: duration
            }
        }))
    ]);
}

export function bounceOut2Animation(anchor: string, duration: number = 300): AnimationTriggerMetadata {
    return trigger(anchor, [
        transition('0 <=> 1', useAnimation(bounceOut2, {
            params: {
                duration: duration
            }
        }))
    ]);
}

