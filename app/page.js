import HomePageContainer from './containers/home-page-container/index'
import { HomePageProvider } from './containers/useHomepage'
const HomePage = () => {
  return (
    <HomePageProvider>
    <HomePageContainer/>
    </HomePageProvider>
  )
}

export default HomePage