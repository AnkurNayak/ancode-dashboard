
// -----------------------------------------------------------------------------------------------------
// @ Expand / collapse

import { trigger, state, style, transition, animate } from "@angular/animations";
import { AncodeAnimationDurations, AncodeAnimationCurves } from "@ancode/animations/defaults";

// -----------------------------------------------------------------------------------------------------
const expandCollapse = trigger('expandCollapse',
    [
        state('void, collapsed',
            style({
                height: '0'
            })
        ),

        state('*, expanded',
            style('*')
        ),

        // Prevent the transition if the state is false
        transition('void <=> false, collapsed <=> false, expanded <=> false', []),

        // Transition
        transition('void <=> *, collapsed <=> expanded',
            animate('{{timings}}'),
            {
                params: {
                    timings: `${AncodeAnimationDurations.entering} ${AncodeAnimationCurves.deceleration}`
                }
            }
        )
    ]
);

export { expandCollapse };
