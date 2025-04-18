import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function journeyNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Sorry, the post you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/journey">Browse All Journey Posts</Link>
      </Button>
    </div>
  )
}
