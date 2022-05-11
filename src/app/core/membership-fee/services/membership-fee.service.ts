import {Injectable} from '@angular/core';

/**
 * Handles membership fees
 */
@Injectable({
  providedIn: 'root'
})
export class MembershipFeeService {

  /**
   * Calculates membership fees
   * @param sports sports
   * @param offerings offerings
   * @param members members
   * @param membershipFees membership fees
   * @param federalState federal state
   */
  public calculateSuggestedMembershipFees(sports: string[] = [], offerings: string[] = [], members = 0, membershipFees = 0, federalState = ""): number {
    // TODO Implement
    return 25;
  }
}
