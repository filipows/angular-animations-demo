import { animation, useAnimation, animate, AnimationTriggerMetadata, style, transition, trigger, keyframes } from '@angular/animations';

const zoomInDown = animation(animate('{{duration}}ms linear',
    keyframes([
        style({
            opacity: 0, transform: 'scale3d(.1,.1,.1) translate3d(0,-1000px,0)', easing: 'cubic-bezier(.55,.055,.675,.19)', offset: 0
        }),
        style({
            opacity: 1, transform: 'scale3d(.475,.475,.475) translate3d(0,60px,0)', easing: 'cubic-bezier(.55,.055,.675,.19)', offset: 0.6
        }),
        style({
            transform: '*', easing: 'cubic-bezier(.175,.885,.32,1)', offset: 1
        })
    ])
));


export function zoomInDownAnimation(anchor = 'zoomInDown', duration = 1000): AnimationTriggerMetadata {
    return trigger(anchor, [
        transition('0 <=> 1', useAnimation(zoomInDown, {
            params: {
                duration: duration
            }
        }))
    ]);
}
