import logo from 'assets/ccsm-tulip.svg';
import './TestPatientSelector.scss';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import increasedRiskData from './bundles/IncreasedRiskExclusions_v1.0.0/IncreasedRiskExclusions.json';
import highRiskData from './bundles/HighRiskReferral_v1.0.0/HighRiskReferral.json'
import USPSTFAvgRiskData from './bundles/USPSTFAvgRisk/USPSTFAvgRisk.json'
import screeningEligibleData from './bundles/ScreeningEligible_v1.0.0/ScreeningEligible.json';
import primaryScreeningDecisionData from './bundles/PrimaryScreeningDecision_v1.0.0/PrimaryScreeningDecision.json'
import followUpData from './bundles/FollowUp_v1.0.0/FollowUp.json'

const primaryScreenPad = 1;

const increasedRiskPad = primaryScreenPad + primaryScreeningDecisionData.length;

const followUpPad = increasedRiskPad + increasedRiskData.length;
const USPSTFAvgRiskPad = followUpPad + followUpData.length;

const screeningEligiglePad = USPSTFAvgRiskPad + USPSTFAvgRiskData.length;

export function TestPatientSelector() {
  return (
    <div>
      <div className="hero">
        <img src={logo} alt="Colorectal Cancer CDS Tulip logo"/>
        <h1 className="public-sans-900">CRCSM-CDS</h1>
        <h2 className="subtitle">Colorectal Cancer Screening and Management<br/>Clinical Decision Support</h2>
      </div>

      <h3>FHIR Test Patients</h3>
      <b>Authors:</b> Rute Martins (<a href="mailto:anarute@mitre.org">anarute@mitre.org</a>)<br/>
      <b>Last Updated:</b> Feb 17, 2025<br/>

      <div className="sitemap">

        <Table className="index-table">

          <thead>
            <tr>
              <th><span className="visually-hidden">Sample Patient Number</span></th>
              <th>Sample Patient Name</th>
              <th>Age</th>
              <th>Type of Scenario</th>
              <th>Last Update</th>
            </tr>
          </thead>

          <tbody>
            <tr className="group">
              <td colSpan="6">Primary Screening Decision</td>
            </tr>
            { primaryScreeningDecisionData.map((rd,idx) => <IndexRow key={idx} index={primaryScreenPad+idx} rowData={rd} library="PrimaryScreeningDecision" />) }

            <tr className="group">
              <td colSpan="6">Increased Risk Exclusions</td>
            </tr>
            { increasedRiskData.map((rd,idx) => <IndexRow key={idx} index={increasedRiskPad+idx} rowData={rd} library="IncreasedRiskExclusions" />) }

            <tr className="group">
              <td colSpan="6">Follow-Up Flow</td>
            </tr>
            { followUpData.map((rd,idx) => <IndexRow key={idx} index={followUpPad+idx} rowData={rd} library="FollowUp" />) }
  
             <tr className="group">
              <td colSpan="6">USPSTF Average Risk</td>
            </tr>
            { USPSTFAvgRiskData.map((rd,idx) => <IndexRow key={idx} index={USPSTFAvgRiskPad+idx} rowData={rd} library="USPSTFAvgRisk" />) }

          </tbody>
        </Table>

      </div>

      <h3>Notes</h3>
      <ul className="notelist">
        <li>Patient names follow the convention used by the synthetic-patient generator <a href="https://github.com/synthetichealth/synthea">Synthea&trade;</a>. Random digits are appended to the patient's name to indicate they are artificially generated, and <b>never</b> based on any real person who may have the same name.</li>
        <li>Real-world patients may have incomplete or irregular patient histories which <b>do not</b> follow best clinical practices. Some of the demonstration patients shown here have care histories designed to reflect these real-world problems.</li>
        <li>This is a work in progress and does not represent final versions of style, formatting or layout.</li>
      </ul>

    </div>
  )
}

function IndexRow(props) {
  const {index, rowData, library} = props;
  return (
    <tr>
      <td>{index}</td>
      <td><Link to={'/tests-fhir/'+rowData['id']+'?library='+library}>{rowData['name']}</Link></td>
      <td>{rowData['age']}</td>
      <td>{rowData['scenario']}</td>
      <td className="text-nowrap">{rowData['updated']}</td>
    </tr>
  )
}

