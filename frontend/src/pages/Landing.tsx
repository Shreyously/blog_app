import React from 'react';
import { Link } from 'react-router-dom';


interface Props {}

const Component: React.FC<Props> = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
        <div  className="text-xl font-bold" onClick={(e) => e.preventDefault()}>
          Medium
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/signin"}>
          <div
            
            className="bg-black text-white p-5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground"
            
          >
            Sign In
          </div>
          </Link>

          <Link to={"/signup"}>
          <div
            
            className="bg-white text-black p-5 rounded-lg inline-flex items-center justify-center  bg-primary  text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            
          >
            Sign Up
          </div>
        
          </Link>
        </div> 
          
      </header>
      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Discover the power of Medium
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Medium is a platform where ideas take shape, stories are told, and knowledge is shared. Explore a world
                of diverse perspectives and unlock your creative potential.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={(e) => e.preventDefault()}
                >
                  Start Writing
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onClick={(e) => e.preventDefault()}
                >
                  Explore Stories
                </a>
              </div>
            </div>
            <img
                src="https://media.licdn.com/dms/image/sync/D4E27AQG4HXiOC3eZAQ/articleshare-shrink_800/0/1712115722819?e=2147483647&v=beta&t=mvh4YoVddh3A323KIeOw62UuEzO_3ic2pK1xp_2sHV4"
                width="550"
                height="550"
                alt="Medium"
                className="mx-auto w-full h-auto rounded-xl object-contain"
            />

          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <img
              src="https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?cs=srgb&dl=pexels-jovydas-3113541.jpg&fm=jpg"
              width="550"
              height="550"
              alt="Medium Features"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unleash Your Creativity</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Medium empowers you to share your ideas, stories, and expertise with a global audience. Discover new
                perspectives, engage in meaningful discussions, and grow as a writer.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <PenIcon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Intuitive Writing Tools</h3>
                    <p className="text-muted-foreground">
                      Craft your content with ease using Medium's powerful writing tools and formatting options.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <BookIcon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Seamless Publishing</h3>
                    <p className="text-muted-foreground">
                      Publish your work with a single click and reach a captivated audience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <InfoIcon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Insightful Analytics</h3>
                    <p className="text-muted-foreground">
                      Track your content's performance and gain valuable insights to improve your writing.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover Diverse Perspectives
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Medium is a platform where people from all walks of life come together to share their unique
                perspectives and experiences. Explore a world of diverse ideas and broaden your horizons.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={(e) => e.preventDefault()}
                >
                  Start Reading
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onClick={(e) => e.preventDefault()}
                >
                  Become a Member
                </a>
              </div>
            </div>
            <img
              src="https://removal.ai/wp-content/uploads/2021/09/black-background-04-coolbackgrounds.png"
              width="550"
              height="550"
              alt="Medium Community"
              className="mx-auto w-full h-auto rounded-xl object-contain"
            />
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <a href="#" onClick={(e) => e.preventDefault()}>
              About
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Careers
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Blog
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Press
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Product</h3>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Features
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Pricing
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Integrations
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              API
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Help Center
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Writers
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Partners
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Community
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Cookie Policy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Accessibility
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Twitter
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Facebook
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Instagram
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function PenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}

export default Component;
