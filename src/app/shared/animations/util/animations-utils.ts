import { animate, animation, AnimationReferenceMetadata, AnimationStyleMetadata, style, } from '@angular/animations';

export const stylePositionAbsolute = style({ position: 'absolute', top: 0, left: 0, right: 0 });

export const flipOutLeft = animation([
    animate(`{{duration}}ms ease-in`, style({ opacity: 0.2, transform: 'translateZ(-1000px) rotateY(90deg)' })),
    style({ display: 'none' })
]);

export const flipInRight = animation([
    style({ transform: 'translateZ(-1000px) rotateY(-90deg)', opacity: 0.2 }),
    animate('{{duration}}ms ease-out', style({ transform: 'translateZ(0px) rotateY(0deg)', opacity: 1 }))
]);

export const flipOutRight = animation([
    animate(`{{duration}}ms ease-in`, style({ opacity: 0.2, transform: 'translateZ(-1000px) rotateY(-90deg)' })),
    style({ display: 'none' })
]);

export const flipInLeft = animation([
    style({ transform: 'translateZ(-1000px) rotateY(90deg)', opacity: 0.2 }),
    animate('{{duration}}ms ease-out', style({ transform: 'translateZ(0px) rotateY(0deg)', opacity: 1 }))
]);

export const fadeOut = animation([
    animate('{{duration}}ms ease', style({ opacity: 0 })),
    style({ display: 'none' })
]);

export const fadeIn = animation([
    style({ opacity: 0 }),
    animate('{{duration}}ms ease', style({ opacity: 1 }))
]);

export const slideInRight = animation([
    style({ transform: 'translateX(100%)', 'z-index': 9999 }),
    animate('{{duration}}ms ease', style({ transform: 'translateX(0%)' })), // moveFromRight
]);

export const slideOutRight = animation([
    animate('{{duration}}ms ease', style({ opacity: 0, transform: 'translateX(100%)' }))
]);

export const scaleDown = animation([
    animate('{{duration}}ms ease', style({ opacity: 0, transform: 'scale(.8)' }))
]);

export const scaleUpDown = animation([
    style({ opacity: 0, transform: 'scale(1.2)' }),
    animate('{{duration}}ms {{delay}}ms ease', style({ opacity: 1, transform: 'scale(1)' }))
]);

export const scaleUp = animation([
    animate('{{duration}}ms ease', style({ opacity: 0, transform: 'scale(1.2)' }))
]);

export const scaleDownUp = animation([
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('{{duration}}ms {{delay}}ms ease', style({ opacity: 1, transform: 'scale(1)' })),
]);
