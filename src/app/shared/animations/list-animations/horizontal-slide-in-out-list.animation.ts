import { animate, AnimationTriggerMetadata, style, transition, trigger, query, stagger } from '@angular/animations';

export function horizontalSlideInOutListAnimation(anchor: string, duration: number = 500): AnimationTriggerMetadata {
    return trigger(anchor, [
        transition('* => *', [
            style({}),
            query(':enter',
                style({ position: 'absolute', transform: 'translate3d(-100%, 0, 0) rotate3d(0,0,1,15deg)', opacity: 0 }),
                { optional: true }),
            query(':leave', stagger('100ms reverse', [
                animate(`${duration}ms cubic-bezier(.35, 0, .25, 1)`,
                    style({ transform: 'translate3d(150%, 0, 0) rotate3d(0,0,1,15deg)', opacity: 0 })),
                style({ position: 'absolute' })
            ]), { optional: true }),
            query(':enter', style({ position: '*' }), { optional: true }),
            query(':enter', stagger('200ms reverse', [
                animate(`${duration}ms cubic-bezier(.35, 0, .25, 1)`,
                    style({ transform: 'translate3d(0,0,0) rotate3d(0,0,1,0)', opacity: 1 })),
            ]), { optional: true }),
        ])
    ]);
}
