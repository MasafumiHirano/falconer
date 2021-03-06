import Header  from './header'
import Footer  from './footer'

export default function Layout(props) {
  return(
    <>
      <Header />
      <div class="mt-14 lg:mt-24">
        {props.children}
      </div>
      <Footer />
    </>
  )
}