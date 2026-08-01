export default function Tabs({ children, title, ul, Container = "menu", ...props }) {
	return (
		<section {...props}>
			<Container>{title}</Container>
			{ul}
			{children}
		</section>
	);
}
