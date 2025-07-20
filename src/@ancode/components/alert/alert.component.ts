import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ancodeAnimations } from '@ancode/animations';
import { AncodeUtilsService } from '@ancode/services/utils';
import { AncodeAlertService } from '@ancode/components/alert/alert.service';
import {
  AncodeAlertAppearance,
  AncodeAlertType,
} from '@ancode/components/alert/alert.types';

@Component({
  selector: 'ancode-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: ancodeAnimations,
  exportAs: 'ancodeAlert',
})
export class AncodeAlertComponent implements OnChanges, OnInit, OnDestroy {
  /* eslint-disable @typescript-eslint/naming-convention */
  static ngAcceptInputType_dismissible: BooleanInput;
  static ngAcceptInputType_dismissed: BooleanInput;
  static ngAcceptInputType_showIcon: BooleanInput;
  /* eslint-enable @typescript-eslint/naming-convention */

  @Input() appearance: AncodeAlertAppearance = 'soft';
  @Input() dismissed: boolean = false;
  @Input() dismissible: boolean = false;
  @Input() name: string = this._ancodeUtilsService.randomId();
  @Input() showIcon: boolean = true;
  @Input() type: AncodeAlertType = 'primary';
  @Output() readonly dismissedChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _ancodeAlertService: AncodeAlertService,
    private _ancodeUtilsService: AncodeUtilsService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Host binding for component classes
   */
  @HostBinding('class') get classList(): any {
    return {
      'ancode-alert-appearance-border': this.appearance === 'border',
      'ancode-alert-appearance-fill': this.appearance === 'fill',
      'ancode-alert-appearance-outline': this.appearance === 'outline',
      'ancode-alert-appearance-soft': this.appearance === 'soft',
      'ancode-alert-dismissed': this.dismissed,
      'ancode-alert-dismissible': this.dismissible,
      'ancode-alert-show-icon': this.showIcon,
      'ancode-alert-type-primary': this.type === 'primary',
      'ancode-alert-type-accent': this.type === 'accent',
      'ancode-alert-type-warn': this.type === 'warn',
      'ancode-alert-type-basic': this.type === 'basic',
      'ancode-alert-type-info': this.type === 'info',
      'ancode-alert-type-success': this.type === 'success',
      'ancode-alert-type-warning': this.type === 'warning',
      'ancode-alert-type-error': this.type === 'error',
    };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    // Dismissed
    if ('dismissed' in changes) {
      // Coerce the value to a boolean
      this.dismissed = coerceBooleanProperty(changes['dismissed'].currentValue);

      // Dismiss/show the alert
      this._toggleDismiss(this.dismissed);
    }

    // Dismissible
    if ('dismissible' in changes) {
      // Coerce the value to a boolean
      this.dismissible = coerceBooleanProperty(
        changes['dismissible'].currentValue
      );
    }

    // Show icon
    if ('showIcon' in changes) {
      // Coerce the value to a boolean
      this.showIcon = coerceBooleanProperty(changes['showIcon'].currentValue);
    }
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to the dismiss calls
    this._ancodeAlertService.onDismiss
      .pipe(
        filter((name) => this.name === name),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        // Dismiss the alert
        this.dismiss();
      });

    // Subscribe to the show calls
    this._ancodeAlertService.onShow
      .pipe(
        filter((name) => this.name === name),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        // Show the alert
        this.show();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Dismiss the alert
   */
  dismiss(): void {
    // Return if the alert is already dismissed
    if (this.dismissed) {
      return;
    }

    // Dismiss the alert
    this._toggleDismiss(true);
  }

  /**
   * Show the dismissed alert
   */
  show(): void {
    // Return if the alert is already showing
    if (!this.dismissed) {
      return;
    }

    // Show the alert
    this._toggleDismiss(false);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Dismiss/show the alert
   *
   * @param dismissed
   * @private
   */
  private _toggleDismiss(dismissed: boolean): void {
    // Return if the alert is not dismissible
    if (!this.dismissible) {
      return;
    }

    // Set the dismissed
    this.dismissed = dismissed;

    // Execute the observable
    this.dismissedChanged.next(this.dismissed);

    // Notify the change detector
    this._changeDetectorRef.markForCheck();
  }
}
