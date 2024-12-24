export function Footer() {
  return (
    <footer className="py-6 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dérik Bosing Sehn. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

