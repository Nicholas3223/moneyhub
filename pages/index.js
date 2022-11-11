import Detail from "../modules/property-details";
import {Banner} from "../components/banner"

export default function PropertyDetails({ data }) {
  return (
    <>
      <Banner>Property Details</Banner>
      <Detail account={ data.account }/>
    </>   
  );
}

export const getServerSideProps = async() => {
  const res = await fetch(`http://localhost:3333/api/account`)
  const data = await res.json()
  return { props: { data } }
}
