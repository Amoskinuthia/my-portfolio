import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    stagger, 
    animateChild,
    keyframes
} from '@angular/animations';
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('select-language => select-user', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            query('.block', style({ transform: "translateX(0px)", opacity: 1 }), { optional: true }),
            query('.user-block', style({ transform: "translateX(200px)", opacity:0 }), { optional: true }),
            query('.user-block-main', style({ opacity:0 }), { optional: true }),
            group([
                query(':enter .user-block-main', stagger(2000, [
                    style({opacity: 0 }),
                    animate('0.5s', style({ opacity: 1 })),
                  ]), { optional: true }),

                  query(':enter .user-block', stagger(200, [
                    style({ transform: 'translateX(200px)' }),
                    animate('1s', style({ transform: 'translateX(0px)', opacity: 1 })),
                  ]), { optional: true }),


                query(':leave .block', stagger(200, [
                    style({ transform: 'translateX(00px)' }),
                    animate('0.5s', style({ transform: 'translateX(-200px)', opacity: 0 })),
                  ]), { optional: true }),
            ]),

           

        ]),
        transition('select-user => product', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('product => detail', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('* <=> *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('1s ease-in-out', keyframes([
                        style({ transform: 'translateX(0%) scale(1) skew(5deg, 5deg)', offset: 0 }),
                        style({ transform: 'translateX(-5%) scale(0.9) skew(10deg, 10deg)', offset: 0.05 }),
                        style({ transform: 'translateX(-10%) scale(0.85)  skew(10deg, 10deg)', offset: 0.1 }),
                        style({ transform: 'translateX(-15%) scale(0.8) skew(10deg, 10deg)', offset: 0.15 }),
                        style({ transform: 'translateX(-20%) scale(0.75) skew(10deg, 10deg)', offset: 0.2 }),
                        style({ transform: 'translateX(-25%) scale(0.7) skew(10deg, 10deg)', offset: 0.25 }),
                        style({ transform: 'translateX(-30%) scale(0.65) skew(10deg, 10deg)', offset: 0.3 }),
                        style({ transform: 'translateX(-100%) scale(0)', offset: 1 })
                    ]))
                ], { optional: true }),
            ])
        ])
    ]);