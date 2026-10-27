import Image from "next/image"

export function ProjectArtwork({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <div className="project-artwork">
      <Image
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 58vw, 760px"
        src={src}
      />
    </div>
  )
}
