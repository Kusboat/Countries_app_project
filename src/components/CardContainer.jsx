import Card from './Card'

const CardContainer = ({data, findNation}) => {
  return (
    <div className='mt-12 mx-20 grid sm:grid-cols-4 gap-8 '>
        {data.map(data=><Card key = {data.numericCode} data={data} findNation={findNation}/>)}
    </div>
  )
}

export default CardContainer