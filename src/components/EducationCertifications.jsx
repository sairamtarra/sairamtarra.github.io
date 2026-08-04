import data from '../data';
import './EducationCertifications.css';

const EducationCertifications = () => {
  const { education, certifications } = data;
  return (
  <section id="education" className="edu-cert section">
    <h2 className="section-tag">EDUCATION & CERTIFICATIONS</h2>
    
    <div className="edu-cert-row">

    {/* EDUCATION */}
    <div className="education-card">
        <div className="edu-icon"></div>
        
        <h3>{education.degree}</h3>
        <p className="edu-branch">{education.branch}</p>
        <p className="edu-college">{education.college}</p>
        
        <div className="edu-meta">
            {data.education.duration && <span>{data.education.duration}</span>}
            <span>{data.education.cgpa}</span>
          </div>
    </div>

    {/* CERTIFICATIONS */}
    <div className="certifications-list">
        <h3 className="cert-heading">Certifications</h3>
        
        {certifications.map((cert, i) => (
            <div key={i} className="cert-item">
                
                <img
                src={cert.icon}
                alt={cert.title}
                className="cert-img"
                />
                
                <div>
                    <p className="cert-title">{cert.title}</p>
                    <p className="cert-issuer">{cert.issuer}</p>
                </div>
            </div>
        ))}
    </div>
    
</div>
</section>
  );
};

export default EducationCertifications;