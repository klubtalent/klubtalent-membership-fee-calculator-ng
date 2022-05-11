import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 * Displays overview page
 */
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  /** Whether the stepper is linear or not */
  isLinear = true;

  /** Form group for members */
  membersFormGroup: FormGroup | undefined;

  /**
   * Constructor
   * @param formBuilder form builder
   */
  constructor(private formBuilder: FormBuilder) {
  }

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
    this.initializeFormGroups()
  }

  //
  // Initialization
  //

  /**
   * Initializes form groups
   */
  private initializeFormGroups() {
    this.membersFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.min(1)],
    });
  }

  //
  // Actions
  //

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
}
