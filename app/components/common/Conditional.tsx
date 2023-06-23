import { PropsWithChildren, ReactNode } from "react"

type ConditionalProps = { fallback?: ReactNode; condition: boolean }

/**
 * The pourpose of this component is to avoid the use of ternary operators
 * and && operators in the JSX code.
 */

const Conditional: React.FC<PropsWithChildren<ConditionalProps>> = ({
	fallback,
	condition,
	children
}) => {
	return condition ? <>{children}</> : <>{fallback}</>
}

export default Conditional
