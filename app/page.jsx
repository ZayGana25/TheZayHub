import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getRecentPosts } from "@/lib/journey_data"


export default function Home() {
  // Get the three most recent blog posts
  const journeyPosts = getRecentPosts(3)

  return (
    <div className="space-y-16">
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Isaiah Lugo</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A passionate Software Engineer with big dreams and a love for building things. Aspirations to make a difference in the world through Cyber Security and AI.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/about">AboutMe</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/cv">View CV</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative aspect-square max-w-md w-full mx-auto">
          <Image
            src="/pp/profile_pic2.jpg?height=400&width=400"
            alt="Profile Image"
            width={400}
            height={400}
            priority
            className="rounded-full object-cover border-4 border-primary/20"
          />
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Personal Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and updates on my Personal Journey as a Software Engineer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {journeyPosts.map((post) => (
            <Card key={post.id} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="text-xs text-primary font-medium mb-1">{post.category}</div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.date} · {post.readTime}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="ml-auto" asChild>
                  <Link href={`/journey/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/journey">View All Posts</Link>
          </Button>        
        </div>
      </section>
    </div>
  )
}

