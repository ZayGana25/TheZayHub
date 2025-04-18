import { CardFooter } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFullPostBySlug, journeyPosts } from "@/lib/journey_data"
import JourneyContent from "@/components/journey_content"


export default async function journeyPost({ params }) {
  // Await params before destructuring
  const { slug } = await params

  // Get the post data from our shared data file
  const post = getFullPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Sort posts by ID in descending order (newest first)
  const sortedPosts = [...journeyPosts].sort((a, b) => b.id - a.id)

  // Find the current post's index in the sorted array
  const currentIndex = sortedPosts.findIndex((p) => p.slug === slug)

  // Determine if there are newer and older posts
  const hasNewerPost = currentIndex > 0
  const hasOlderPost = currentIndex < sortedPosts.length - 1

  // Get the newer and older posts if they exist
  const newerPost = hasNewerPost ? sortedPosts[currentIndex - 1] : null
  const olderPost = hasOlderPost ? sortedPosts[currentIndex + 1] : null

  return (
    <article className="max-w-3xl mx-auto">
      <Button variant="ghost" size="sm" className="mb-6" asChild>
        <Link href="/journey" className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </Button>

      <div className="mb-8">
        <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-muted-foreground">
          {post.date} · {post.readTime}
        </div>
      </div>

      <JourneyContent content={post.content} carousels={post.carousels} />

      {(hasNewerPost || hasOlderPost) && (
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Continue Reading</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Next Post Column (newer post - higher ID) */}
            {hasNewerPost && (
              <div>
                <Link href={`/journey/${newerPost.slug}`} className="block">
                  <Button variant="outline" className="flex items-center gap-1 mb-2 w-full justify-start">
                    <ArrowLeftCircle className="h-4 w-4" />
                    <span>Next Post</span>
                  </Button>
                </Link>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="text-xs text-primary font-medium mb-1">{newerPost.category}</div>
                    <CardTitle className="text-lg">{newerPost.title}</CardTitle>
                    <CardDescription>
                      {newerPost.date} · {newerPost.readTime}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="ml-auto" asChild>
                      <Link href={`/journey/${newerPost.slug}`}>Read Post</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {/* Previous Post Column (older post - lower ID) */}
            {hasOlderPost && (
              <div className={!hasNewerPost ? "sm:col-start-2" : ""}>
                <Link href={`/journey/${olderPost.slug}`} className="block">
                  <Button variant="outline" className="flex items-center gap-1 mb-2 w-full justify-end">
                    <span>Previous Post</span>
                    <ArrowRightCircle className="h-4 w-4" />
                  </Button>
                </Link>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="text-xs text-primary font-medium mb-1">{olderPost.category}</div>
                    <CardTitle className="text-lg">{olderPost.title}</CardTitle>
                    <CardDescription>
                      {olderPost.date} · {olderPost.readTime}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="ml-auto" asChild>
                      <Link href={`/journey/${olderPost.slug}`}>Read Post</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

