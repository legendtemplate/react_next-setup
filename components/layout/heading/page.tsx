'use client'



interface ContainerProps {
  head:string
  para:string
}

const heading: React.FC<ContainerProps> = (props) => {
  return (
    <div className="">
      <h2 className="uppercase font-bold md:text-4xl text-2xl">{props.head}</h2>
      <p className="">{props.para}</p>
    </div>
  )
}

export default heading
