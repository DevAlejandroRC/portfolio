import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

const Profile:React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className="profile-card">
            <div className="profile-card__header">
                <img src="/assets/images/profile.jpg" alt="photo_profile" className="profile-card__photo"/>
                <h3 className="profile-card__job">{t('profile.job')}</h3>
                <h2 className="profile-card__name">Daniel Alejandro Romero Castellanos</h2>
            </div>
            <div className="profile-card__body">
                <p className="profile-card__item-location"><b><FontAwesomeIcon icon={faLocationDot}/> {t('profile.location')}:</b> Tocancipá, Colombia</p>
                <a href="mailto:alejandro5609@gmail.com?subject=Questions&body=Escribe aquí si tienes preguntas" className="profile-card__item-email"><FontAwesomeIcon icon={faEnvelope}/> {t('profile.email')}</a>
                <a href="tel:+573233985641" rel="noreferrer" className="profile-card__item-phone"><FontAwesomeIcon icon={faMobileScreen}/> (+57) 323-398-5641</a>
                <div className="profile-card__social-media">
                    <a href="https://github.com/DevAlejandroRC" target="_blank" rel="noreferrer" className="profile-card__item-github"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/alejandro-romero-castellanos/" target="_blank" rel="noreferrer" className="profile-card__item-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </div>
            <div className="profile-card__footer">
                <p className="profile-card__copy">&copy; 2024</p>
            </div>
        </div>
    )
}

export default Profile;
