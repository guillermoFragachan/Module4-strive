   
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/Jumbotron'
import LatestRelease from './components/LatestRelease'
import MyButton from './components/MyButton'



function App() {

  return (
    <div>
      <MyNavbar name="Bookstore" />
      <MyJumbotron title='Strive book store' subtitle='History books from Strive'/>
 

      <LatestRelease className="mt-4"/>

      <MyFooter name='Footer'/>
    </div>
  )
}

export default App