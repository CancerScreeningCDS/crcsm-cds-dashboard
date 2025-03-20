import { Alert, Card, Button } from 'react-bootstrap';
import IconTooltip from 'components/IconTooltip';
import { useEffect, useState, useRef } from 'react';
import './style.scss';



function SpecialConsiderations(props) {
  let {
    toggleStatus,
    onToggleStatusChange
  } = props;


  const [show, setShow] = useState(false);

  const toggleNote = () => {
    setShow(!show);
  }

  const handleGeneticMarkersChange = (event) => {
    onToggleStatusChange({ ...toggleStatus, hasGeneticMarkers: event.target.checked, isToggleChanged: true });
  };

  const handleCurrentBreastCancerChange = (event) => {
    onToggleStatusChange({ ...toggleStatus, hasCurrentBreastCancer: event.target.checked, isToggleChanged: true });
  };

  const handleBreastDiseaseSymptomsChange = (event) => {
    onToggleStatusChange({ ...toggleStatus, hasBreastDiseaseSymptoms: event.target.checked, isToggleChanged: true });
  };

  const handleBreastExamFindingsChange = (event) => {
    onToggleStatusChange({ ...toggleStatus, hasBreastExamFindings: event.target.checked, isToggleChanged: true });
  };
  
  const handleSymptomsChange = (event) => {
    onToggleStatusChange({ ...toggleStatus, hasSymptoms: event.target.checked, isToggleChanged: true });
  };
  
  const handleFdrGeneticChange = (event) => {
    onToggleStatusChange({ ...toggleStatus, hasFdrGenetic: event.target.checked, isToggleChanged: true });
  };

  const handleFdrCancerChange = (event) => {
    onToggleStatusChange({ ...toggleStatus, hasFdrCancer: event.target.checked, isToggleChanged: true });
  };


  return (
    <section id="special_considerations">
      <h2>Personal History Considerations (<Button variant="link" className="btn-toggle-link" data-bs-toggle="collapse" role="button" aria-expanded="false" onClick={toggleNote} aria-controls="specialConsiderationsNote">note</Button>)</h2>
      <Alert
        show={show}
        variant={'info'}
        dismissible
        onClose={() => setShow(false)}
      >
      Use these options to indicate patient considerations that may not be documented or available to the CDS. Selecting one or more of these will cause the CDS to consider these when providing a recommendation. This <b>may or may not</b> cause the recommendation to change, depending on the specific patient history.
      </Alert>

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_hasGeneticMarkers" checked={toggleStatus.hasGeneticMarkers} onChange={handleGeneticMarkersChange} />
        <label className="form-check-label" htmlFor="force_hasGeneticMarkers">Hereditary GI syndrome(s)</label>
        <IconTooltip text="Does the patient have hereditary GI syndrome(s)?"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_hasCurrentBreastCancer" checked={toggleStatus.hasCurrentBreastCancer} onChange={handleCurrentBreastCancerChange} />
        <label className="form-check-label" htmlFor="force_hasCurrentBreastCancer">Colorectal cancer</label>
        <IconTooltip text="Does the patient have colorectal cancer?"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_hasBreastDiseaseSymptoms" checked={toggleStatus.hasBreastDiseaseSymptoms} onChange={handleBreastDiseaseSymptomsChange}/>
        <label className="form-check-label" htmlFor="force_hasBreastDiseaseSymptoms">Neoplastic polyp(s)</label>
        <IconTooltip text="Does the patient have result of neoplastic polyp(s)?"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_hasBreastExamFindings" checked={toggleStatus.hasBreastExamFindings} onChange={handleBreastExamFindingsChange} />
        <label className="form-check-label" htmlFor="force_hasBreastExamFindings">Inflammatory bowel disease (IBD)</label>
        <IconTooltip text="Does the patient have diagnosis or condition of IBD"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_hasSymptoms" checked={toggleStatus.hasSymptoms} onChange={handleSymptomsChange} />
        <label className="form-check-label" htmlFor="force_hasSymptoms">Symptomatic (colorectal signs or symptoms)</label>
        <IconTooltip text="Does the patient have signs or symptoms of colorectal disease?"></IconTooltip>
      </div>
      <hr />
      <h2>Family History Considerations</h2>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_hasFdrGenetic" checked={toggleStatus.hasFdrGenetic} onChange={handleFdrGeneticChange} />
        <label className="form-check-label" htmlFor="force_hasFdrGenetic">Family history of hereditary GI syndrome(s)</label>
        <IconTooltip text="Does the patient have a family history of hereditary GI syndromes?"></IconTooltip>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="force_hasFdrCancer" checked={toggleStatus.hasFdrCancer} onChange={handleFdrCancerChange} />
        <label className="form-check-label" htmlFor="force_hasFdrCancer">First degree relative with colorectal cancer or advanced adenoma(s)?</label>
        <IconTooltip text="Does the patient have any first degree relatives who received a colorectal cancer or advanced adenoma(s) diagnosis?"></IconTooltip>
      </div>
      <hr />
    </section>
  )
}

export default SpecialConsiderations;
