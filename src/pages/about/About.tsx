import React from 'react'
import { useTranslation } from 'react-i18next';

const About:React.FC = () => {
  
  const { t, i18n } =  useTranslation();

  return (
    <section className="content">
      <div className="content__section">
        <h1 className="content__title">{t('about.title')}</h1>
        <hr className="content__separator"/>
      </div>
      <h2 className="content__passionate">&#128075; {t('about.passionate')}</h2>
      <h3 className="content__objective">🚀 {t('about.objective')}:</h3>
      <p className="content__description">{t('about.description')}</p>
      {
        (i18n.language === 'es') ?
        (
          <div className="content__cv">
            <p>📩 {t('about.more')}</p>
            <a href="./CV-es.pdf" download>
              <button className="content__cv-button">{t('about.download')}</button>
            </a>
          </div>
        ):
        (
          <div className="content__cv">
            <p>📩 {t('about.more')}</p>
            <a href="./CV-en.pdf" download>
              <button className="content__cv-button">{t('about.download')}</button>
            </a>
          </div>
        )
      }
    </section>
  )
}

export default About;
