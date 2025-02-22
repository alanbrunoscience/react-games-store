import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="scroll-smooth antialiased">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App