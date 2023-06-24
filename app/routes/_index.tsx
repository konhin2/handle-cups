import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Home" }]
}

export default function Index() {
	return (
		<div>
			<h1 className="text-3xl font-bold underline m-10">Hello world!</h1>
		</div>
	)
}
