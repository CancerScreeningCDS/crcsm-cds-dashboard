import './style.scss';

function References(props) {
  const { 
    input: {
      references=[]
    } 
  } = props;

  return (
    <article>
      <div className="cds-reference">
        <div className="document-list">
          <h4>Documents & Guidelines</h4>
          <ul>
            <li className="doc"><a href="https://journals.lww.com/ajg/fulltext/2017/07000/colorectal_cancer_screening__recommendations_for.13.aspx" className="doc certificate">Colorectal Cancer Screening: Recommendations for Physicians and Patients from the U.S. Multi-Society Task Force on Colorectal Cancer (2017)</a></li>
          </ul>
          <ul>
            <li className="doc"><a href="https://journals.lww.com/ajg/fulltext/2021/03000/acg_clinical_guidelines__colorectal_cancer.14.aspx" className="doc certificate">ACG Clinical Guidelines: Colorectal Cancer Screening (2021)</a></li>
          </ul>
          <ul>
            <li className="doc"><a href="https://www.gastrojournal.org/article/S0016-5085(19)41479-0/fulltext" className="doc certificate">Recommendations for Follow-Up After Colonoscopy and Polypectomy: A Consensus Update by the US Multi-Society Task Force on Colorectal Cancer (2020)</a></li>
          </ul>
          <ul>
            <li className="doc"><a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening" className="doc certificate">US Preventive Services Task Force. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement (2021)</a></li>
          </ul>
        </div>
      </div>    
      {
        references.map((ref,idx) => {
          const {
            name='',
            details=[],
            documents=[]
          } = ref;
          return (
            <div key={idx}>
              <h3>{name}</h3>
              {
                details.map((det,detIdx) => <p key={detIdx}>{det}</p>)
              }
              <div className='document-list'>
                <h4>Documents</h4>
                <ul>
                  {
                    documents.map((doc,idx) => {
                      return (
                        <li className='doc' key={idx}>
                          <a href={doc.link} className="doc certificate">{doc.title}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          )
        })
      }
    </article>
  )
}

export default References;