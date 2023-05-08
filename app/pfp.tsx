import Image from 'next/image';

export default function PFP(image: string, alt: string) {
  return (
      <Image
        className=" rounded-full "
        src={image}
        alt={alt}
        width='800'
        height='100'
      />
  )
}