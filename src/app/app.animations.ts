import { animate, AnimationTriggerMetadata, state, style, transition, trigger, group, animateChild, query } from '@angular/animations';

export const routeAnimation: AnimationTriggerMetadata =
    trigger('routeAnimation', [
        transition('* => *', [
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
            query(':leave', style({ transform: 'translateX(0%)' }), { optional: true }),
            query(':enter', style({ transform: 'translateX(-100%)' }), { optional: true }),
            group([
                query(':leave', animate('2000ms ease', style({ transform: 'translateX(100%)' })), { optional: true }),
                query(':enter', animate('2000ms ease', style({ transform: 'translateX(0%)' })), { optional: true }),
            ])
        ])
    ]);
