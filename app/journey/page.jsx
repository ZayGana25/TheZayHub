"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllCategories, getPostsByCategory } from "@/lib/journey_data"

export const metadata = {
  title: "My Journey | TheZayHub",
  description: "Explore the key milestones, projects, and transitions in my personal and academic journey toward tech and cybersecurity.",
}

export default function journeyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = getAllCategories()

  // Filter posts based on selected category
  const filteredPosts = getPostsByCategory(selectedCategory)

  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Journey Posts</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts, insights, and updates on my Journey.
        </p>
      </section>

      <section className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            // Use slice() to create a copy before reversing to avoid mutating the original array
            [...filteredPosts]
              .reverse()
              .map((post) => (
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
              ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">No posts found in this category.</p>
              <Button variant="outline" className="mt-4" onClick={() => setSelectedCategory("All")}>
                View All Posts
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

