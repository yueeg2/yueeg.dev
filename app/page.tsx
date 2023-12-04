import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import tagData from 'app/tag-data.json'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import { slug } from 'github-slugger'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutPostTags'


export default async function Page({params}) {

  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  const tag = decodeURI(params.tag)
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  return <>
    <div className="space-y-2 pb-3 pt-3 md:space-y-5">
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        {siteMetadata.description}
      </p>
    </div>

    <ListLayout posts={posts} title={title} />

    {/* <Main posts={posts} /> */}
  </>
}
