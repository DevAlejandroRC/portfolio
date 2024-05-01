import React, { useState } from "react";
import { useParams } from "react-router";

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import useTongueTechnologies from "../../api/hooks/useTongueTechnologies";
import { Skeleton } from "@mui/material";
import Error from "../controls/Error";

const Skills:React.FC = () =>{

    const { tag } = useParams<{tag:string}>();
    
    const [menu, setMenu] = useState<boolean>(false); 
    const [filter, setFilter] = useState<string[]>([]);

    const { t } = useTranslation();

    const tongue = tag || 'es';

    const idioms = useTongueTechnologies(tongue);

    const filters = [
        t('filter.skills.certified'), 
        t('filter.skills.completed'), 
        t('filter.skills.progress'), 
        //t('filter.skills.scheduled')
    ];
    
    const {data, loading, error} = idioms;

    if(loading){
        return (
            <section className="content">
                <p>{t('loader')}</p>
                <header className="content__section">
                    <Skeleton variant="text" width={210} />
                </header>
                <nav className="content__filters-skills">
                    <Skeleton variant="text" width={210} />
                </nav>
                {[...Array(6)].map((_, index) => (
                    <article key={index} className="content__card-skills">
                        <Skeleton variant="text" width={30} />
                        <Skeleton variant="rectangular" width={150} height={150} />
                        <Skeleton variant="text" width={100} />
                    </article>
                ))}
            </section>
        )
    }

    
    if(error)
        return <Error response={t('error.response')} error={error} />

    const checkedMenu = () => {
        setMenu(!menu)
    }

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) =>{
        
        const value = e.target.value;
        const checked = e.target.checked;
        
        let newFilter = [...filter];
        
        if(checked)
            newFilter.push(value);
        else
            newFilter = newFilter.filter(f => f !== value);
        setFilter(newFilter)
    }

    const dataFilter = filter.length > 0 ? data.filter(option => filter.some(f => f === option.text)) : data;

    return(
        <section className="content">
            <header className="content__section">
                <h1 className="content__title">{t('filter.skills.title')}</h1>
                <hr className="content__separator" />
            </header>
            <nav className="content__filters-skills">
                <div className="content__menu-skills">
                    <label htmlFor="menu-skills" className="content__mskills-title"><FontAwesomeIcon icon={faFilter}/> {t('filter.skills.filters')}</label>
                    <input type="checkbox" name="menu-skills" id="menu-skills" className="content__skills-button" onClick={checkedMenu}/>
                    <div className={menu ? "content__block-toggle-skills" : "content__none-toggle-skills"}>
                        <div className="content__filter-list">
                        {filters.map((text, index)=>(
                            <label key={index} className="content__label">
                                <input type="checkbox" value={text} onChange={handleCheck} className="content__checkbox" />
                                {text}
                            </label>
                        ))}
                        </div>
                    </div>
                </div>
            </nav>
            
            {dataFilter.map((skills, index) =>(
            <article key={index} className="content__card-skills">
                <div className="content__skills-header">
                    <p className="content__skills-status">{skills.text}</p>
                    <img src={skills.image} alt={skills.name} className="content__skills-photo" />
                </div>
                <div className="content__skills-body">
                    <h4 className="content__skills-name">{skills.name}</h4>
                </div>
            </article>
            ))}
        </section>
    )
}

export default Skills;