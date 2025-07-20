import { Injectable } from '@angular/core';
import { AncodeDrawerComponent } from '@ancode/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class AncodeDrawerService
{
    private _componentRegistry: Map<string, AncodeDrawerComponent> = new Map<string, AncodeDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: AncodeDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): AncodeDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
