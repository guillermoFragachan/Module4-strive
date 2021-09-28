   
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/Jumbotron'
import LatestRelease from './components/LatestRelease'



function App() {

  return (
    <div>
      <MyNavbar name="Bookstore" />
      <MyJumbotron title='Strive book store' subtitle='History books from Strive'/>
      <LatestRelease/>

      <MyFooter name='Footer'/>
    </div>
  )
}

export default App