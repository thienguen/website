import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export function CardHoverEffect({ children, ...props }: PropsWithChildren<{ className?: string }>) {
	return <div className={clsx('group', props.className)}>{children}</div>;
}