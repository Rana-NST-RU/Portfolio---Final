import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground order-3 md:order-1">
          &copy; {new Date().getFullYear()} Ranajeet Roy. All rights reserved.
        </p>

        {/* Links Container */}
        <div className="flex flex-col items-center gap-4 order-2">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ranajeet-roy-459ab5236/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Rana-NST-RU"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Coding Profiles */}
          <div className="flex gap-4">
            <a
              href="https://leetcode.com/u/RANA_NST/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110"
              title="LeetCode"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/nicobellim03k"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110"
              title="GeeksForGeeks"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.257.004c-.37.01-.735.04-1.1.092a10.496 10.496 0 0 0-3.296 1.014 11.51 11.51 0 0 0-4.805 4.805 10.496 10.496 0 0 0-1.014 3.296c-.103.73-.103 1.47 0 2.2.102 1.146.39 2.24 1.014 3.296a11.51 11.51 0 0 0 4.805 4.805c1.056.624 2.15.912 3.296 1.014.73.103 1.47.103 2.2 0a10.496 10.496 0 0 0 3.296-1.014 11.51 11.51 0 0 0 4.805-4.805c.624-1.056.912-2.15 1.014-3.296.103-.73.103-1.47 0-2.2a10.496 10.496 0 0 0-1.014-3.296 11.51 11.51 0 0 0-4.805-4.805A10.496 10.496 0 0 0 13.357.096a9.413 9.413 0 0 0-2.1-.092zm-.2 2.586c.78-.005 1.553.094 2.313.295 1.146.302 2.15.912 3.096 1.758.946.846 1.656 1.85 2.058 3.096.402 1.246.402 2.492 0 3.738-.402 1.246-1.112 2.25-2.058 3.096-.946.846-1.95 1.456-3.096 1.758-1.246.402-2.492.402-3.738 0-1.246-.402-2.25-1.112-3.096-2.058-.846-.946-1.456-1.95-1.758-3.096-.402-1.246-.402-2.492 0-3.738.402-1.246 1.112-2.25 2.058-3.096.946-.846 1.95-1.456 3.096-1.758a8.004 8.004 0 0 1 1.125-.195z" />
              </svg>
            </a>
            <a
              href="https://codeforces.com/profile/RRHACKER"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110"
              title="Codeforces"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll to Top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hover:scale-110 order-1 md:order-3"
          title="Back to Top"
        >
          <ArrowUp size={24} />
        </a>
      </div>
    </footer>
  );
};
