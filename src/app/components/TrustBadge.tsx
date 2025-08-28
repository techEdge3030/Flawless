import Image from "next/image";

interface TrustBadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export default function TrustBadge({
  icon,
  text,
  className = "",
}: TrustBadgeProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        {icon}
      </div>
      <p className="font-helvetica text-sm font-normal text-black leading-[150%] tracking-[-0.132px] max-w-[200px]">
        {text}
      </p>
    </div>
  );
}
