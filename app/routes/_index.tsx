import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Home" }]
}

export default function Index() {
	return (
		<div>
			<h1>Home Page</h1>
		</div>
	)
}
