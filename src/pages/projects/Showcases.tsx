import React, { useState } from 'react'

import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faFilter, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Skeleton } from '@mui/material';

import useTongueShowcase from '../../api/hooks/useTongueShowcase';
import Error from '../controls/Error';
const Showcases:React.FC = () => {

    const { tag } = useParams<{tag:string}>();

    const [search, setSearch] = useState<string>("");

    const [menu, setMenu] = useState<boolean>(false);
    const [progressFilter, setProgressFilter] = useState<[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<[]>([]);
    const [techFilter, setTechFilter] = useState<[]>([]);
    
    const { t } = useTranslation();

    const language = tag || 'es';

    const lang = useTongueShowcase(language);

    const {data, loading, error} = lang;

    if(loading){
        return(
            <section className="content">
                <p>{t('loader')}</p>
                <header className="content__section">
                    <Skeleton variant="text" width={210} />
                </header>
                <nav className="content__filters-showcases">
                    <Skeleton variant="text" width={210} />
                </nav>
                {[...Array(6)].map((_, index) => (
                    <article key={index} className="content__card-showcase">
                        <Skeleton variant="text" width={100} />
                        <Skeleton variant="rectangular" width={250} height={150} />
                        <Skeleton variant="text" width={210} />
                        <Skeleton variant="text" width={180} />
                    </article>
                ))}
            </section>
        )
    }
    
    if(error)
        return <Error response={t('error.response')} error={error} />

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const checkedMenu = () => {
        setMenu(!menu)
    }

    const handleProgressFilter = (e:any) => {
        setProgressFilter(e);
    }
    const handleCategoryFilter = (e:any) => {
        setCategoryFilter(e);
    }
    const handleTechFilter = (e:any) => {
        setTechFilter(e);
    }

    const filteredData = data.filter(item => {
        if (search === '') return true;
        return (
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }).filter(item => {
        if(progressFilter.length < 1) return true;
        return progressFilter.some((f:any) => f.value === item.progress);
    }).filter(item => {
        if(categoryFilter.length < 1) return true;
        return categoryFilter.some((f:any) => f.value === item.category);
    }).filter(item => {
        if(techFilter.length < 1) return true;
        return techFilter.some((f:any) => item.technology?.includes(f.value));
    });

    return (
        <section className="content">
            <header className="content__section">
                <h1 className="content__title">{t('filter.showcases.title')}</h1>
                <hr className="content__separator" />
            </header>
            <nav className="content__filters-showcases">
                <input type="search" placeholder={t('filter.showcases.search')} onChange={handleSearch} className="content__filter-search"/>
                <div className="content__menu-showcase">
                    <label htmlFor="menu-showcase" className="content__mshowcase-title"><FontAwesomeIcon icon={faFilter}/> {t('filter.showcases.filters')}</label>
                    <input type="checkbox" name="menu-showcase" id="menu-showcase" className="content__showcase-button" onClick={checkedMenu}/>
                    <div className={menu ? "content__block-toggle-showcase" : "content__none-toggle-showcase"}>
                        <div className="content__filter-select" >
                            <Select placeholder={t('filter.showcases.progress')} options={[...new Set(data.map(f => f.progress))].map(o => ({value: o, label: o}))} isMulti onChange={handleProgressFilter}/>
                            <Select placeholder={t('filter.showcases.category')} options={[...new Set(data.map(f => f.category))].map(o => ({value: o, label: o}))} isMulti onChange={handleCategoryFilter}/>
                            <Select placeholder={t('filter.showcases.technology')} options={[...new Set(data.map(f => f.technology?.split(",")).flat())].map(o => ({value: o, label: o}))} isMulti onChange={handleTechFilter}/>
                        </div>
                    </div>
                </div>
            </nav>
            {filteredData.map( (item, index) => (
                <article key={index} className="content__card-showcase">
                    <div className="content__showcase-header">
                        <p className="content__showcase-status">{item.progress}</p>
                        <img src={item.image} alt={`web_${item.name}`}  className="content__showcase-photo"/>
                    </div>
                    <div className="content__showcase-body">
                        <h2 className="content__showcase-name">{item.name}</h2>
                        <div className="content__showcase-info">
                            <a href={item.url} target="_blank" rel="noreferrer" className="content__showcase-page"><FontAwesomeIcon icon={faUpRightFromSquare}/> {t('filter.showcases.view')}</a>
                            <h5 className="content__showcase-category"><FontAwesomeIcon icon={faCode}/> {item.category}</h5>
                        </div>
                        <p className="content__showcase-overview">{item.overview}</p>
                    </div>
                    <div className="content__showcase-footer">
                        <div className="content__showcase-technology">
                        {item.technology?.split(',').map((tech, index) =>(
                            <span key={index} className="content__showcase-tag">{tech}</span>
                        ))}
                        </div>   
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Showcases;
