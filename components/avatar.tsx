import Link from 'next/link';

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <Link href="/about" className="flex items-center">
      <img src={picture} className="w-12 h-12 mr-2 rounded-full" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </Link >
  )
}

export default Avatar;
