import { animate, animation, useAnimation, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

const fadeOutRight = animation([
    style('*'),
    animate(`{{duration}}ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
        transform: 'translate3d(100%, 0, 0',
        opacity: 0
    }))
]);

export function fadeOutRightAnimation(anchor: string, duration: number = 500): AnimationTriggerMetadata {

    return trigger(anchor, [
        transition(':leave', useAnimation(fadeOutRight, {
            params: {
                duration
            }
        }))
    ]);
}
