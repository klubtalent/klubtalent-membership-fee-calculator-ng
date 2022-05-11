import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MaterialIconService} from "../../../../core/ui/services/material-icon.service";

/**
 * Displays offerings selection
 */
@Component({
  selector: 'app-offerings-selection',
  templateUrl: './offerings-selection.component.html',
  styleUrls: ['./offerings-selection.component.scss']
})
export class OfferingsSelectionComponent implements OnInit {

  /** List of available items */
  @Input() itemsList: string[] = [];
  /** Background color for offerings */
  @Input() backgroundColor = 'transparent';
  /** Text color for offering */
  @Input() textColor = 'black';
  /** Event emitter indicating item selection */
  @Output() itemsSelectedEventEmitter = new EventEmitter<string[]>();

  /** Filter values for offerings */
  offeringsValuesMap: Map<string, [string, boolean, boolean]> = new Map<string, [string, boolean, boolean]>();

  /**
   * Constructor
   * @param materialIconService material icon service
   */
  constructor(private materialIconService: MaterialIconService) {}

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
    this.initializeOfferings();
  }

  //
  // Initialization
  //

  /**
   * Initializes offerings
   */
  private initializeOfferings() {
    this.itemsList.forEach(offering => {
      this.offeringsValuesMap.set(offering, [this.materialIconService.getOfferingsIcon(offering), false, false]);
    });
  }

  //
  // Actions
  //

  /**
   * Handle selection of offerings
   */
  onOfferingsSelected(event: Map<string, [string, boolean, boolean]>) {
    const offerings = Array.from(event.values()).filter(item => {
      return item[1];
    }).map(item => {
      return item[0];
    });

    this.itemsSelectedEventEmitter.emit(offerings);
  }
}
