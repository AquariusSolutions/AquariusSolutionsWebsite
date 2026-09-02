// The Aquarius water-bearer sign, rendered from Cosmobiofont2 where it is
// mapped to the letter "A". Kept as a component so the mapping lives in one
// place — if the font ever changes, only this file needs to update.

type AquariusGlyphProps = {
  className?: string;
  /** Accessible label; set to "" to mark purely decorative. */
  label?: string;
};

export function AquariusGlyph({
  className,
  label = "Aquarius",
}: AquariusGlyphProps) {
  return (
    <span
      className={`font-cosmo leading-none ${className ?? ""}`}
      role="img"
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      A
    </span>
  );
}
