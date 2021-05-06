import Header  from './header'
import Footer  from './footer'

export default function Layout(props) {
  return(
    <>
      <Header />
      <div class="mt-12 lg:mt-20">
        {props.children}
      </div>
      <Footer />
    </>
  )
}