import {
    useAnimation,
    AnimationTriggerMetadata,
    style,
    transition,
    trigger,
    group,
    sequence,
    query
} from '@angular/animations';

import {
    stylePositionAbsolute,
    fadeIn,
    fadeOut,
    flipInLeft,
    flipInRight,
    flipOutLeft,
    flipOutRight,
    scaleDown,
    scaleDownUp,
    scaleUp,
    scaleUpDown,
    slideInRight,
    slideOutRight
} from '../util';


export const routeAnimation: AnimationTriggerMetadata =
    trigger('routeAnimation', [
        transition(':enter', [
            useAnimation(fadeIn, { params: { duration: 1000 } })]), // on load

        transition('* => route1', [
            style({ perspective: '2200px', position: 'relative' }),
            query(':enter, :leave', stylePositionAbsolute),
            query(':enter', style({ opacity: 0 })),
            sequence([
                query(':leave', useAnimation(flipOutLeft, { params: { duration: 500 } }),
                ),
                query(':enter', useAnimation(flipInRight, { params: { duration: 500 } })
                )
            ])
        ]),
        transition('route1 => *', [
            style({ perspective: '2200px', position: 'relative' }),
            query(':enter, :leave', stylePositionAbsolute),
            query(':enter', style({ opacity: 0 })),
            sequence([
                query(':leave', useAnimation(flipOutRight, { params: { duration: 500 } })),
                query(':enter', useAnimation(flipInLeft, { params: { duration: 500 } }))
            ])
        ]),

        transition('route2 <=> *', [
            query(':enter, :leave', stylePositionAbsolute),
            query(':enter', style({ opacity: 0 })),
            group([
                query(':leave', useAnimation(fadeOut, { params: { duration: 500 } })),
                query(':enter', useAnimation(fadeIn, { params: { duration: 500 } }))
            ])
        ]),

        transition('home => route3', [
            query(':enter, :leave', stylePositionAbsolute, { optional: true }),
            group([
                query(':leave', useAnimation(fadeOut, { params: { duration: 500 } }), { optional: true }),
                query(':enter', useAnimation(slideInRight, { params: { duration: 500 } }), { optional: true })
            ]),
        ]),
        transition('route3 => home', [
            query(':enter, :leave', stylePositionAbsolute, { optional: true }),
            group([
                query(':leave', useAnimation(slideOutRight, { params: { duration: 500 } }), { optional: true }),
                query(':enter', useAnimation(fadeIn, { params: { duration: 700 } }), { optional: true })
            ]),
        ]),

        transition('home => route4', [
            query(':enter, :leave', stylePositionAbsolute, { optional: true }),
            group([
                query(':leave', useAnimation(scaleUp, { params: { duration: 500 } }), { optional: true }),
                query(':enter', useAnimation(scaleDownUp, { params: { duration: 700, delay: 300 } }), { optional: true })
            ]),
        ]),

        transition('route4 => home', [
            query(':enter, :leave', stylePositionAbsolute, { optional: true }),
            group([
                query(':leave', useAnimation(scaleDown, { params: { duration: 700 } }), { optional: true }),
                query(':enter', useAnimation(scaleUpDown, { params: { duration: 700, delay: 300 } }), { optional: true })
            ]),
        ]),

        transition('* => *', [ // fallback for other transitions
            query(':enter, :leave', stylePositionAbsolute, { optional: true }),
            group([
                query(':leave', useAnimation(fadeOut, { params: { duration: 500 } }), { optional: true }),
                query(':enter', useAnimation(fadeIn, { params: { duration: 500 } }), { optional: true })
            ]),
        ])
    ]);
