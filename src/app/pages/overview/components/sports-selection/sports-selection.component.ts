import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MaterialIconService} from "../../../../core/ui/services/material-icon.service";

/**
 * Displays sports selection
 */
@Component({
  selector: 'app-sports-selection',
  templateUrl: './sports-selection.component.html',
  styleUrls: ['./sports-selection.component.scss']
})
export class SportsSelectionComponent implements OnInit {

  /** List of available items */
  @Input() itemsList: string[] = [];
  /** Background color for sports */
  @Input() backgroundColor = 'transparent';
  /** Text color for sport */
  @Input() textColor = 'black';
  /** Event emitter indicating item selection */
  @Output() itemsSelectedEventEmitter = new EventEmitter<string[]>();

  /** Filter values for sports */
  sportsValuesMap: Map<string, [string, boolean, boolean]> = new Map<string, [string, boolean, boolean]>();

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
    this.initializeSports();
  }

  //
  // Initialization
  //

  /**
   * Initializes sports
   */
  private initializeSports() {
    this.itemsList.forEach(sport => {
      this.sportsValuesMap.set(sport, [this.materialIconService.getSportsIcon(sport), false, false]);
    });
  }

  //
  // Actions
  //

  /**
   * Handle selection of sports
   */
  onSportsSelected(event: Map<string, [string, boolean, boolean]>) {
    const sports = Array.from(event.values()).filter(item => {
      return item[1];
    }).map(item => {
      return item[0];
    });

    this.itemsSelectedEventEmitter.emit(sports);
  }
}
