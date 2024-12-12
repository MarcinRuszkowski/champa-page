import React from "react";
import BlurFade from "@/components/ui/blur-fade";

const images = Object.values(
  import.meta.glob("@/assets/img*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  })
) as string[];

export const GalleryPage: React.FC = () => {
  return (
    <section id="photos">
      <div className="columns-2 gap-5 sm:columns-3 mx-5 my-7">
        {images.map((imageUrl, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Local image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};
