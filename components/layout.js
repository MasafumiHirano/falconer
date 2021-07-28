import Header  from './header'
import Footer  from './footer'

export default function Layout(props) {
  return(
    <>
      <Header />
      <div className="mt-14 lg:mt-23">
        {props.children}
      </div>
      <Footer />
    </>
  )
}