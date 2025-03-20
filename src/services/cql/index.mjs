import CDSConnectCommonsforFHIRv401 from './crc/CDSConnectCommonsforFHIRv401.json';
import CRCSMCommonFunctions from './crc/CRCSMCommonFunctions.json';
import CSMCommonFunctions from './crc/CSMCommonFunctions.json';
import DataElements from './crc/DataElements.json';
import DecisionToScreen from './crc/DecisionToScreen.json';
import DecisionToScreenActions from './crc/DecisionToScreenActions.json';
import DecisionToScreenEvents from './crc/DecisionToScreenEvents.json';
import DetermineNextDueDate from './crc/DetermineNextDueDate.json';
import DetermineNextDueDateActions from './crc/DetermineNextDueDateActions.json';
import DetermineNextDueDateEvents from './crc/DetermineNextDueDateEvents.json';
import FHIRHelpers from './crc/FHIRHelpers-4.0.1.json';
import FollowUp from './crc/FollowUp.json';
import FollowUpActions from './crc/FollowUpActions.json';
import FollowUpEvents from './crc/FollowUpEvents.json';
import HighLevel from './crc/HighLevel.json';
import Hospice from './crc/Hospice.json';
import IncreasedRiskExclusions from './crc/IncreasedRiskExclusions.json';
import IncreasedRiskExclusionsActions from './crc/IncreasedRiskExclusionsActions.json';
import IncreasedRiskExclusionsEvents from './crc/IncreasedRiskExclusionsEvents.json';
import PertinentHistory from './crc/PertinentHistory.json';
import PrimaryScreeningDecision from './crc/PrimaryScreeningDecision.json';
import ScreeningDue from './crc/ScreeningDue.json';
import ScreeningDueEvents from './crc/ScreeningDueEvents.json';
import ScreeningEligible from './crc/ScreeningEligible.json';
import ScreeningEligibleActions from './crc/ScreeningEligibleActions.json';
import ScreeningEligibleEvents from './crc/ScreeningEligibleEvents.json';
import ScreeningIncomplete from './crc/ScreeningIncomplete.json';
import ScreeningIncompleteEvents from './crc/ScreeningIncompleteEvents.json';
import USPSTFAvgRisk from './crc/USPSTFAvgRisk.json';
import USPSTFAvgRiskActions from './crc/USPSTFAvgRiskActions.json';
import USPSTFAvgRiskEvents from './crc/USPSTFAvgRiskEvents.json';


const elmJsonDependencyArray = [
  CDSConnectCommonsforFHIRv401,
  CRCSMCommonFunctions,
  CSMCommonFunctions,
  DataElements,
  DecisionToScreen,
  DecisionToScreenActions,
  DecisionToScreenEvents,
  DetermineNextDueDate,
  DetermineNextDueDateActions,
  DetermineNextDueDateEvents,
  FHIRHelpers,
  FollowUp,
  FollowUpActions,
  FollowUpEvents,
  HighLevel,
  Hospice,
  IncreasedRiskExclusions,
  IncreasedRiskExclusionsActions,
  IncreasedRiskExclusionsEvents,
  PertinentHistory,
  PrimaryScreeningDecision,
  ScreeningDue,
  ScreeningDueEvents,
  ScreeningEligible,
  ScreeningEligibleActions,
  ScreeningEligibleEvents,
  ScreeningIncomplete,
  ScreeningIncompleteEvents,
  USPSTFAvgRisk,
  USPSTFAvgRiskActions,
  USPSTFAvgRiskEvents
];

// Reformat ELM JSON value set references to match what is expected by the 
// code service built into the cql execution engine.
// NOTE: This is needed since we are not using `cql-exec-vsac`.
export const elmJsonDependencies = elmJsonDependencyArray.reduce((acc, elm) => {
  let refs = elm?.library?.valueSets?.def;
  if (refs) {
    refs = refs.map(r => {
      return {
        ...r,
        id: r.id.split('/').pop()
      }
    });
    elm.library.valueSets.def = refs;
  }
  return {
    ...acc,
    [elm.library.identifier.id]: elm
  }
}, {});