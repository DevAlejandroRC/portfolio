import React, { ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import { MenuItem, Select } from '@mui/material';
import "../../styles/styles.sass"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faHouse, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Profile from '../profile/Profile';

interface ComponentProps {
  children: ReactNode
}

const Layout:React.FC<ComponentProps> = ({children}) => {

  const [tongue, setTongue] = useState<string>('es');
  const { t, i18n } = useTranslation();
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.split('/');
    let language = 'es';
    for (let i = 0; i < path.length; i++) {
      const segment = path[i];
      if (segment.length === 2 && /[a-z]{2}/.test(segment)) {
        language = segment;
        break;
      }
    }
    if (language !== tongue) {
      setTongue(language);
      i18n.changeLanguage(language);
    }
  }, [location.pathname, tongue, i18n]);

  const changeLanguage = (tag: string) => {
    setTongue(tag);
    i18n.changeLanguage(tag);
    const path = location.pathname.replace(/\/[a-z]{2}$/, `/${tag}`);
    navigate(path);
  }

  const languages = [ 
    {code: "es", label: "español"},
    {code: "en", label: "english"}
  ]

  return(
      <Grid container>
        <Grid item xs={12}>
          <nav className="menu">
            <div className="menu__options">
              <div className="menu__items">
                <NavLink to={`/${tongue}`} title={t('main.home')}><span><FontAwesomeIcon icon={faHouse}/></span></NavLink>
                <NavLink to={`projects/${tongue}`} title={t('main.projects')}><span><FontAwesomeIcon icon={faLaptopCode}/></span></NavLink>
                <NavLink to={`skills/${tongue}`} title={t('main.skills')}><span><FontAwesomeIcon icon={faGears}/></span></NavLink>
              </div>
              <Select className="menu__idioms" value={tongue} onChange={(e) => changeLanguage(e.target.value)}>
                {languages.map((lang)=>(
                  <MenuItem key={lang.code} value={lang.code}>{lang.label}</MenuItem>
                ))}
              </Select>
            </div>
          </nav>
        </Grid>      

        <Grid container >
          <Grid item xs={12} sm={4} md={5} lg={3}>
            <Profile/>
          </Grid>
          <Grid item xs={12} sm={8} md={7} lg={9}>
            {children}
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Layout;
