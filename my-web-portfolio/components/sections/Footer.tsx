export default function Footer() {
	return (
		<div className="mt-20 text-center text-gray-500 text-sm">
			<p>
				© {new Date().toLocaleString("default", { month: "long" })}{" "}
				{new Date().getFullYear()} Vusani Matsigila. All rights reserved.
			</p>
		</div>
	);
}
