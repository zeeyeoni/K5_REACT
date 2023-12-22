export default function TailH1({title, color}) {

  const tailColor = {
    sky : 'hover:bg-sky-800 hover:text-sky-100 bg-sky-200',
    lime : 'hover:bg-lime-700 hover:text-lime-100 bg-lime-200',
    orange : 'hover:bg-orange-700 hover:text-orange-100 bg-orange-200',
    violet : 'hover:bg-violet-700 hover:text-violet-100 bg-violet-200',
    red : 'hover:bg-red-700 hover:text-red-100 bg-red-200'
  }

  return (
    <div className={`text-4xl ${tailColor[color]} font-sans font-bold`}>
        {title}
    </div>
  )
}
