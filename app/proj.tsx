import Image from 'next/image'

type Project = {
  image: string,
  title: string,
  brief: string,
}

export default function Proj(props: Project) {
  return (
    <>
      <div>
        <Image
          src={`${props.image}`}
          alt={`example of ${props.title}`}
          width={150}
          height={150}
        />  

        <h2>{props.title}</h2>
        <p>{props.brief}</p>
      </div>
    </>
  )
}