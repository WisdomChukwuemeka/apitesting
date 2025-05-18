import { Footer } from "../components/footer"
import { Layout } from "../components/layout"
import { Home } from "../components/home"
export const App = () => {
  return(
    <>
    <div class="flex flex-col min-h-screen">
      <Layout />
    <Home />

    <div class="bg-black text-white h-fit w-full text-center fixed bottom-0 p-2 md:text-2xl lg:text-3xl">
        <Footer />
    </div>
    </div>
    </>
  )
}