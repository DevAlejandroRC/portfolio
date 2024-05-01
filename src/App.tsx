import { useTranslation } from 'react-i18next';

import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import Showcases from './pages/projects/Showcases';
import Skills from './pages/skills/Skills';
import Layout from './pages/layout';
import About from './pages/about/About';
import Languages from './pages/controls/Languages';
import Error from './pages/controls/Error';

const App:React.FC = () =>{

  const { t, i18n } = useTranslation(["translation"]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}`}/>} />
          <Route path="/projects/:tag" element={<Languages children={<Showcases />}/>} />
          <Route path="/skills/:tag" element={<Languages children={<Skills />}/>} />
          <Route path="/:tag" element={<Languages children={<About/>}/>} />
          <Route path="*" element={<Error response={t('error.wrong')} error={t('error.message')} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
