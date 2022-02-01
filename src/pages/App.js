import Main from '../pages/body/style';
import Profile from '../pages/sectionProfile/index'
import Header from '../pages/header/index'
import { ThemeContextProvider } from '../provider/themeContext';
import GithubProvider from '../provider/githubContext';

import TabContent from '../components/tabContent';
import { ResetCSS } from '../styles/global';


function App() {
  return (

    <ThemeContextProvider>
      <GithubProvider>
        <ResetCSS />
        <Main>
          <Header />
          <Profile />
          <TabContent />
        </Main>
      </GithubProvider>
    </ThemeContextProvider>
  )
}

export default App;