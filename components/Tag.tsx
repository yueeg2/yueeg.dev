import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-xs font-semibold uppercase px-2 rounded-full bg-primary-600 hover:bg-primary-400 text-primary-100 dark:hover:bg-primary-500"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
