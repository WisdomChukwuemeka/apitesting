import { Footer } from "../components/footer"
import { Layout } from "../components/layout"
import { Home } from "../components/home"
export const App = () => {
  return(
    <>
    <div>
      <Layout />
    <Home />
    <div>
      <Footer />
    </div>
    </div>
    </>
  )
}