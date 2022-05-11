import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MediaService} from "../../../../core/ui/services/media.service";
import {Media} from "../../../../core/ui/model/media.enum";
import {Subject} from "rxjs";
import {filter, takeUntil} from "rxjs/operators";
import {MaterialColorService} from "../../../../core/ui/services/material-color.service";
import {HueType} from "../../../../core/ui/model/hue-type.enum";
import {MaterialIconService} from "../../../../core/ui/services/material-icon.service";

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

  /** Form group for sports */
  sportsFormGroup: FormGroup | undefined;
  /** Form group for members */
  membersFormGroup: FormGroup | undefined;
  /** Form group for state */
  stateFormGroup: FormGroup | undefined;

  /** Background color for tag */
  sportsBackgroundColor = 'transparent';
  /** Text color for tag */
  sportsTextColor = 'black';

  /** Sports */
  sports: string[] = [];
  /** Offerings */
  offerings: string[] = [];
  /** Member count */
  members = 0;
  /** Federal state */
  federalState = "";

  /** List of sports */
  sportsList = [
    "Badminton",
    "Baseball",
    "Basketball",
    "Beachvolleyball",
    "Biathlon",
    "Boxen",
    "Curling",
    "Eislaufen",
    "Fechten",
    "Football",
    "Fußball",
    "Golf",
    "Handball",
    "Hockey",
    "Joggen",
    "Kampfsport",
    "Karate",
    "Kayakfahren",
    "Kickboxen",
    "Klettern",
    "Kricket",
    "Laufen",
    "Radfahren",
    "Rudern",
    "Rugby",
    "Squash",
    "Schwimmen",
    "Skateboarden",
    "Tennis",
    "Tischtennis",
    "Volleyball",
    "Yoga",
  ]
  /** List of federal states */
  federalStatesList = [
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
   * @param materialColorService material color service
   * @param materialIconService material icon service
   * @param mediaService media service
   */
  constructor(private formBuilder: FormBuilder,
              private materialColorService: MaterialColorService,
              private materialIconService: MaterialIconService,
              private mediaService: MediaService) {
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
    this.initializeMaterialColors();
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
    this.sportsFormGroup = this.formBuilder.group({});
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

  /**
   * Initializes material colors
   */
  private initializeMaterialColors() {
    this.sportsBackgroundColor = this.materialColorService.color(this.materialColorService.primaryPalette, HueType._200);
    this.sportsTextColor = this.materialColorService.contrast(this.materialColorService.primaryPalette, HueType._200);
  }

  //
  // Actions
  //

  /**
   * Handle selection of sports
   */
  onSportsSelected(sports: string[]) {
    this.sports = sports;
  }

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
