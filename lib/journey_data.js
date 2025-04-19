// journey posts data - single source of truth
export const journeyPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js for My Website",
      excerpt: "Learn how I started my website with Next.js and Vercel",
      date: "March 9, 2025",
      readTime: "5 min read",
      slug: "getting-started-with-nextjs",
      category: "Development",
    },
    {
      id: 2,
      title: "AI Chatbot Implementation",
      excerpt: "Introduces the AI chatbot on my website and its features",
      date: "March 21, 2025",
      readTime: "3 min read",
      slug: "ai-chatbot-implementation",
      category: "Development",
    },
    {
      id: 3,
      title: "Why I Built This Site",
      excerpt: "A little about the motivation behind creating this website",
      date: "March 23, 2025",
      readTime: "3 min read",
      slug: "about-this-site",
      category: "Personal",
    },
    {
      id: 4,
      title: "Commencement... Almost Here",
      excerpt: "Reflecting on my college journey thus far and what’s next",
      date: "April 2, 2025",
      readTime: "7 min read",
      slug: "almost-here",
      category: "Education",
    },
    {
      id: 5,
      title: "Our Weekend Away in Seattle",
      excerpt: "Experiencing the excitement of the Mariners and exploring Seattle",
      date: "April 13, 2024",
      readTime: "8 min read",
      slug: "explore-seattle",
      category: "Travel",
    },
    {
      id: 6,
      title: "Website Deployment",
      excerpt: "Ready to deploy my website and make it accessible to all",
      date: "April 18, 2025",
      readTime: "3 min read",
      slug: "ready-to-deploy",
      category: "Development",
    },
  ]
  
  // Helper function to get the most recent posts
  export function getRecentPosts(count = 3) {
    return [...journeyPosts].sort((a, b) => b.id - a.id).slice(0, count)
  }
  
  // Helper function to get all categories
  export function getAllCategories() {
    return ["All", ...new Set(journeyPosts.map((post) => post.category))]
  }
  
  // Helper function to filter posts by category
  export function getPostsByCategory(category) {
    return category === "All" ? journeyPosts : journeyPosts.filter((post) => post.category === category)
  }
  
  // Helper function to get a post by slug
  export function getPostBySlug(slug) {
    return journeyPosts.find((post) => post.slug === slug)
  }
  
  // journey post content - could be moved to a separate file if it gets too large
  export const journeyPostsContent = {
      "getting-started-with-nextjs": {
        content: `
          <p>Next.js is a powerful React framework that makes building web applications easier and more efficient. For my personal website, I chose Next.js because of its performance, built-in features, and ease of deployment.</p>
          
          <h2>Why I Chose Next.js</h2>
          <p>Next.js offers several key benefits that made it ideal for my project:</p>
          <ul>
            <li>Fast page loads due to automatic code splitting</li>
            <li>SEO-friendly with server-side rendering (SSR) and static site generation (SSG)</li>
            <li>Built-in API routes for dynamic backend features</li>
            <li>Easy integration with Vercel for hosting</li>
            <li>Support for modern JavaScript and TypeScript</li>
          </ul>
          
          <h2>Setting Up My Next.js Project</h2>
          <p>To start my website, I used the following command:</p>
          <pre><code>npx create-next-app@latest [website directory name]</code></pre>
          
          <p>After the setup, I navigated to my project directory and launched the development server:</p>
          <pre><code>cd [website directory name]
npm run dev</code></pre>
          
          <h2>Project Structure</h2>
          <p>Next.js uses a file-based routing system. This means that the structure of your project's files determines the routes of your application. For example, a file at <code>pages/about.js</code> will be accessible at <code>/about</code>. Here’s how I structured my website:</p>
          <ul>
            <li><code>/app/page.jsx</code> - Home page</li>
            <li><code>/app/about/page.jsx</code> - AboutMe page</li>
            <li><code>/lib/journey-data.js</code> - Dynamic Journey Post pages</li>
            <li><code>/public</code> - Static assets like images, media, and other document files</li>
            <li> etc </li>
          </ul>
          
          <h2>Deploying to Vercel</h2>
          <p>Once my site was functional, I deployed it using Vercel with the following steps:</p>
          <pre><code>npm i -g vercel
vercel</code></pre>
          <p>Vercel automatically optimized my Next.js project for production, providing a seamless deployment process.</p>
          
          <h2>Conclusion</h2>
          <p>Next.js has been an excellent choice for building my personal website. With features like fast performance, simple routing, and easy deployment, I was able to create and launch my site efficiently.</p>
          
          <p>In upcoming posts, I plan to talk more about my journey, refining my website, and life updates.</p>
        `,
      },
      "ai-chatbot-implementation": {
        content: `
          <p>Artificial Intelligence (AI) is an exciting field that enhances user interaction on modern websites. As part of my personal website, I have implemented an AI chatbot to assist visitors with basic questions about me, provide helpful responses, and even solve problems.</p>
          
          <h2>Why Implement an AI Chatbot?</h2>
          <p>My AI chatbot serves several key purposes:</p>
          <ul>
            <li>Answer frequently asked questions about me and my work, or revert to contacting me via email</li>
            <li>Assist users in navigating my website</li>
            <li>Provide useful insights or simple solutions to common problems</li>
            <li>Offer an interactive and engaging experience</li>
          </ul>
          
          <h2>How It Works</h2>
          <p>The chatbot is powered by OpenAI's GPT-3.5-Turbo and integrated into my website using the Vercel AI SDK. It is designed to process user input intelligently and generate meaningful responses based on the context of the conversation.</p>
          
          <h2>Features of My AI Chatbot</h2>
          <ul>
            <li>Natural language processing for intuitive interactions</li>
            <li>Ability to recognize and answer website-related queries</li>
            <li>Provides links to relevant pages for further information</li>
            <li>Offers fun and interactive responses to engage visitors</li>
          </ul>
          
          <h2>Challenges and Future Enhancements</h2>
          <p>While my chatbot is already functional, there are areas for improvement:</p>
          <ul>
            <li>Enhancing response accuracy for complex queries</li>
            <li>Adding memory capabilities for multi-step conversations</li>
            <li>Improving personalization based on user interactions</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Integrating an AI chatbot into my personal website has been a rewarding experience, offering both practical benefits and a fun way for users to interact. As AI technology continues to evolve, I plan to refine my chatbot further to provide an even better experience for visitors.</p>
          
          <p>Stay tuned for updates on how my AI chatbot evolves over time!</p>
        `,
      },
      "about-this-site": {
        content: `
          <p>This website is more than just a personal project — it's a showcase of the skills I’ve acquired throughout my collegiate journey. As a Computer Science: Software Engineering major with a minor in Mathematics and a strong interest in Cyber Security, I wanted to create a space that highlights my technical expertise while also reflecting my personal life, hobbies, and passions.</p>
          
          <h2>My Goals for This Website</h2>
          <p>The primary motivation behind this website was to establish an online portfolio that serves multiple purposes:</p>
          <ul>
            <li>Demonstrate my software development skills through real-world implementation</li>
            <li>Provide an interactive way to showcase my resume and projects</li>
            <li>Share insights into my personal interests, including sports and technology</li>
            <li>Maintain a fun and engaging environment, including a hidden page for those who enjoy Easter eggs</li>
          </ul>
          
          <h2>Showcasing Technical Skills</h2>
          <p>This website is a reflection of my ability to build modern, responsive web applications. Through the use of technologies such as Next.js, React, and AI-powered features, I aim to create an engaging and dynamic experience for visitors.</p>
          
          <h2>Personalization and Fun</h2>
          <p>Beyond its professional purpose, this website also serves as a glimpse into my personality. I believe in balancing hard work with enjoyment, and I’ve integrated elements that reflect my interests and mindset. Whether it’s a hidden page for curious visitors or interactive elements that enhance the user experience, I wanted this site to be both functional and enjoyable.</p>
          
          <h2>Looking Forward</h2>
          <p>This website is an evolving project. As I continue to grow in my field, I plan to update it with new projects, journey posts, and features that further enhance its purpose. I hope it serves as both a professional portfolio and a space where I can share my journey with others.</p>
        `,
      },
      "almost-here": {
        content: `
          <p>As I sit down to write this journal entry, it’s hard to believe that commencement is just around the corner. In a month’s time, on May 10th, I’ll be walking across the stage to receive my degree. This moment has been years in the making, and as I reflect on the road that brought me here, I can’t help but feel a wave of emotions—gratitude, pride, and even a little disbelief.</p>
      
          <p>My college journey started at Saint Martin’s University in Washington, where I spent three unforgettable years. Being part of a college baseball program was a dream come true. The early mornings, the long practices, the road trips with teammates, and the competitive games—those experiences shaped me in powerful ways. I learned what it means to be dedicated, to work hard even when no one is watching, and to keep going when things get tough. More than just a sport, baseball was part of my identity, and Saint Martin’s gave me a place to grow as both an athlete and a student.</p>
      
          <p>But life has a way of guiding us in unexpected directions. After three years, I made the difficult decision to move back home, switch my major, and enroll at Bushnell University. It was a reset—academically, emotionally, and personally. Leaving baseball behind was not easy. It took time to accept that my path was changing, and that stepping away from the game didn’t mean giving up—it meant growing in a different direction.</p>
      
          <p>The last two years at Bushnell have challenged me more than I ever imagined, but they’ve also reminded me of what I’m capable of. I’ve pushed through the self-doubt, late nights, long coding sessions, and the pressure of redefining myself without sports. And along the way, I’ve found a new passion and purpose in Computer Science.</p>
      
          <p>Some of the milestones I’m proud of during my time at Bushnell include:</p>
      
          <ul>
            <li>Switching majors and thriving in a field that was once unfamiliar to me</li>
            <li>Building my own portfolio website from scratch—this very site you’re reading from</li>
            <li>Completing complex programming projects and learning new technologies like ASP.NET, Next.js, and AI integration</li>
            <li>Forming lasting connections with professors, classmates, and mentors who have encouraged and inspired me</li>
          </ul>
      
          <p>But beyond the technical achievements, the biggest victories have been personal. I’ve learned to trust myself. I’ve learned that it’s okay to let go of what once defined you to make room for what’s next. I’ve learned that your path doesn’t have to look like anyone else’s, and that every step forward—no matter how small—is worth celebrating.</p>
      
          <p>Here are just a few things I’m looking forward to in the near future:</p>
      
          <ol>
            <li>Finishing the final stages of this website and launching it publicly to showcase my skills and story</li>
            <li>Graduating with a Bachelor’s of Science Degree in Computer Science: Software Engineering and a Minor in Mathematics</li>
            <li>Beginning a meaningful career where I can continue growing and solving real-world problems</li>
            <li>Spending quality time with friends and family who’ve supported me throughout this journey</li>
            <li>Continuing to explore my love for technology, gaming, sports, and creative development in new and exciting ways</li>
          </ol>
      
          <p>To anyone reading this who's been part of my journey — THANK YOU! Your support has meant the world. And to those who may be going through a season of change or uncertainty: trust yourself. The road ahead may look different than you planned, but that doesn’t mean it’s any less meaningful. In fact, it might be exactly what you need to become the best version of yourself.</p>
      
          <p>I’m proud of how far I’ve come. And I’m even more excited for what’s next.</p>

          <p><b>To my parents and brother,</b></p>
          <p>From the bottom of my heart, thank you all for the motivation and drive that you unknowingly give me to be a better and successful person. I love you guys, you all help keep me motivated and going. </p>
          <p>Everything I’ve accomplished so far is a reflection of your unwavering support—and everything I aim to accomplish moving forward will continue to be rooted in the values and strength you’ve helped instill in me.</p>

          <p>-Isaiah</p>
        `,
      },
      "explore-seattle": {
        content: `
        <h1>Day 1:</h1> 
        <h2>Arrival and Baseball</h2>
        
        [CAROUSEL:mariners]

        <p>
          Our Seattle weekend began with the main event - a Seattle Mariners game at T-Mobile Park. The atmosphere was
          electric as fans filled the stadium, eagerly anticipating the first pitch.
        </p>

        <h3>The Stadium Experience</h3>
        <p>
          T-Mobile Park is truly a beautiful venue. From the moment I walk in, I am struck by the impressive
          architecture and the stunning view of the field. The retractable roof was open, allowing the perfect Seattle
          weather to enhance the game-day experience.
        </p>

        <p>
          The smell of classic ballpark food filled the air - hot dogs, popcorn, and that unmistakable scent of freshly
          cut grass on the field. I couldn't resist grabbing some garlic fries, a Seattle Mariners baseball staple!
        </p>

        <h3>Game Highlights</h3>
        <p>
          The Mariners faced off against Texas Rangers, and the game was full of exciting moments. In the fifth
          inning, Cal Raleigh hit an incredible home run that had the entire stadium on their feet. The crowd's roar
          was deafening and sure to send chills down your spine! Not to mention, Luke Raley quickly made up for his mistake
          in right field in the first, missing a fly ball to prevent a run from scoring, by knocking in 3 runs himself throughout the game. 
        </p>

        <p>
          The pitching was particularly impressive today. Bryan Woo threw seven strikeouts that demonstrated why
          they continue to have the dream opportunity to play in the big leagues. Woo's start was rocky, but after figuring out 
          what was wrong, he was able to retire the next 12 batters after letting up only a single in the fourth.
        </p>

        <h1>Day 2:</h1>
        <h2>Pike Place Market</h2>
        
        [CAROUSEL:pikeplace]

        <p>
          No trip to Seattle is complete without visiting the iconic Pike Place Market. We arrived early in the morning to watch the famous fish throwing at Pike Place Fish Market - an entertaining spectacle where fishmongers toss fresh fish to each other before wrapping them for customers.
        </p>

        <p>
          The market was a feast for all senses. The aroma of fresh flowers mixed with the scent of baked goods and coffee. Colorful produce stands displayed fruits and vegetables in perfect arrangements, while artisans sold handcrafted jewelry, art, and souvenirs.
        </p>

        <h3>Food Adventures</h3>
        <p>
          We spent hours walking around and exploring the different food and shopping options. The original Starbucks location had a line around the corner, so unfortunately we did not go in but we were reluctant enough to stroll by and get a good view of the interior. For lunch, we enjoyed a nice meal at McMenamins while enjoying our day of exploration.
        </p>

        <p>
          One of the market's 'hidden' treasures was the Gum Wall in Post Alley - an oddly fascinating attraction covered in thousands of pieces of chewing gum. It's strangely photogenic and definitely a unique Seattle experience!
        </p>

        <h2>Museum of Pop Culture (MoPOP)</h2>
        
        [CAROUSEL:mopop]

        <p>
          After lunch, we headed to the Museum of Pop Culture (MoPOP), housed in a stunning Frank Gehry-designed building that's meant to represent the dynamic and ever-changing nature of pop culture. The building itself is a work of art with its undulating, colorful metal exterior that changes appearance depending on the angle and light.
        </p>

        <p>
          Inside, we explored exhibits dedicated to science fiction, fantasy, horror cinema, video games, and of course, music. The Nirvana and Jimi Hendrix exhibits were particularly impressive, showcasing Seattle's incredible contribution to music history. My favorite exhibit had to have been the Horror Film exhibit, which featured props and costumes from classic horror films. I was amazed by the level of detail and craftsmanship that went into creating these iconic pieces.
        </p>

        <h3>Interactive Experiences</h3>
        <p>
          What makes MoPOP special is how interactive it is. We got to play instruments in the Sound Lab, record our own songs, and even try my hand at DJing. The Science Fiction Museum section featured props and costumes from iconic films and TV shows that made me feel like a kid again.
        </p>

        <p>
          The indie game exhibit was another highlight, where I played games created by independent developers and learned about the creative process behind game design. I could have easily spent the entire day here!
        </p>

        <h2>Final Thoughts</h2>
        <p>
          This weekend in Seattle offered the perfect blend of sports, culture, food, and bonding. From the roar of the crowd at T-Mobile Park to the quiet moments admiring city views, each experience added to my appreciation of this unique Pacific Northwest city. I couldn't have been more happy with how the trip went and being able to spend it with my beautiful girlfriend, Addie, and her younger sister, Paytan.
        </p>

        <p>
          The Mariners won with a final score of 9-2, but the game was just one highlight in a weekend full of memorable moments. Seattle's diverse attractions and vibrant energy make it a city I'll definitely visit again.
        </p>
      `,
        carousels: {
          mariners: [
            { src: "/journey_images/seattle/right_field.jpg", alt: "View from my seat at the Mariners baseball game" },
            { src: "/journey_images/seattle/us_game.jpg", alt: "My partner and I in our seats" },
          ],
          pikeplace: [
            { src: "/journey_images/seattle/pike_place.jpg", alt: "The iconic Pike Place Market sign and bustling marketplace" },
            { src: "/journey_images/seattle/post_alley.jpg", alt: "Famous Post Alley, home of the gum wall" },
            { src: "/journey_images/seattle/gumwall_close.jpg", alt: "The bizarre but interesting gum wall" },
          ],
          mopop: [
            { src: "/journey_images/seattle/front_mopop.jpg", alt: "Addie and Paytan posing with musician statue" },
            { src: "/journey_images/seattle/addie_mopop.jpg", alt: "Addie posing through a hole in the wall in the MoPOP" },
            { src: "/journey_images/seattle/paytan_indie_game.jpg", alt: "Paytan playing an game in the Indie game exhibit" },
            { src: "/journey_images/seattle/spaceship_mopop.jpg", alt: "Science Fiction Museum section at MoPOP: Spaceship Photo" },
            { src: "/journey_images/seattle/in_the_studio.jpg", alt: "In the vocal studio room in the interactive music exhibit with Paytan" },
          ],
        },
      },
      "ready-to-deploy": {
      content: `
      <p>
      Ready to launch after months of hard work, brainstorming, late-night coding sessions, and endless tweaking, I’m proud to say that my personal website is finally ready for deployment.
      </p>
      
      <p>
        This project has been more than just an assignment or portfolio piece, it’s been a reflection of who I am. Throughout this journey, I’ve poured my personality, my creativity, and my technical skills into every component of this site. From the layout and color schemes to the Easter eggs and interactive features, every detail has been crafted with intention.
      </p>

      <p>What started as an idea has grown into something I’m proud to showcase—not only to my course instructor and classmates but also to my friends, family, and potential employers. This site is a digital introduction to who I am, what I care about, and what I’m capable of as a developer.</p>

      <p>I’ve learned so much through this process—how to plan a project from start to finish, how to work through frustrating bugs, and how rewarding it feels to see something you imagined become a reality on screen. Along the way, I’ve improved my skills in Next.js, React, HTML/CSS, and more, building a stronger foundation of knowledge for them.</p>

      <p>Some things I’m most proud of in this project include:</p>
      <ul>
        <li>Implementing light and dark mode with dynamic animations and interactive elements.</li>
        <li>Creating a secret hidden page.</li>
        <li>Designing a layout that reflects my identity, goals, and values.</li>
        <li>Building a chatbot that can reflect my personality and assist with user questions and comments.</li>
      </ul>

      <p>I’ll be deploying this project through <strong>Vercel</strong> using the connected GitHub repository, allowing for easy version control, real-time updates, and streamlined collaboration when needed. It’s exciting to see my code come to life on a real, publicly accessible domain where it can serve as both a personal platform and professional portfolio.</p>

      <p>As I prepare to launch this site, I’m not just wrapping up a class project—I’m laying the groundwork for my professional future. I hope to keep updating it, adding new features, and using it as a living portfolio that grows with me as I continue to learn and evolve.</p>

      <p>To anyone visiting this site: welcome, and thank you for being here. I hope it gives you a glimpse into who I am and what I love doing. And to those who've supported me along the way—thank you for believing in me.</p>

      <p>Let’s go live.</p>
      `,
      },
  }
  
  // Combine post metadata with content
  export function getFullPostBySlug(slug) {
    const post = getPostBySlug(slug)
    if (!post) return null
  
    const postContent = journeyPostsContent[slug]
  if (!postContent) return null

  const content = postContent.content || ""
  const carousels = postContent.carousels || {}

  return { ...post, content, carousels }
  }
  
  