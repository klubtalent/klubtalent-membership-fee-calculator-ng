import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatOptionSelectionChange} from "@angular/material/core";
import {MediaService} from "../../../../core/ui/services/media.service";
import {Media} from "../../../../core/ui/model/media.enum";
import {Subject} from "rxjs";
import {filter, takeUntil} from "rxjs/operators";

/**
 * Displays overview page
 */
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  /** Whether the stepper is linear or not */
  isLinear = true;

  /** Form group for members */
  membersFormGroup: FormGroup | undefined;
  /** Form group for state */
  stateFormGroup: FormGroup | undefined;

  /** Member count */
  members = 0;
  /** Federal state */
  federalState = "";

  /** List of federal states */
  federalStates = [
    "Bayern",
    "Baden-Württemberg",
    "Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen",
    "Sachsen-Anhalt",
    "Schleswig-Holstein",
    "Thüringen"
  ]

  /** Enum of media types */
  public mediaType = Media;
  /** Current media */
  public media: Media = Media.UNDEFINED;

  /** Helper subject used to finish other subscriptions */
  private unsubscribeSubject = new Subject();

  /**
   * Constructor
   * @param formBuilder form builder
   * @param mediaService media service
   */
  constructor(private formBuilder: FormBuilder, private mediaService: MediaService) {
  }

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
    this.initializeFormGroups();
    this.initializeMedia();
  }

  /**
   * Handles on-destroy lifecycle phase
   */
  ngOnDestroy() {
    this.unsubscribeSubject.next();
  }

  //
  // Initialization
  //

  /**
   * Initializes form groups
   */
  private initializeFormGroups() {
    this.membersFormGroup = this.formBuilder.group({
      memberControl: ['', Validators.min(1)],
    });
    this.stateFormGroup = this.formBuilder.group({
      federalStateControl: ['', Validators.required],
    });
  }

  /**
   * Initializes media
   */
  initializeMedia() {
    this.mediaService.mediaSubject.pipe(
      takeUntil(this.unsubscribeSubject),
      filter(value => value != null)
    ).subscribe(media => {
      this.media = media;
    });

    this.mediaService.fetchMedia();
  }

  //
  // Actions
  //

  /**
   * Handles federal state selection
   * @param federalState federal state
   */
  onFederalStateSelected(federalState: string) {
    this.federalState = federalState;
  }

  /**
   * Handles final step being reached
   */
  onFinalStepReached() {
    console.log(`final step reached`);
  }

  /**
   * Handles click on menu item
   * @param menuItem menu item
   */
  onMenuItemClicked(menuItem: string) {
    switch (menuItem) {
      default: {
        break;
      }
    }
  }

  //
  // Helpers
  //

  /**
   * Retrieves logo of federal state
   * @param federalStateName federal state name
   */
  getFederalStateLogo(federalStateName: string) {
    return `../../../../../assets/images/coat_of_arms_${federalStateName.toLowerCase().replace('ü', 'u')}.png`;
  }
}
