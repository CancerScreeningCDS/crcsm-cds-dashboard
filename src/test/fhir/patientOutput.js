import PSD_SallySimpson from './bundles/PrimaryScreeningDecision_v1.0.0/PrimaryScreeningDecision_SallySimpson.json'
import PSD_EduardElder from './bundles/PrimaryScreeningDecision_v1.0.0/PrimaryScreeningDecision_EduardElder.json'
import PSD_ColinCarlson from './bundles/PrimaryScreeningDecision_v1.0.0/PrimaryScreeningDecision_ColinCarlson.json'
import PSD_HankCarlson from './bundles/PrimaryScreeningDecision_v1.0.0/PrimaryScreeningDecision_HankCarlson.json'
import PSD_HollyHereditary from './bundles/PrimaryScreeningDecision_v1.0.0/PrimaryScreeningDecision_HollyHereditary.json'
import PSD_IsaacBrown from './bundles/PrimaryScreeningDecision_v1.0.0/PrimaryScreeningDecision_IsaacBrown.json'
import PSD_FannyFamiglietti from './bundles/PrimaryScreeningDecision_v1.0.0/PrimaryScreeningDecision_FannyFamiglietti.json'

//import IRE_ColinCarlson from './bundles/IncreasedRiskExclusions_v1.0.0/ColinCarlson.json'
import IRE_PollyStuart from './bundles/IncreasedRiskExclusions_v1.0.0/IncreasedRiskExclusions_PollyStuart_HxPolyps.json'
import IRE_HankCarlson from './bundles/IncreasedRiskExclusions_v1.0.0/IncreasedRiskExclusions_HankCarlson_HxCancer.json'

import AvgRisk_StellaParker from './bundles/USPSTFAvgRisk/USPSTFAvgRisk_StellaParker.json'

import FU_FranColette from './bundles/FollowUp_v1.0.0/FollowUp_FranColette.json'
import FU_OllieOncken from './bundles/FollowUp_v1.0.0/FollowUp_OllieOncken.json'

export const testOutput = {
  IncreasedRiskExclusions: {
    PollyStuart: IRE_PollyStuart,
    HankCarlson: IRE_HankCarlson
  },
  FollowUp: {
    FranColette: FU_FranColette,
    OllieOncken: FU_OllieOncken
  },
  USPSTFAvgRisk: {
    StellaParker: AvgRisk_StellaParker
  },
  PrimaryScreeningDecision: {
    SallySimpson: PSD_SallySimpson,
    EduardElder: PSD_EduardElder,
    FannyFamiglietti: PSD_FannyFamiglietti,
    ColinCarlson: PSD_ColinCarlson,
    HankCarlson: PSD_HankCarlson,
    HollyHereditary: PSD_HollyHereditary,
    IsaacBrown: PSD_IsaacBrown    
  }
}