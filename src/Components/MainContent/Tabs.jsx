export default function Tabs({ children, title, ul, Container, ...props }) {
	return (
		<section {...props}>
			<Container>{title}</Container>
			{ul}
			{children}
		</section>
	);
}
