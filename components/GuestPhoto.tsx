import type { Guest } from '@/lib/guests';

interface GuestPhotoProps {
    guest: Guest;
    className?: string;
}

function getInitials(name: string): string {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase();
}

/**
 * Guest photo, falling back to the guest's initials when no photo is set.
 */
export default function GuestPhoto({ guest, className = '' }: GuestPhotoProps) {
    const { photo, name } = guest.frontmatter;

    if (photo) {
        return <img src={photo} alt={name} className={className} />;
    }

    return (
        <div
            role="img"
            aria-label={name}
            className={`${className} flex items-center justify-center bg-primary/10 text-primary font-bold select-none [container-type:inline-size]`}
        >
            <span className="text-[min(2.5rem,35cqi)] leading-none">{getInitials(name)}</span>
        </div>
    );
}
