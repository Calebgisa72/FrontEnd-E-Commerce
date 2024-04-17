import './details.css'
interface props {
  company: string;
  title: string;
  description: string;
}

function Details({ company, title, description }: props) {
  return (
    <div className='detailss'>
      <h5>{company}</h5>
      <h1 className='h12'>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Details;