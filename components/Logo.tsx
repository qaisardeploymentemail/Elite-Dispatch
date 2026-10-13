import Image from "next/image";

// The Elite Truck Dispatch mark is a square badge on a near-black ground, so the
// same asset reads correctly on both the light navbar and the dark footer.
// It replaces the previous wide 1012x254 lockup — hence the taller sizing here,
// which keeps the wordmark inside the badge legible.
export default function Logo({ onDark = false }: { onDark?: boolean }) {
  if (onDark) {
    return (
      <Image
        src="/logo-footer.png"
        alt="Elite Truck Dispatch"
        width={160}
        height={160}
        className="h-16 w-16 rounded-lg"
      />
    );
  }
  return (
    <Image
      src="/logo.png"
      alt="Elite Truck Dispatch"
      width={160}
      height={160}
      priority
      className="h-12 w-12 rounded-lg lg:h-14 lg:w-14"
    />
  );
}