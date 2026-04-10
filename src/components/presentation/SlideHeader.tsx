import logo from "@/assets/riseup-asia-logo.png";

interface SlideHeaderProps {
  dark?: boolean; // true = dark bg (white logo), false = accent bg (dark logo)
}

export default function SlideHeader({ dark = true }: SlideHeaderProps) {
  return (
    <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex items-center px-[60px] py-[36px]">
      <img
        src={logo}
        alt="Riseup-Asia"
        className={`h-[48px] object-contain ${dark ? "opacity-80" : "opacity-60 brightness-0"}`}
      />
    </div>
  );
}
