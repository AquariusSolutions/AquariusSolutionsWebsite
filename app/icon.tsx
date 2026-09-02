import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Favicon rendered from the Cosmobio astrological font. The Aquarius sign is
// mapped to the letter "A" in the font (see app/layout.tsx).
export default async function Icon() {
  const cosmobio = await readFile(
    join(process.cwd(), "app/fonts/Cosmobiofont2.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        fontFamily: "Cosmobio",
        fontSize: 26,
        background: "#05060f",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#22d3ee",
        borderRadius: "50%",
      }}
    >
      A
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Cosmobio",
          data: cosmobio,
          style: "normal",
        },
      ],
    },
  );
}
