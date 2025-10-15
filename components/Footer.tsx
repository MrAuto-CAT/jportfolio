export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-accent/30">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-2">Joseph A</h3>
            <p className="text-secondary">Software Engineering Student</p>
            <p className="text-sm text-secondary mt-1">Building the future, one project at a time</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-4">
              <a 
                href="mailto:joseph.a@example.com" 
                className="btn-secondary px-4 py-2 text-sm"
                aria-label="Send email"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/joseph-a" 
                className="btn-secondary px-4 py-2 text-sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Joseph A. All rights reserved. 
            <span className="mx-2">•</span>
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
